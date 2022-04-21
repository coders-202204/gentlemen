import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";
import GentlemanComponent from "../GentlemanComponent/GentlemanComponent.js";
import InfoComponent from "../InfoComponent/InfoComponent.js";

class AppComponent extends Component {
  gentlemen;

  constructor(parentElement, gentlemen) {
    super(parentElement, "div", "container");
    this.gentlemen = gentlemen;

    this.render();
  }

  selectAllGentlemen() {
    this.gentlemen = this.gentlemen.map((gentleman) => ({
      ...gentleman,
      selected: true,
    }));

    this.render();
  }

  toggleGentleman(gentlemanId) {
    this.gentlemen = this.gentlemen.map((gentleman) =>
      gentleman.id === gentlemanId
        ? {
            ...gentleman,
            selected: !gentleman.selected,
          }
        : { ...gentleman }
    );

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
    const selectedGentlemen = this.gentlemen.filter(
      (gentleman) => gentleman.selected
    );
    new InfoComponent(controls, selectedGentlemen.length);
    new ButtonComponent(controls, "Marcar todos", () =>
      this.selectAllGentlemen()
    );

    this.gentlemen.forEach((gentleman) => {
      new GentlemanComponent(gentlemenList, gentleman, () =>
        this.toggleGentleman(gentleman.id)
      );
    });
  }
}

export default AppComponent;
