import { getDiceRollArray, getDicePlaceholderHTML } from "./utils.js";

//constructor function that will be the template for Characters
function Character(data) {
  Object.assign(this, data);

  //using this cause it's being pulled from data
  this.diceArray = getDicePlaceholderHTML(this.diceCount);

  this.getDiceHTML = function () {
    this.currentDiceCount = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceCount
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.getCharacterHTML = function () {
    const { name, avatar, health, diceCount, diceArray } = this;

    return `
          <div class="character-card">
          <h4 class="name">${name}</h4>
          <img class="avatar" src="${avatar}" />
          <p class="health">health: <b> ${health} </b></p>
          <div class="dice-container">${diceArray}</div>
          </div>
      `;
  };
}

export default Character;
