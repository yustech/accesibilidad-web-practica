import { createApp, h, ref, nextTick, onMounted } from 'vue';
const courses = [
  { title: 'HTML accesible', online: true },
  { title: 'CSS adaptable', online: true },
  { title: 'JavaScript accesible', online: false },
];
createApp({
  setup() {
    const route = ref(location.hash === '#ayuda' ? 'ayuda' : 'catalogo');
    const filter = ref('todos');
    const online = ref(false);
    const heading = ref(null);
    onMounted(() => {
      document.title = `${route.value === 'ayuda' ? 'Ayuda' : 'Catálogo'} | Vue`;
    });
    async function navigate(event, next) {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      if (next === route.value) return;
      history.replaceState(null, '', `#${next}`);
      route.value = next;
      await nextTick();
      document.title = `${next === 'ayuda' ? 'Ayuda' : 'Catálogo'} | Vue`;
      heading.value?.focus();
    }
    return () => {
      const visible = courses.filter((course) => !online.value || course.online);
      return h('div', null, [
        h(
          'nav',
          { 'aria-label': 'Vistas del ejemplo' },
          ['catalogo', 'ayuda'].map((next) =>
            h(
              'a',
              {
                href: `#${next}`,
                'aria-current': route.value === next ? 'page' : undefined,
                onClick: (event) => navigate(event, next),
              },
              next === 'ayuda' ? 'Ayuda' : 'Catálogo',
            ),
          ),
        ),
        h(
          'h1',
          { ref: heading, tabindex: -1 },
          route.value === 'ayuda' ? 'Ayuda' : 'Catálogo',
        ),
        ...(route.value === 'ayuda'
          ? [h('p', null, 'Contacta con el equipo del curso para solicitar ayuda.')]
          : [
              h(
                'form',
                {
                  onSubmit: (event) => {
                    event.preventDefault();
                    online.value = filter.value === 'online';
                  },
                },
                [
                  h('label', { for: 'modalidad' }, 'Modalidad'),
                  h(
                    'select',
                    {
                      id: 'modalidad',
                      value: filter.value,
                      onChange: (event) => {
                        filter.value = event.target.value;
                      },
                    },
                    [
                      h('option', { value: 'todos' }, 'Todos'),
                      h('option', { value: 'online' }, 'Online'),
                    ],
                  ),
                  h('button', { type: 'submit' }, 'Aplicar'),
                ],
              ),
              h('p', { role: 'status' }, `${visible.length} cursos disponibles`),
              h(
                'ul',
                null,
                visible.map((course) => h('li', { key: course.title }, course.title)),
              ),
            ]),
      ]);
    };
  },
}).mount('#app');
