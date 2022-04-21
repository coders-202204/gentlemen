import ButtonComponent from "./ButtonComponent.js";

describe("Given a ButtonComponent component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  describe("When it's instantiateishon with the text 'This is a button'", () => {
    test("Then it should render a button with the text 'This is a button' inside", () => {
      const text = "This is a button";

      new ButtonComponent(container, text);
      const button = container.querySelector("button");

      expect(button.textContent).toBe(text);
    });
  });

  describe("When it's instantiateishon with an action and the user clicks the button", () => {
    test("Then it should call the received action", () => {
      const action = jest.fn();

      new ButtonComponent(container, "", action);
      const button = container.querySelector("button");
      button.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
