// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // specify the entry points
  target: 'esnext', // target environment
  format: ['esm', 'cjs'], // output format
  sourcemap: true,
  dts: true,
  clean: true, // clean output directory before each build
  tsconfig: 'tsconfig.json', // use specific tsconfig file,
});
