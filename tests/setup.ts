import { afterEach, beforeEach, vi } from 'vitest';
import { vol } from 'memfs';

vi.mock('node:fs', async () => {
  const { fs } = await import('memfs');
  return { ...fs, default: fs };
});

beforeEach(() => {
  vol.reset();
  vol.mkdirSync(process.cwd(), { recursive: true });
});

afterEach(() => {
  vol.reset();
});
