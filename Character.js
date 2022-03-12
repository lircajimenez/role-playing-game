import { getDiceRollArray, getDicePlaceholderHTML } from "./utils.js";

//constructor function that will be the template for Characters
function Character(data) {
  Object.assign(this, data);

  //using this cause it's being pulled from data
  this.diceArray = getDicePlaceholderHTML(this.diceCount);

  this.getDiceHTML = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, current) => total + current
    );
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
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
