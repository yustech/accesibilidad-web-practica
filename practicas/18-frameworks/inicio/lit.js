import { LitElement, html } from 'lit';
const courses = [
  { title: 'HTML accesible', online: true },
  { title: 'CSS adaptable', online: true },
  { title: 'JavaScript accesible', online: false },
];
class CoursePortal extends LitElement {
  static properties = {
    route: { state: true },
    filter: { state: true },
    online: { state: true },
  };
  constructor() {
    super();
    this.route = location.hash === '#ayuda' ? 'ayuda' : 'catalogo';
    this.filter = 'todos';
    this.online = false;
  }
  // Árbol ligero para compartir el CSS del curso y mantener simples las referencias.
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    document.title = `${this.route === 'ayuda' ? 'Ayuda' : 'Catálogo'} | Lit`;
  }
  async navigate(event, next) {
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    if (next === this.route) return;
    history.replaceState(null, '', `#${next}`);
    this.route = next;
    // TODO: espera a updateComplete y restaura el contexto de navegación.
  }
  render() {
    const visible = courses.filter((course) => !this.online || course.online);
    return html`<nav aria-label="Vistas del ejemplo">
        <a
          href="#catalogo"
          aria-current=${this.route === 'catalogo' ? 'page' : 'false'}
          @click=${(event) => this.navigate(event, 'catalogo')}
          >Catálogo</a
        ><a
          href="#ayuda"
          aria-current=${this.route === 'ayuda' ? 'page' : 'false'}
          @click=${(event) => this.navigate(event, 'ayuda')}
          >Ayuda</a
        >
      </nav>
      <h1 tabindex="-1">${this.route === 'ayuda' ? 'Ayuda' : 'Catálogo'}</h1>
      ${
        this.route === 'ayuda'
          ? html`<p>Contacta con el equipo del curso para solicitar ayuda.</p>`
          : html` <form
                @submit=${(event) => {
                  event.preventDefault();
                  this.online = this.filter === 'online';
                }}
              >
                <select
                  id="modalidad"
                  .value=${this.filter}
                  @change=${(event) => {
                    this.filter = event.target.value;
                  }}
                >
                  <option value="todos">Todos</option>
                  <option value="online">Online</option></select
                ><button type="submit">Aplicar</button>
              </form>
              <p>${visible.length} cursos disponibles</p>
              <ul>
                ${visible.map((course) => html`<li>${course.title}</li>`)}
              </ul>`
      }`;
  }
}
customElements.define('course-portal', CoursePortal);
