import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
const h = React.createElement;
const courses = [
  { title: 'HTML accesible', online: true },
  { title: 'CSS adaptable', online: true },
  { title: 'JavaScript accesible', online: false },
];
function App() {
  const [route, setRoute] = useState(location.hash === '#ayuda' ? 'ayuda' : 'catalogo');
  const [filter, setFilter] = useState('todos');
  const [online, setOnline] = useState(false);
  const heading = useRef(null);
  const first = useRef(true);
  useEffect(() => {
    document.title = `${route === 'ayuda' ? 'Ayuda' : 'Catálogo'} | React`;
    if (first.current) {
      first.current = false;
      return;
    }
    heading.current?.focus();
  }, [route]);
  function navigate(event, next) {
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    if (next === route) return;
    history.replaceState(null, '', `#${next}`);
    setRoute(next);
  }
  const visible = courses.filter((course) => !online || course.online);
  return h(
    React.Fragment,
    null,
    h(
      'nav',
      { 'aria-label': 'Vistas del ejemplo' },
      ...['catalogo', 'ayuda'].map((next) =>
        h(
          'a',
          {
            key: next,
            href: `#${next}`,
            'aria-current': route === next ? 'page' : undefined,
            onClick: (event) => navigate(event, next),
          },
          next === 'ayuda' ? 'Ayuda' : 'Catálogo',
        ),
      ),
    ),
    h('h1', { ref: heading, tabIndex: -1 }, route === 'ayuda' ? 'Ayuda' : 'Catálogo'),
    route === 'ayuda'
      ? h('p', null, 'Contacta con el equipo del curso para solicitar ayuda.')
      : h(
          React.Fragment,
          null,
          h(
            'form',
            {
              onSubmit: (event) => {
                event.preventDefault();
                setOnline(filter === 'online');
              },
            },
            h('label', { htmlFor: 'modalidad' }, 'Modalidad'),
            h(
              'select',
              {
                id: 'modalidad',
                value: filter,
                onChange: (event) => setFilter(event.target.value),
              },
              h('option', { value: 'todos' }, 'Todos'),
              h('option', { value: 'online' }, 'Online'),
            ),
            h('button', { type: 'submit' }, 'Aplicar'),
          ),
          h('p', { role: 'status' }, `${visible.length} cursos disponibles`),
          h(
            'ul',
            null,
            ...visible.map((course) => h('li', { key: course.title }, course.title)),
          ),
        ),
  );
}
createRoot(document.getElementById('app')).render(h(App));
