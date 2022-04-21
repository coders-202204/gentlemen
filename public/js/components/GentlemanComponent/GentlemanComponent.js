import Component from "../Component.js";

class GentlemanComponent extends Component {
  name;
  picture;
  action;

  constructor(parentElement, { name, picture, selected }, action) {
    super(parentElement, "li", `gentleman${selected ? " selected" : ""}`);
    this.name = name;
    this.picture = picture;
    this.action = action;

    this.render();
    this.addListeners();
  }

  render() {
    this.element.innerHTML = `
    <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="/img/${this.picture}"
                alt="${this.name} apuntándote con el dedo"
              />
              <span class="gentleman__initial">F</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">${this.name}</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Estado:</span> RIP
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> pendiente
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
    `;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default GentlemanComponent;
