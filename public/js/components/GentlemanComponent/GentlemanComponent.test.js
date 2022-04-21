import GentlemanComponent from "./GentlemanComponent.js";

describe("Given a GentlemanComponent component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  describe("When instantiated with the name 'Alex'", () => {
    test("Then it should render a li with a heading with 'Alex' inside", () => {
      const name = "Alex";

      new GentlemanComponent(container, { name });
      const nameHeading = container.querySelector("li h2");

      expect(nameHeading.textContent).toBe(name);
    });
  });

  describe("When instantiated with the name 'Alex' and the picture 'alex.jpg'", () => {
    test("Then it should render a li showing the image 'alex.jpg' with the alternative text 'Alex apuntándote con el dedo'", () => {
      const imageURL = "alex.jpg";
      const expectedImageURL = "http://localhost/img/alex.jpg";
      const name = "Alex";
      const expectedAltText = "Alex apuntándote con el dedo";

      new GentlemanComponent(container, { name, picture: imageURL });
      const image = container.querySelector("li img");

      expect(image.src).toBe(expectedImageURL);
      expect(image.alt).toBe(expectedAltText);
    });
  });

  describe("When instantiated with an action and the user clicks on the card", () => {
    test("Then it should call the received action", () => {
      const action = jest.fn();

      const gentlemanCard = new GentlemanComponent(container, {}, action);
      gentlemanCard.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
