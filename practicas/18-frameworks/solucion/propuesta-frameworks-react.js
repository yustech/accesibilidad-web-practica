import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
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
const h = React.createElement;

function App() {
  const inicial = leerEstado();
  const [vista, setVista] = useState(inicial.vista);
  const [seleccion, setSeleccion] = useState(inicial.modalidad);
  const [aplicado, setAplicado] = useState(inicial.modalidad);
  const encabezado = useRef(null);
  const primera = useRef(true);

  // Contrato: el efecto se ejecuta tras el commit y depende solo de la vista.
  useEffect(() => {
    document.title = tituloDocumento(vista);
    if (primera.current) {
      primera.current = false;
      return;
    }
    encabezado.current?.focus();
  }, [vista]);

  useEffect(
    () =>
      alVolver(() => {
        const estado = leerEstado();
        setVista(estado.vista);
        setSeleccion(estado.modalidad);
        setAplicado(estado.modalidad);
      }),
    [],
  );

  function navegar(evento, destino) {
    if (!esActivacionNormal(evento)) return;
    evento.preventDefault();
    if (destino === vista) return;
    empujarVista(destino, aplicado);
    setVista(destino);
  }

  const visibles = filtrar(aplicado);
  return h(
    React.Fragment,
    null,
    h(
      'nav',
      { 'aria-label': 'Vistas del ejemplo' },
      ...Object.keys(nombresVista).map((destino) =>
        h(
          'a',
          {
            key: destino,
            href: urlVista(destino, aplicado),
            'aria-current': vista === destino ? 'page' : undefined,
            onClick: (e) => navegar(e, destino),
          },
          nombresVista[destino],
        ),
      ),
    ),
    h('h1', { ref: encabezado, tabIndex: -1 }, nombresVista[vista]),
    vista === 'ayuda'
      ? h('p', null, 'Contacta con el equipo del curso para solicitar ayuda.')
      : h(
          React.Fragment,
          null,
          h(
            'form',
            {
              onSubmit: (e) => {
                e.preventDefault();
                setAplicado(seleccion);
                reflejarFiltro(vista, seleccion);
              },
            },
            h('label', { htmlFor: 'modalidad' }, 'Modalidad'),
            h(
              'select',
              {
                id: 'modalidad',
                value: seleccion,
                onChange: (e) => setSeleccion(e.target.value),
              },
              ...Object.entries(etiquetas).map(([valor, texto]) =>
                h(
                  'option',
                  { key: valor, value: valor },
                  valor === 'todos' ? 'Todas' : texto,
                ),
              ),
            ),
            h('button', { type: 'submit' }, 'Aplicar'),
          ),
          h('p', { role: 'status' }, mensajeRecuento(aplicado)),
          h('ul', null, ...visibles.map((c) => h('li', { key: c.titulo }, c.titulo))),
        ),
  );
}
createRoot(document.getElementById('app')).render(h(App));
