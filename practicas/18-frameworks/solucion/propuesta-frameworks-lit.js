import { LitElement, html } from 'lit';
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

class PortalCursos extends LitElement {
  static properties = {
    vista: { state: true },
    seleccion: { state: true },
    aplicado: { state: true },
  };
  constructor() {
    super();
    const inicial = leerEstado();
    this.vista = inicial.vista;
    this.seleccion = this.aplicado = inicial.modalidad;
  }
  // Árbol ligero para compartir el CSS del curso.
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    this.quitar = alVolver(() => {
      const estado = leerEstado();
      this.seleccion = this.aplicado = estado.modalidad;
      this.mostrar(estado.vista);
    });
  }
  disconnectedCallback() {
    this.quitar?.();
    super.disconnectedCallback();
  }
  firstUpdated() {
    document.title = tituloDocumento(this.vista);
  }
  // Contrato: updateComplete se resuelve cuando el h1 nuevo ya está en el DOM.
  async mostrar(destino) {
    this.vista = destino;
    await this.updateComplete;
    document.title = tituloDocumento(destino);
    this.querySelector('h1')?.focus();
  }
  navegar(evento, destino) {
    if (!esActivacionNormal(evento)) return;
    evento.preventDefault();
    if (destino === this.vista) return;
    empujarVista(destino, this.aplicado);
    this.mostrar(destino);
  }
  render() {
    return html`<nav aria-label="Vistas del ejemplo">
        ${Object.keys(nombresVista).map(
          (destino) =>
            html`<a
              href=${urlVista(destino, this.aplicado)}
              aria-current=${this.vista === destino ? 'page' : 'false'}
              @click=${(e) => this.navegar(e, destino)}
              >${nombresVista[destino]}</a
            >`,
        )}
      </nav>
      <h1 tabindex="-1">${nombresVista[this.vista]}</h1>
      ${
        this.vista === 'ayuda'
          ? html`<p>Contacta con el equipo del curso para solicitar ayuda.</p>`
          : html`<form
                @submit=${(e) => {
                  e.preventDefault();
                  this.aplicado = this.seleccion;
                  reflejarFiltro(this.vista, this.seleccion);
                }}
              >
                <label for="modalidad">Modalidad</label>
                <select
                  id="modalidad"
                  .value=${this.seleccion}
                  @change=${(e) => (this.seleccion = e.target.value)}
                >
                  ${Object.entries(etiquetas).map(
                    ([valor, texto]) =>
                      html`<option value=${valor} ?selected=${valor === this.seleccion}>
                        ${texto}
                      </option>`,
                  )}</select
                ><button type="submit">Aplicar</button>
              </form>
              <p role="status">${mensajeRecuento(this.aplicado)}</p>
              <ul>
                ${filtrar(this.aplicado).map((c) => html`<li>${c.titulo}</li>`)}
              </ul>`
      }`;
  }
}
customElements.define('portal-cursos', PortalCursos);
document.querySelector('#app').append(document.createElement('portal-cursos'));
