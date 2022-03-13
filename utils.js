const getDiceRollArray = (diceCount) => {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
};

const getDicePlaceholderHTML = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `<div class="placeholder-dice"></div>`;
    })
    .join("");
};

const getPercentage = (remainingHealth, maxiHealth) => {
  return (100 * remainingHealth) / maxiHealth;
};

export { getDiceRollArray, getDicePlaceholderHTML, getPercentage };
