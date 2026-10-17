import { readFile, readdir, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const course = JSON.parse(await readFile(path.join(root, 'curso.json'), 'utf8'));
const errors = [];
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'test-results'].includes(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(p)));
    else result.push(p);
  }
  return result;
}
for (const module of course) {
  for (const file of [
    'README.md',
    'SOLUCION.md',
    'inicio/index.html',
    'inicio/app.js',
    'inicio/estilos.css',
    'solucion/index.html',
    'solucion/app.js',
    'solucion/estilos.css',
  ]) {
    try {
      await stat(path.join(root, 'practicas', module.id, file));
    } catch {
      errors.push(`${module.id}: falta ${file}`);
    }
  }
  if (!module.criteria.length || !module.steps.length || !module.checks.length)
    errors.push(`${module.id}: ficha incompleta`);
}
if (course.length !== 16) errors.push('Se esperaban 16 prácticas');
for (const file of await walk(root)) {
  if (/\.(?:js|mjs)$/.test(file)) {
    try {
      execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    } catch (error) {
      errors.push(path.relative(root, file) + ': ' + error.stderr);
    }
  }
  if (file.endsWith('.html') || file.endsWith('.md')) {
    const text = await readFile(file, 'utf8');
    const refs = file.endsWith('.html')
      ? [...text.matchAll(/(?:src|href)="([^"]+)"/g)].map((x) => x[1])
      : [...text.matchAll(/\]\(([^)]+)\)/g)].map((x) => x[1]);
    for (const ref of refs) {
      if (/^(?:https?:|mailto:|data:|#|\?)/.test(ref)) continue;
      const clean = ref.split(/[?#]/)[0];
      if (!clean) continue;
      if (clean.includes('/vendor/')) continue;
      try {
        await stat(path.resolve(path.dirname(file), decodeURIComponent(clean)));
      } catch {
        errors.push(path.relative(root, file) + ': referencia inexistente ' + ref);
      }
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log('16 prácticas completas, referencias locales y sintaxis verificadas.');
