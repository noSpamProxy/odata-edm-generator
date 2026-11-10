import { vol } from 'memfs';
import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL, URL } from 'node:url';
import { assert, describe, it } from 'vitest';
import { Configuration } from '../src/cli/configuration.js';
import { $Generator } from '../src/cli/generator.js';
import { Endpoint, EndpointConfiguration } from '../src/cli/shared.js';
import { realFs } from './real-fs.js';

const __dirname = process.cwd();

describe('generator', function () {

  async function readAllContent(fs: typeof realFs.promises, path: string): Promise<Map<string, string>> {
    const result = new Map<string, string>();
    for (const dirent of await fs.readdir(path, { encoding: 'utf8', withFileTypes: true })) {
      const entryName = dirent.name;
      const completePath = join(path, entryName);
      if (dirent.isFile()) {
        result.set(entryName, await fs.readFile(completePath, 'utf8'));
      } else {
        const content = await readAllContent(fs, completePath);
        for (const [key, value] of content) {
          result.set(join(entryName, key), value);
        }
      }
    }
    return result;
  }

  function assertContent(actual: Map<string, string>, expected: Map<string, string>) {
    assert.strictEqual(actual.size, expected.size, 'size mismatch');
    const actualKeys = Array.from(actual.keys()).sort();
    const expectedKeys = Array.from(expected.keys()).sort();
    assert.deepStrictEqual(actualKeys, expectedKeys, 'mismatch in entries');
    for (const key of actualKeys) {
      assert.strictEqual(actual.get(key)!, expected.get(key)!, `Content mismatch in '${key}'`);
    }
  }

  const dataPath = join(__dirname, 'tests', 'data');
  for (const dirent of (realFs.readdirSync(dataPath, { encoding: 'utf8', withFileTypes: true }))
    .filter((x) => x.isDirectory())) {
    const dirName = dirent.name;
    it(`works for ${dirName}`, async function () {
      // arrange
      const baseOutputPath = join(process.cwd(), randomUUID());
      const caseDir = join(dataPath, dirName);
      const inputDir = join(caseDir, 'input');

      vol.mkdirSync(baseOutputPath, { recursive: true });
      const configFilePath = join(inputDir, 'config.cjs');

      let configuredEndpoints: EndpointConfiguration[] | undefined = undefined;
      let hasConfiguredEndpoints = false;
      const args = ['--outputDir', baseOutputPath];
      if (realFs.existsSync(configFilePath)) {
        args.unshift('--config', configFilePath);
        vol.fromJSON({ [configFilePath]: realFs.readFileSync(configFilePath, 'utf8') });
        let importedConfig = await import(/* @vite-ignore */ pathToFileURL(configFilePath).href);
        importedConfig = importedConfig.default ?? importedConfig;
        configuredEndpoints = importedConfig.endpoints;
        hasConfiguredEndpoints = Array.isArray(configuredEndpoints) && configuredEndpoints.length > 0;
      }
      if (!hasConfiguredEndpoints) {
        args.push('--endpoint', 'https://api.example.com');
      }
      const expected = await readAllContent(realFs.promises, join(caseDir, 'expected'));

      try {
        const configuration = await Configuration.createFromCLIArgs(args);
        const generator = new $Generator();

        for (const ep of configuration.endpoints) {
          let epInput = join(inputDir, new URL(ep.url).hostname);
          epInput = realFs.existsSync(epInput) ? epInput : inputDir;

          const edmxXml = realFs.readFileSync(join(epInput, 'metadata.xml'), 'utf8');
          const endpoints: Endpoint[] = JSON.parse(realFs.readFileSync(join(epInput, 'endpoints.json'), 'utf8')).value;

          // act
          await generator.generateEndpointsFile(endpoints, ep);
          await generator.generateEdm(edmxXml, endpoints, ep);
        }

        // assert
        const actual = await readAllContent(fs, baseOutputPath);
        assertContent(actual, expected);
      } finally {
        Configuration.dispose();
      }
    });
  }
});