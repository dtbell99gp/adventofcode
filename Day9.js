const fs = require("fs");

const solution1 = (moves) => {
  const spots = new Set();
  let hX = 0;
  let hY = 0;
  let tX = 0;
  let tY = 0;
  for (const move of moves) {
    const direction = move.split(" ")[0];
    const steps = parseInt(move.split(" ")[1]);
    console.log(direction, steps);
    console.log("---------");
    for (let i = 0; i < steps; i++) {
      if (direction === "R") {
        hX++;
      }
      if (direction === "L") {
        hX--;
      }
      if (direction === "U") {
        hY++;
      }
      if (direction === "D") {
        hY--;
      }

      console.log("b: ", hX, hY, ",", tX, tY);

      let needToMove = true;
      while (needToMove) {
        const xDiff = hX - tX;
        const yDiff = hY - tY;
        if (xDiff > -2 && xDiff < 2 && yDiff > -2 && yDiff < 2) {
          // all is well, return to next move
          needToMove = false;
        } else {
          if (yDiff === -2) {
            tY--;
            if (xDiff !== 0) {
              tX = hX;
            }
          } else if (yDiff === 2) {
            tY++;
            if (xDiff !== 0) {
              tX = hX;
            }
          } else if (xDiff === -2) {
            tX--;
            if (yDiff !== 0) {
              tY = hY;
            }
          } else if (xDiff === 2) {
            tX++;
            if (yDiff !== 0) {
              tY = hY;
            }
          }
        }
      }

      const spot = `${tX}_${tY}`;
      spots.add(spot);

      console.log("a: ", hX, hY, ",", tX, tY);
      console.log("");
    }
  }
  return spots.size;
};

const main = () => {
  const dta = fs.readFileSync("./Day9real.txt", { encoding: "utf8" });
  const steps = dta.split("\n");
  const result = solution1(steps);
  console.log(result);
};

main();

module.exports = {
  solution1,
};
