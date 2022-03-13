import {
  getDiceRollArray,
  getDicePlaceholderHTML,
  getPercentage,
} from "./utils.js";

//constructor function that will be the template for Characters
function Character(data) {
  Object.assign(this, data);
  this.maxHealth = this.health;

  //using this cause it's being pulled from data
  this.diceArray = getDicePlaceholderHTML(this.diceCount);

  this.getDiceHTML = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
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

  this.getHealthBarHTML = function () {
    const percent = getPercentage(this.health, this.maxHealth);

    return `
    <div class="health-bar-outer">
    <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
      style="width: ${percent}%;">
    </div>
    </div>
    `;
  };

  this.getCharacterHTML = function () {
    const { name, avatar, health, diceArray } = this;
    const healthBar = this.getHealthBarHTML();

    return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
        <div class="dice-container">${diceArray}</div>
      </div>
    `;
  };
}

export default Character;
