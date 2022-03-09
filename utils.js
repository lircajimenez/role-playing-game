function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDicePlaceholderHTML(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`;
  });
}

console.log(getDicePlaceholderHTML(3));

export { getDiceRollArray, getDicePlaceholderHTML };
