import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
import { createCourseServer } from '../scripts/servidor.mjs';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const server = createCourseServer();
let browser, page, base;
before(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});
after(async () => {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
});
async function audit() {
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const violations = await page.evaluate(async () =>
    (
      await window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
        },
      })
    ).violations.map((item) => item.id),
  );
  assert.deepEqual(violations, []);
}
for (const framework of ['react', 'vue', 'lit']) {
  test(`${framework}: render real, título y foco tras navegar; filtro sin mover foco`, async () => {
    const errors = [];
    const listener = (error) => errors.push(error.message);
    page.on('pageerror', listener);
    try {
      await page.goto(`${base}/practicas/18-frameworks/solucion/${framework}.html`);
      await page.getByRole('heading', { level: 1, name: 'Catálogo' }).waitFor();
      await audit();
      await page.getByRole('link', { name: 'Ayuda', exact: true }).click();
      await page.waitForFunction(
        () =>
          document.activeElement?.tagName === 'H1' &&
          document.activeElement.textContent === 'Ayuda',
      );
      assert.match(await page.title(), /Ayuda/);
      await audit();
      await page.getByRole('link', { name: 'Catálogo', exact: true }).click();
      await page.waitForFunction(
        () => document.activeElement?.textContent === 'Catálogo',
      );
      await page.getByLabel('Modalidad').selectOption('online');
      await page.getByRole('button', { name: 'Aplicar', exact: true }).focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction(
        () =>
          document.querySelector('[role="status"]')?.textContent ===
          '2 cursos disponibles',
      );
      assert.equal(
        await page
          .getByRole('button', { name: 'Aplicar', exact: true })
          .evaluate((el) => el === document.activeElement),
        true,
      );
      assert.equal(await page.locator('li').count(), 2);
      assert.match(await page.title(), /Catálogo/);
      await audit();
      await page.setViewportSize({ width: 320, height: 800 });
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        true,
      );
      await page.setViewportSize({ width: 1280, height: 720 });
      assert.deepEqual(errors, []);
    } finally {
      page.off('pageerror', listener);
    }
  });
}
test('frameworks iniciales: se conserva el caso didáctico con fallos de nombre y contexto', async () => {
  for (const framework of ['react', 'vue', 'lit']) {
    await page.goto(`${base}/practicas/18-frameworks/inicio/${framework}.html`);
    await page.getByRole('heading', { name: 'Catálogo', exact: true }).waitFor();
    assert.equal(await page.getByRole('combobox').getAttribute('aria-label'), null);
    assert.equal(await page.locator('label').count(), 0);
    await page.getByRole('link', { name: 'Ayuda', exact: true }).click();
    await page.getByRole('heading', { name: 'Ayuda', exact: true }).waitFor();
    assert.equal(
      await page.locator('h1').evaluate((el) => el === document.activeElement),
      false,
    );
    assert.doesNotMatch(await page.title(), /^Ayuda/);
  }
});
test('rango: teclado, unidades, límites y alternativa al arrastre', async () => {
  await page.goto(`${base}/practicas/17-interaccion/solucion/index.html`);
  const range = page.getByRole('slider', { name: 'Duración máxima del curso' });
  await range.focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await range.inputValue(), '25');
  assert.equal(await range.getAttribute('aria-valuetext'), '25 horas');
  await page.keyboard.press('Home');
  assert.equal(await range.inputValue(), '5');
  assert.equal(
    await page.getByRole('button', { name: 'Reducir 5 horas' }).isDisabled(),
    true,
  );
  await page.keyboard.press('End');
  assert.equal(await range.inputValue(), '40');
  assert.equal(
    await page.getByRole('button', { name: 'Aumentar 5 horas' }).isDisabled(),
    true,
  );
  await page.getByRole('button', { name: 'Reducir 5 horas' }).click();
  assert.equal(await range.inputValue(), '35');
  await audit();
});
test('carrusel: diapositiva activa, posición anunciada y foco estable', async () => {
  await page.goto(`${base}/practicas/17-interaccion/solucion/index.html`);
  const next = page.getByRole('button', { name: 'Curso siguiente' });
  await next.focus();
  await page.keyboard.press('Space');
  assert.equal(await next.evaluate((el) => el === document.activeElement), true);
  assert.match(
    await page.getByRole('status').textContent(),
    /Curso 2 de 3: CSS adaptable/,
  );
  assert.equal(await page.locator('.slide:not([hidden])').count(), 1);
  assert.equal(
    await page.getByRole('heading', { name: 'HTML accesible', exact: true }).count(),
    0,
  );
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  assert.match(await page.getByRole('status').textContent(), /Curso 1 de 3/);
  await audit();
});
test('puntero táctil emulado: botones sin arrastre y navegación sin hover', async () => {
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  try {
    const tab = await mobile.newPage();
    await tab.goto(`${base}/practicas/17-interaccion/solucion/index.html`);
    await tab.getByRole('button', { name: 'Aumentar 5 horas' }).tap();
    assert.equal(await tab.getByRole('slider').inputValue(), '25');
    await tab.getByRole('button', { name: 'Curso siguiente' }).tap();
    assert.match(await tab.locator('#posicion').textContent(), /Curso 2 de 3/);
    assert.equal(
      await tab.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      true,
    );
    await tab.goto(`${base}/practicas/07-navegacion/solucion/index.html`);
    const disclosure = tab.getByRole('button');
    await disclosure.tap();
    assert.equal(await disclosure.getAttribute('aria-expanded'), 'true');
  } finally {
    await mobile.close();
  }
});
test('vídeos: reproducción, pausa, pistas cargadas y sincronización con los estados', async () => {
  await page.goto(`${base}/multimedia/index.html`);
  for (const [id, duration, cues] of [
    ['video-base', 12, 2],
    ['video-descrito', 20, 4],
  ]) {
    const media = page.locator(`#${id}`);
    await page.waitForFunction((id) => document.getElementById(id).readyState >= 1, id);
    const info = await media.evaluate((video) => ({
      duration: video.duration,
      width: video.videoWidth,
      height: video.videoHeight,
      autoplay: video.autoplay,
      controls: video.controls,
    }));
    assert.ok(Math.abs(info.duration - duration) < 0.25);
    assert.equal(info.width, 960);
    assert.equal(info.height, 540);
    assert.equal(info.autoplay, false);
    assert.equal(info.controls, true);
    await page.waitForFunction(
      (id) => document.getElementById(id).textTracks[0]?.cues?.length > 0,
      id,
    );
    assert.equal(await media.evaluate((video) => video.textTracks[0].cues.length), cues);
    await media.evaluate(async (video) => {
      video.muted = true;
      await video.play();
    });
    await page.waitForFunction((id) => document.getElementById(id).currentTime > 0.2, id);
    await media.evaluate((video) => video.pause());
    assert.equal(await media.evaluate((video) => video.paused), true);
    for (const time of [1, 5, duration - 2]) {
      await media.evaluate((video, time) => {
        video.currentTime = time;
      }, time);
      await page.waitForFunction(
        ({ id, time }) => {
          const v = document.getElementById(id);
          return !v.seeking && v.readyState >= 2 && Math.abs(v.currentTime - time) < 0.2;
        },
        { id, time },
      );
      await mkdir(new URL('../test-results/video/', import.meta.url), {
        recursive: true,
      });
      await media.screenshot({
        path: fileURLToPath(
          new URL(`../test-results/video/${id}-${time}.png`, import.meta.url),
        ),
      });
    }
  }
  await audit();
});
test('demo de herramientas: detecta fallos iniciales y permite guardar con teclado en la referencia', async () => {
  await page.goto(`${base}/demo-auditoria/inicio.html`);
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const failures = await page.evaluate(async () =>
    (await window.axe.run()).violations.map((v) => v.id),
  );
  assert.ok(failures.includes('label'));
  assert.ok(failures.includes('link-name'));
  await page.goto(`${base}/demo-auditoria/solucion.html`);
  await page.getByRole('button', { name: 'Guardar interés' }).focus();
  await page.keyboard.press('Enter');
  assert.match(await page.getByRole('status').textContent(), /Interés guardado/);
  await audit();
});
