class CursoFavorito extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>button{font:inherit;padding:0.75rem;color:#172554;background:white;border:2px solid #172554}button:focus-visible{outline:3px solid #172554;outline-offset:3px}</style><button type="button" aria-pressed="false" aria-labelledby="nombre-externo"><span aria-hidden="true">★</span></button>`;
    const button = root.querySelector('button');
    let saved = false;
    button.addEventListener('click', () => {
      saved = !saved;
      button.setAttribute('aria-pressed', String(saved));
    });
  }
}
customElements.define('curso-favorito', CursoFavorito);
