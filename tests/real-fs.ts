import { vi } from 'vitest';

// Real file system access; "node:fs" is replaced by memfs in tests.
export const realFs = await vi.importActual<typeof import('node:fs')>('node:fs');
