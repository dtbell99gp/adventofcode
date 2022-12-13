const fs = require("fs");
const positions = [];

const createPositions = (knots) => {
  for (let i = 0; i < knots; i++) {
    const p = { x: 0, y: 0 };
    positions.push(p);
  }
};

const updatePositions = (direction) => {
  for (let m = 0; m < positions.length - 1; m++) {
    const xDiff = positions[m].x - positions[m + 1].x;
    const yDiff = positions[m].y - positions[m + 1].y;

    const touching = xDiff > -2 && xDiff < 2 && yDiff > -2 && yDiff < 2;

    if (touching) {
      continue;
    }

    if (yDiff === 2) {
      positions[m + 1].y++;
      if (xDiff > 0) {
        positions[m + 1].x++;
      } else if (xDiff < 0) {
        positions[m + 1].x--;
      }
    } else if (yDiff === -2) {
      positions[m + 1].y--;
      if (xDiff > 0) {
        positions[m + 1].x++;
      } else if (xDiff < 0) {
        positions[m + 1].x--;
      }
    } else if (xDiff === 2) {
      positions[m + 1].x++;
      if (yDiff > 0) {
        positions[m + 1].y++;
      } else if (yDiff < 0) {
        positions[m + 1].y--;
      }
    } else if (xDiff === -2) {
      positions[m + 1].x--;
      if (yDiff > 0) {
        positions[m + 1].y++;
      } else if (yDiff < 0) {
        positions[m + 1].y--;
      }
    }
  }
};

const visualize = () => {
  //console.clear();
  for (let i = 20; i >= -10; i--) {
    let row = "";
    for (let j = -20; j < 20; j++) {
      let char = ".";
      let cntr = 0;
      for (const p of positions) {
        if (p.x === j && p.y === i) {
          char = `${cntr}`;
          break;
        }
        cntr++;
      }
      row = `${row}${char}`;
    }
    console.log(row);
  }
};

const updateHead = (direction) => {
  if (direction === "U") {
    positions[0].y++;
  }
  if (direction === "D") {
    positions[0].y--;
  }
  if (direction === "R") {
    positions[0].x++;
  }
  if (direction === "L") {
    positions[0].x--;
  }
};

const solution1 = (moves, knots) => {
  const spots = new Set();

  createPositions(knots);

  for (const move of moves) {
    console.log(move);
    const direction = move.split(" ")[0];
    const steps = parseInt(move.split(" ")[1]);
    for (let step = 0; step < steps; step++) {
      //visualize();
      updateHead(direction);
      //visualize();
      updatePositions(direction);
      //visualize();
      const tX = positions[positions.length - 1].x;
      const tY = positions[positions.length - 1].y;
      const spot = `${tX}_${tY}`;
      spots.add(spot);
    }
  }
  return spots.size;
};

const main = () => {
  const dta = fs.readFileSync("./Day9real.txt", { encoding: "utf8" });
  const steps = dta.split("\n");

  //const steps = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];

  //const steps = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

  const result = solution1(steps, 10);

  //visualize();
  console.log("result:" + result);
};

main();

module.exports = {
  solution1,
};
