import { LitElement, css, html } from 'lit';

class CursoFavoritoLit extends LitElement {
  static properties = {
    etiqueta: { type: String },
    pressed: { type: Boolean, reflect: true },
  };

  static styles = css`
    button {
      font: inherit;
      padding: 0.75rem;
      color: #172554;
      background: white;
      border: 2px solid #172554;
    }

    button:focus-visible {
      outline: 3px solid #172554;
      outline-offset: 3px;
    }
  `;

  constructor() {
    super();
    this.etiqueta = 'Guardar curso';
    this.pressed = false;
  }

  toggle() {
    this.pressed = !this.pressed;
    this.dispatchEvent(
      new CustomEvent('favorito-cambio', {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`<button
      type="button"
      aria-pressed=${String(this.pressed)}
      @click=${() => this.toggle()}
    >
      <span aria-hidden="true">★ </span>${this.etiqueta}
    </button>`;
  }
}

customElements.define('curso-favorito-lit', CursoFavoritoLit);

document.querySelector('#favoritos').addEventListener('favorito-cambio', (event) => {
  const { pressed } = event.detail;
  document.querySelector('#estado').textContent = pressed
    ? 'Curso añadido a favoritos.'
    : 'Curso eliminado de favoritos.';
});
