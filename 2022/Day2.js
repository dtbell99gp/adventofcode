const fs = require("fs");

const options = {
  AX: "tie",
  AY: "win",
  AZ: "loss",
  BX: "loss",
  BY: "tie",
  BZ: "win",
  CX: "win",
  CY: "loss",
  CZ: "tie",
};

const choicePoints = {
  X: 1,
  Y: 2,
  Z: 3,
};

const resultPoints = {
  loss: 0,
  tie: 3,
  win: 6,
};

// X loss Y tie Z win
const conversionChart = {
  AX: "Z",
  AY: "X",
  AZ: "Y",
  BX: "X",
  BY: "Y",
  BZ: "Z",
  CX: "Y",
  CY: "Z",
  CZ: "X",
};

const getScore = (opponentChoice, myChoice) => {
  const key = `${opponentChoice}${myChoice}`;
  const result = options[key];
  const score = choicePoints[myChoice] + resultPoints[result];
  return score;
};

const getTotalScore = (rows) => {
  let totalScore = 0;
  for (const row of rows) {
    const actions = row.split(" ");
    const action = `${actions[0]}${actions[1]}`;
    const opponent = actions[0];
    const myplay = conversionChart[action];
    const score = getScore(opponent, myplay);
    totalScore += score;
  }
  return totalScore;
};

const dta = fs.readFileSync("./Day2.txt", { encoding: "utf8" });
const totalScore = getTotalScore(dta.split("\n"));

module.exports = {
  getScore,
  getTotalScore,
};
