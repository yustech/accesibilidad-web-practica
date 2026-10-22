import { createApp, h, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import {
  alVolver,
  empujarHistorial,
  esActivacionNormal,
  leerVista,
  tituloDocumento,
  urlVista,
  vistas,
} from './propuesta-rutas-nucleo.js';

createApp({
  setup() {
    const vista = ref(leerVista());
    const visitas = ref([vistas[vista.value].titulo]);
    const encabezado = ref(null);

    // nextTick espera a que Vue haya actualizado el DOM antes de mover el foco.
    async function mostrar(nombre) {
      vista.value = nombre;
      visitas.value = [...visitas.value, vistas[nombre].titulo];
      await nextTick();
      document.title = tituloDocumento(nombre);
      encabezado.value?.focus();
    }

    function ir(event, nombre) {
      if (!esActivacionNormal(event)) return;
      event.preventDefault();
      if (nombre === vista.value) return;
      empujarHistorial(nombre);
      mostrar(nombre);
    }

    let soltar;
    onMounted(() => {
      document.title = tituloDocumento(vista.value);
      soltar = alVolver(mostrar);
    });
    onBeforeUnmount(() => soltar?.());

    return () =>
      h('div', null, [
        h(
          'nav',
          { 'aria-label': 'Vistas' },
          ['inicio', 'ayuda'].map((nombre) =>
            h(
              'a',
              {
                href: urlVista(nombre),
                'aria-current': vista.value === nombre ? 'page' : undefined,
                onClick: (event) => ir(event, nombre),
              },
              nombre === 'ayuda' ? 'Ayuda' : 'Inicio',
            ),
          ),
        ),
        h('h1', { ref: encabezado, tabindex: -1 }, vistas[vista.value].titulo),
        h('p', null, vistas[vista.value].texto),
        h('section', { 'aria-labelledby': 'hist-titulo' }, [
          h('h2', { id: 'hist-titulo' }, 'Historial de esta sesión'),
          h(
            'ol',
            null,
            visitas.value.map((titulo, indice) => h('li', { key: indice }, titulo)),
          ),
        ]),
      ]);
  },
}).mount('#app');
