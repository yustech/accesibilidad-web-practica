import { LitElement, html } from 'lit';
import {
  alVolver,
  empujarHistorial,
  esActivacionNormal,
  leerVista,
  tituloDocumento,
  urlVista,
  vistas,
} from './propuesta-rutas-nucleo.js';

class RutasLit extends LitElement {
  static properties = {
    vista: { state: true },
    visitas: { state: true },
  };

  constructor() {
    super();
    this.vista = leerVista();
    this.visitas = [vistas[this.vista].titulo];
  }

  // Árbol ligero para compartir el CSS de la página.
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    document.title = tituloDocumento(this.vista);
    this.soltar = alVolver((nombre) => this.mostrar(nombre));
  }

  disconnectedCallback() {
    this.soltar?.();
    super.disconnectedCallback();
  }

  // updateComplete se resuelve cuando Lit ya ha pintado la vista nueva.
  async mostrar(nombre) {
    this.vista = nombre;
    this.visitas = [...this.visitas, vistas[nombre].titulo];
    await this.updateComplete;
    document.title = tituloDocumento(nombre);
    this.querySelector('h1')?.focus();
  }

  ir(event, nombre) {
    if (!esActivacionNormal(event)) return;
    event.preventDefault();
    if (nombre === this.vista) return;
    empujarHistorial(nombre);
    this.mostrar(nombre);
  }

  render() {
    const actual = vistas[this.vista];
    return html`<nav aria-label="Vistas">
        ${['inicio', 'ayuda'].map(
          (nombre) =>
            html`<a
              href=${urlVista(nombre)}
              aria-current=${this.vista === nombre ? 'page' : 'false'}
              @click=${(event) => this.ir(event, nombre)}
              >${nombre === 'ayuda' ? 'Ayuda' : 'Inicio'}</a
            >`,
        )}
      </nav>
      <h1 tabindex="-1">${actual.titulo}</h1>
      <p>${actual.texto}</p>
      <section aria-labelledby="hist-titulo">
        <h2 id="hist-titulo">Historial de esta sesión</h2>
        <ol>
          ${this.visitas.map((titulo) => html`<li>${titulo}</li>`)}
        </ol>
      </section>`;
  }
}
customElements.define('rutas-lit', RutasLit);
document.getElementById('app').append(document.createElement('rutas-lit'));
