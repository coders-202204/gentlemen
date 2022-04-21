import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";
import GentlemanComponent from "../GentlemanComponent/GentlemanComponent.js";
import InfoComponent from "../InfoComponent/InfoComponent.js";

class AppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "container");

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
        <h1 class="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section class="controls">                
      </section>
      <main class="main">
        <ul class="gentlemen">                        
        </ul>
      </main>
    `;

    const controls = this.element.querySelector(".controls");
    const gentlemenList = this.element.querySelector(".gentlemen");
    new InfoComponent(controls, 4);
    new ButtonComponent(controls, "Marcar todos", () => console.log("Click"));
    new GentlemanComponent(gentlemenList, "The Fary", "fary.jpg");
    new GentlemanComponent(gentlemenList, "July Churches", "julio.jpg");
    new GentlemanComponent(gentlemenList, "Bertin Osbourne", "bertin.jpg");
    new GentlemanComponent(gentlemenList, "Gerard Basté", "gerard.jpg");
    new GentlemanComponent(gentlemenList, "John and a Half", "juan.jpg");
  }
}

export default AppComponent;
