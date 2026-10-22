import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
import { createCourseServer } from '../scripts/servidor.mjs';

const require = createRequire(import.meta.url);
const modules = JSON.parse(
  await readFile(new URL('../curso.json', import.meta.url), 'utf8'),
);
const server = createCourseServer();
let browser, page, base;
const results = [];
before(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});
after(async () => {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
  await mkdir(new URL('../test-results/', import.meta.url), { recursive: true });
  await writeFile(
    new URL('../test-results/axe.json', import.meta.url),
    JSON.stringify(results, null, 2),
  );
});
async function open(id, variant = 'solucion') {
  await page.goto(`${base}/practicas/${id}/${variant}/index.html`);
}
async function axe(label) {
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const result = await page.evaluate(
    async () =>
      await window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
        },
      }),
  );
  results.push({ label, violations: result.violations, incomplete: result.incomplete });
  assert.deepEqual(
    result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    [],
    label,
  );
}

test('soluciones: reglas automáticas en las 18 prácticas', async () => {
  for (const module of modules) {
    await open(module.id);
    await axe(module.id);
  }
});
test('los inicios contienen barreras detectables de idioma y nombre', async () => {
  await open('01-documento', 'inicio');
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await open('03-enlaces', 'inicio');
  assert.equal(await page.locator('img:not([alt])').count(), 1);
  await open('04-acciones', 'inicio');
  assert.equal(await page.getByRole('button', { name: 'Guardar curso' }).count(), 0);
});
test('botón nativo: Enter y Espacio cambian una sola vez el estado', async () => {
  await open('04-acciones');
  const button = page.getByRole('button', { name: 'Guardar curso' });
  await button.focus();
  await page.keyboard.press('Enter');
  assert.equal(await button.getAttribute('aria-pressed'), 'true');
  await page.keyboard.press('Space');
  assert.equal(await button.getAttribute('aria-pressed'), 'false');
});
test('modal nativo: foco, contención, cierre y retorno', async () => {
  await open('06-foco');
  const opener = page.getByRole('button', { name: 'Abrir inscripción' });
  await opener.focus();
  await page.keyboard.press('Enter');
  await page.getByRole('dialog').waitFor();
  assert.equal(
    await page.locator('#cerrar').evaluate((el) => el === document.activeElement),
    true,
  );
  // La barra del navegador puede recibir foco; el contenido de fondo del documento no.
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press('Tab');
    assert.equal(
      await page.evaluate(
        () => !document.hasFocus() || !!document.activeElement.closest('dialog'),
      ),
      true,
    );
  }
  await page.keyboard.press('Shift+Tab');
  assert.equal(
    await page.evaluate(
      () => !document.hasFocus() || !!document.activeElement.closest('dialog'),
    ),
    true,
  );
  await axe('06-dialogo-abierto');
  await page.keyboard.press('Escape');
  assert.equal(await opener.evaluate((el) => el === document.activeElement), true);
  await opener.click();
  await page.getByRole('button', { name: 'Cancelar', exact: true }).click();
  assert.equal(await opener.evaluate((el) => el === document.activeElement), true);
});
test('navegación y disclosure no incluyen enlaces ocultos en Tab', async () => {
  await open('07-navegacion');
  const button = page.getByRole('button', { name: 'Secciones del portal' });
  await button.focus();
  await page.keyboard.press('Enter');
  assert.equal(await button.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent),
    'Inicio (actual)',
  );
  await page.keyboard.press('Escape');
  assert.equal(await button.getAttribute('aria-expanded'), 'false');
  assert.equal(await button.evaluate((el) => el === document.activeElement), true);
  await open('08-ocultacion');
  const summary = page.locator('summary');
  await summary.focus();
  await page.keyboard.press('Tab');
  assert.notEqual(
    await page.evaluate(() => document.activeElement.textContent),
    'Leer instrucciones',
  );
  await summary.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('details').getAttribute('open'), '');
});
test('formulario: resumen, enlaces de error, corrección y éxito', async () => {
  await open('09-formularios');
  await page.getByRole('button', { name: 'Enviar solicitud' }).click();
  assert.equal(
    await page.locator('#resumen').evaluate((el) => el === document.activeElement),
    true,
  );
  assert.equal(await page.locator('#lista-errores a').count(), 2);
  await axe('09-con-errores');
  await page.locator('#lista-errores a').first().click();
  assert.equal(
    await page.locator('#nombre').evaluate((el) => el === document.activeElement),
    true,
  );
  await page
    .getByLabel('Nombre completo (obligatorio)', { exact: true })
    .fill('Persona de prueba');
  await page
    .getByLabel('Correo electrónico (obligatorio)', { exact: true })
    .fill('persona@example.com');
  await page.getByRole('button', { name: 'Enviar solicitud' }).click();
  assert.equal(await page.locator('#resumen').isVisible(), false);
  assert.match(await page.getByRole('status').innerText(), /Solicitud guardada/);
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 0);
  await axe('09-envio-correcto');
});
test('filtros: recuento y conservación del foco', async () => {
  await open('10-filtros');
  await page.getByLabel('Modalidad', { exact: true }).selectOption('online');
  const apply = page.getByRole('button', { name: 'Aplicar filtros' });
  await apply.click();
  assert.equal(await page.locator('#cursos li:visible').count(), 2);
  assert.match(await page.getByRole('status').innerText(), /2 cursos/);
  assert.equal(await apply.evaluate((el) => el === document.activeElement), true);
  await axe('10-filtrado');
  await page.getByLabel('Modalidad', { exact: true }).selectOption('todos');
  await apply.click();
  assert.equal(await page.locator('#cursos li:visible').count(), 3);
});
test('propuesta alternativa de filtros: estado vacío y restablecimiento', async () => {
  await open('10-filtros', 'solucion/propuesta-alternativa');
  await axe('10-propuesta-alternativa-inicial');

  await page.getByLabel('Modalidad', { exact: true }).selectOption('aula');
  await page.getByLabel('Nivel', { exact: true }).selectOption('avanzado');
  const aplicar = page.getByRole('button', { name: 'Aplicar filtros' });
  await aplicar.click();

  assert.equal(await page.locator('#cursos li:visible').count(), 0);
  assert.equal(await page.locator('#sin-resultados').isVisible(), true);
  assert.match(await page.getByRole('status').innerText(), /0 cursos disponibles/);
  assert.equal(await aplicar.evaluate((el) => el === document.activeElement), true);
  await axe('10-propuesta-alternativa-sin-resultados');

  await page.getByRole('button', { name: 'Restablecer filtros' }).click();
  assert.equal(await page.locator('#cursos li:visible').count(), 3);
  assert.equal(await page.locator('#sin-resultados').isVisible(), false);
  assert.equal(await page.getByLabel('Modalidad').inputValue(), 'todos');
  assert.equal(await page.getByLabel('Nivel').inputValue(), 'todos');
  assert.equal(
    await page.getByLabel('Modalidad').evaluate((el) => el === document.activeElement),
    true,
  );
});
test('tablas: orden, estado y foco', async () => {
  await open('11-tablas');
  const button = page.getByRole('button', { name: 'Ordenar por plazas' });
  await button.click();
  assert.equal(await page.locator('#plazas').getAttribute('aria-sort'), 'ascending');
  assert.deepEqual(await page.locator('tbody td').allTextContents(), ['5', '8', '12']);
  await button.click();
  assert.equal(await page.locator('#plazas').getAttribute('aria-sort'), 'descending');
  assert.deepEqual(await page.locator('tbody td').allTextContents(), ['12', '8', '5']);
  assert.equal(await button.evaluate((el) => el === document.activeElement), true);
});
test('Shadow DOM: nombre e independencia de instancias', async () => {
  await open('12-componentes');
  const one = page.getByRole('button', { name: 'Guardar HTML' }),
    two = page.getByRole('button', { name: 'Guardar CSS' });
  await one.focus();
  await page.keyboard.press('Space');
  assert.equal(await one.getAttribute('aria-pressed'), 'true');
  assert.equal(await two.getAttribute('aria-pressed'), 'false');
});
test('propuesta Lit de favoritos: nombre, estado y evento público', async () => {
  await page.goto(`${base}/practicas/12-componentes/solucion/propuesta-lit.html`);
  const one = page.getByRole('button', { name: 'Guardar HTML' });
  const two = page.getByRole('button', { name: 'Guardar CSS' });
  await one.waitFor();
  await axe('12-propuesta-lit');

  await one.focus();
  await page.keyboard.press('Enter');
  assert.equal(await one.getAttribute('aria-pressed'), 'true');
  assert.equal(await two.getAttribute('aria-pressed'), 'false');
  assert.match(await page.getByRole('status').innerText(), /añadido a favoritos/);

  await one.press('Space');
  assert.equal(await one.getAttribute('aria-pressed'), 'false');
  assert.match(await page.getByRole('status').innerText(), /eliminado de favoritos/);
});
test('multimedia: pausa y preferencia de reducir movimiento', async () => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await open('14-multimedia');
  await page.getByRole('button', { name: 'Pausar movimiento' }).click();
  assert.equal(
    await page
      .locator('#movimiento')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'paused',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(
    await page
      .locator('#movimiento')
      .evaluate((el) => getComputedStyle(el).animationName),
    'none',
  );
  await page.emulateMedia({ reducedMotion: 'no-preference' });
});
test('Bootstrap: plugin real, título, foco y flechas', async () => {
  await open('15-bootstrap');
  const opener = page.getByRole('button', { name: 'Abrir inscripción Bootstrap' });
  await opener.click();
  const modal = page.getByRole('dialog', { name: 'Inscripción Bootstrap', exact: true });
  await modal.waitFor();
  assert.equal(await modal.getAttribute('aria-modal'), 'true');
  await axe('15-bootstrap-abierto');
  await page.keyboard.press('Escape');
  await modal.waitFor({ state: 'hidden' });
  assert.equal(await opener.evaluate((el) => el === document.activeElement), true);
  const toggle = page.getByRole('button', { name: 'Recursos del curso' });
  await toggle.focus();
  await page.keyboard.press('ArrowDown');
  await page.getByRole('link', { name: 'Guía de teclado', exact: true }).waitFor();
  await page.keyboard.press('ArrowDown');
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent),
    'Criterios WCAG',
  );
  await page.keyboard.press('Escape');
});
test('vistas: título y foco tras navegación', async () => {
  await open('16-rutas');
  await page.getByRole('link', { name: 'Ayuda', exact: true }).click();
  assert.match(await page.title(), /Ayuda para la inscripción/);
  assert.equal(
    await page
      .getByRole('heading', { name: 'Ayuda para la inscripción', exact: true })
      .evaluate((el) => el === document.activeElement),
    true,
  );
});
test('soluciones a 320 px no desbordan la página', async () => {
  await page.setViewportSize({ width: 320, height: 700 });
  for (const module of modules) {
    await open(module.id);
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      true,
      module.id,
    );
  }
  await page.setViewportSize({ width: 1280, height: 800 });
});
test('reto integrado: filtro, favorito, inscripción y axe', async () => {
  await page.goto(`${base}/reto-final/solucion/index.html`);
  await axe('reto-inicial');
  await page.getByLabel('Modalidad', { exact: true }).selectOption('online');
  await page.getByRole('button', { name: 'Aplicar filtros' }).click();
  assert.match(await page.locator('#recuento').innerText(), /2 cursos/);
  await page.getByRole('button', { name: 'Guardar curso', exact: true }).press('Space');
  assert.equal(
    await page
      .getByRole('button', { name: 'Guardar curso', exact: true })
      .getAttribute('aria-pressed'),
    'true',
  );
  await page.getByRole('button', { name: 'Abrir inscripción', exact: true }).click();
  await page.getByRole('button', { name: 'Enviar solicitud', exact: true }).click();
  assert.equal(await page.locator('#resumen').isVisible(), true);
  await axe('reto-errores');
  await page.getByLabel('Nombre completo (obligatorio)', { exact: true }).fill('Persona');
  await page
    .getByLabel('Correo electrónico (obligatorio)', { exact: true })
    .fill('persona@example.com');
  await page.getByRole('button', { name: 'Enviar solicitud', exact: true }).click();
  assert.match(await page.locator('#exito').innerText(), /Solicitud guardada/);
  await page.keyboard.press('Escape');
  assert.equal(
    await page.locator('#abrir').evaluate((el) => el === document.activeElement),
    true,
  );
});
