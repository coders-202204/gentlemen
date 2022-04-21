import AppComponent from "./AppComponent";

describe("Given an AppComponent component", () => {
  describe("When it contains a list with 2 selected gentlemen", () => {
    let container;
    let gentlemen;

    beforeEach(() => {
      container = document.createElement("div");
      gentlemen = [
        {
          id: 1,
          name: "Luis",
          selected: true,
        },
        {
          id: 2,
          name: "Marta",
          selected: false,
        },
        {
          id: 3,
          name: "Boris",
          selected: true,
        },
      ];

      new AppComponent(container, gentlemen);
    });

    test("Then it should render '2 señores que te apuntan con el dedo marcados'", () => {
      const expectedInfo = "2 señores que te apuntan con el dedo marcados";

      expect(container.innerHTML.includes(expectedInfo));
    });

    test("Then it should render the names of the three gentlemen", () => {
      gentlemen.forEach(({ name }) => {
        expect(
          [...container.querySelectorAll("h2")].some(
            ({ textContent }) => textContent === name
          )
        ).toBe(true);
      });
    });
  });
});
