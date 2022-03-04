const hero = {
  elementID: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3,
};

const monster = {
  elementID: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1,
};

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

//constructor function that will be the template for Characters
function Character(data) {
  Object.assign(this, data);

  this.getDiceHTML = function (diceCount) {
    return getDiceRollArray(diceCount)
      .map((dice) => {
        return `<div class="dice">${dice}</div>`;
      })
      .join("");
  };

  this.getCharacterHTML = function () {
    const { elementID, name, avatar, health, diceCount } = this;
    const diceHTML = this.getDiceHTML(diceCount);

    return `
        <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHTML}</div>
        </div>
    `;
  };
}

const wizard = new Character(hero);
const orc = new Character(monster);

function render() {
  document.getElementById(wizard.elementID).innerHTML =
    wizard.getCharacterHTML();
  document.getElementById(orc.elementID).innerHTML = orc.getCharacterHTML();
}

render();
