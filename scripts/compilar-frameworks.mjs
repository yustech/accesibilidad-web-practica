import { build, context } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const entryPoints = {};
for (const variant of ['inicio', 'solucion']) {
  for (const framework of ['react', 'vue', 'lit']) {
    entryPoints[`${variant}-${framework}`] = path.join(
      root,
      'practicas/18-frameworks',
      variant,
      `${framework}.js`,
    );
  }
}
entryPoints['12-componentes-lit'] = path.join(
  root,
  'practicas/12-componentes/solucion/propuesta-lit.js',
);
const options = {
  entryPoints,
  outdir: path.join(root, 'dist/frameworks'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
};
if (process.argv.includes('--watch')) {
  const watcher = await context(options);
  await watcher.watch();
  console.log(
    'Ejemplos de React, Vue y Lit preparados. Se actualizarán al guardar. Ctrl+C termina la vigilancia.',
  );
} else {
  await build(options);
  console.log(
    'Ejemplos locales preparados: inicio y solución de React, Vue y Lit, más la propuesta Lit de componentes.',
  );
}
