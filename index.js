import characterData from "./data.js";
import Character from "./Character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHTML();
  document.getElementById("monster").innerHTML = orc.getCharacterHTML();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
