import Component from "../Component.js";

class InfoComponent extends Component {
  totalSelectedGentlemen;

  constructor(parentElement, totalSelectedGentlemen) {
    super(parentElement, "p", "info");
    this.totalSelectedGentlemen = totalSelectedGentlemen;

    this.render();
  }

  render() {
    this.element.textContent = `${this.totalSelectedGentlemen} señores que te apuntan con el dedo marcados`;
  }
}

export default InfoComponent;
