import { getDiceRollArray } from "./utils.js";

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
    const { name, avatar, health, diceCount } = this;
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

export default Character;
