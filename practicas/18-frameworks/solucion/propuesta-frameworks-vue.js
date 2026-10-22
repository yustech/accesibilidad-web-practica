import { createApp, h, ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import {
  etiquetas,
  nombresVista,
  leerEstado,
  tituloDocumento,
  filtrar,
  mensajeRecuento,
  empujarVista,
  reflejarFiltro,
  alVolver,
  esActivacionNormal,
  urlVista,
} from './propuesta-frameworks-nucleo.js';

createApp({
  setup() {
    const inicial = leerEstado();
    const vista = ref(inicial.vista);
    const seleccion = ref(inicial.modalidad);
    const aplicado = ref(inicial.modalidad);
    const encabezado = ref(null);
    let quitar;

    // Contrato: esperar a nextTick para que la ref ya apunte al h1 de la vista nueva.
    async function mostrar(destino) {
      vista.value = destino;
      await nextTick();
      document.title = tituloDocumento(destino);
      encabezado.value?.focus();
    }
    onMounted(() => {
      document.title = tituloDocumento(vista.value);
      quitar = alVolver(() => {
        const estado = leerEstado();
        seleccion.value = aplicado.value = estado.modalidad;
        mostrar(estado.vista);
      });
    });
    onBeforeUnmount(() => quitar?.());

    function navegar(evento, destino) {
      if (!esActivacionNormal(evento)) return;
      evento.preventDefault();
      if (destino === vista.value) return;
      empujarVista(destino, aplicado.value);
      mostrar(destino);
    }

    return () =>
      h('div', null, [
        h(
          'nav',
          { 'aria-label': 'Vistas del ejemplo' },
          Object.keys(nombresVista).map((destino) =>
            h(
              'a',
              {
                href: urlVista(destino, aplicado.value),
                'aria-current': vista.value === destino ? 'page' : undefined,
                onClick: (e) => navegar(e, destino),
              },
              nombresVista[destino],
            ),
          ),
        ),
        h('h1', { ref: encabezado, tabindex: -1 }, nombresVista[vista.value]),
        ...(vista.value === 'ayuda'
          ? [h('p', null, 'Contacta con el equipo del curso para solicitar ayuda.')]
          : [
              h(
                'form',
                {
                  onSubmit: (e) => {
                    e.preventDefault();
                    aplicado.value = seleccion.value;
                    reflejarFiltro(vista.value, seleccion.value);
                  },
                },
                [
                  h('label', { for: 'modalidad' }, 'Modalidad'),
                  h(
                    'select',
                    {
                      id: 'modalidad',
                      value: seleccion.value,
                      onChange: (e) => {
                        seleccion.value = e.target.value;
                      },
                    },
                    Object.entries(etiquetas).map(([valor, texto]) =>
                      h('option', { value: valor }, texto),
                    ),
                  ),
                  h('button', { type: 'submit' }, 'Aplicar'),
                ],
              ),
              h('p', { role: 'status' }, mensajeRecuento(aplicado.value)),
              h(
                'ul',
                null,
                filtrar(aplicado.value).map((c) => h('li', { key: c.titulo }, c.titulo)),
              ),
            ]),
      ]);
  },
}).mount('#app');
