import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  alVolver,
  empujarHistorial,
  esActivacionNormal,
  leerVista,
  tituloDocumento,
  urlVista,
  vistas,
} from './propuesta-rutas-nucleo.js';

const h = React.createElement;

function App() {
  const [vista, setVista] = useState(leerVista);
  const [visitas, setVisitas] = useState([vistas[leerVista()].titulo]);
  const encabezado = useRef(null);
  const primeraVez = useRef(true);

  // El efecto se ejecuta cuando React ya ha confirmado la vista nueva en el DOM.
  useEffect(() => {
    document.title = tituloDocumento(vista);
    if (primeraVez.current) {
      primeraVez.current = false;
      return;
    }
    encabezado.current?.focus();
  }, [vista]);

  useEffect(
    () =>
      alVolver((nombre) => {
        setVista(nombre);
        setVisitas((lista) => [...lista, vistas[nombre].titulo]);
      }),
    [],
  );

  function ir(event, nombre) {
    if (!esActivacionNormal(event)) return;
    event.preventDefault();
    if (nombre === vista) return;
    empujarHistorial(nombre);
    setVista(nombre);
    setVisitas((lista) => [...lista, vistas[nombre].titulo]);
  }

  return h(
    React.Fragment,
    null,
    h(
      'nav',
      { 'aria-label': 'Vistas' },
      ['inicio', 'ayuda'].map((nombre) =>
        h(
          'a',
          {
            key: nombre,
            href: urlVista(nombre),
            'aria-current': vista === nombre ? 'page' : undefined,
            onClick: (event) => ir(event, nombre),
          },
          nombre === 'ayuda' ? 'Ayuda' : 'Inicio',
        ),
      ),
    ),
    h('h1', { ref: encabezado, tabIndex: -1 }, vistas[vista].titulo),
    h('p', null, vistas[vista].texto),
    h(
      'section',
      { 'aria-labelledby': 'hist-titulo' },
      h('h2', { id: 'hist-titulo' }, 'Historial de esta sesión'),
      h(
        'ol',
        null,
        visitas.map((titulo, indice) => h('li', { key: indice }, titulo)),
      ),
    ),
  );
}

createRoot(document.getElementById('app')).render(h(App));
