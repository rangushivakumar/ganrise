import os from 'node:os';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Keep Vite's optimizer cache out of the OneDrive-synced workspace. On Windows,
  // OneDrive and antivirus scanners can temporarily lock node_modules/.vite files.
  cacheDir: path.join(os.tmpdir(), 'ganrise-vite-cache'),
});
