import InfoComponent from "./InfoComponent.js";

describe("Given an InfoComponent component", () => {
  describe("When it's instantiateishon with a value of 10", () => {
    test("Then it should render a paragraph with the text '10 señores que te apuntan con el dedo marcados' inside", () => {
      const totalSelectedGentlemen = 10;
      const expectedText = "10 señores que te apuntan con el dedo marcados";
      const container = document.createElement("div");

      new InfoComponent(container, totalSelectedGentlemen);
      const paragraph = container.querySelector("p");

      expect(paragraph.textContent).toBe(expectedText);
    });
  });
});
