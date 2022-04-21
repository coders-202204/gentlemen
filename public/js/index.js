import AppComponent from "./components/AppComponent/AppComponent.js";
import gentlemen from "./data/gentlemen.js";

const mainContainer = document.querySelector(".app");

new AppComponent(mainContainer, gentlemen);
