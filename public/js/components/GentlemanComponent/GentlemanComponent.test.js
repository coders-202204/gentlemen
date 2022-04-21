import GentlemanComponent from "./GentlemanComponent.js";

describe("Given a GentlemanComponent component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  describe("When it's instantiateishon with the name 'Alex'", () => {
    test("Then it should render a li with a heading with 'Alex' inside", () => {
      const name = "Alex";

      new GentlemanComponent(container, name);
      const nameHeading = container.querySelector("li h2");

      expect(nameHeading.textContent).toBe(name);
    });
  });

  describe("When it's instantiateishon with the name 'Alex' and the picture 'alex.jpg'", () => {
    test("Then it should render a li showing the image 'alex.jpg' with the alternative text 'Alex apuntándote con el dedo'", () => {
      const imageURL = "alex.jpg";
      const expectedImageURL = "http://localhost/img/alex.jpg";
      const name = "Alex";
      const expectedAltText = "Alex apuntándote con el dedo";

      new GentlemanComponent(container, name, imageURL);
      const image = container.querySelector("li img");

      expect(image.src).toBe(expectedImageURL);
      expect(image.alt).toBe(expectedAltText);
    });
  });
});
