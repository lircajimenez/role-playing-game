import characterData from "./data.js";
import Character from "./Character.js";

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function attack() {
  wizard.getDiceHTML();
  orc.getDiceHTML();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  //can also be if(wizard.dead || orc.dead)
  //truthy values, if it's false *.dead is undefined
  if (wizard.dead === true || orc.dead === true) {
    endGame();
  }
}

function endGame() {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Orc is victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

  document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>
    `;
}

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHTML();
  document.getElementById("monster").innerHTML = orc.getCharacterHTML();
}

render();

document.getElementById("attack-button").addEventListener("click", attack);
