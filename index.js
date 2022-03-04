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
  return new Array(diceCount).fill(0).map((num) => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDiceHTML(diceCount) {
  return getDiceRollArray(diceCount)
    .map((dice) => {
      return `<div class="dice">${dice}</div>`;
    })
    .join("");
}

function renderCharacter(data) {
  const { elementID, name, avatar, health, diceCount } = data;
  const diceHTML = getDiceHTML(diceCount);

  document.getElementById(elementID).innerHTML = `
        <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">${diceHTML}</div>
        </div>
    `;
}

renderCharacter(hero);
renderCharacter(monster);
