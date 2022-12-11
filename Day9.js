const fs = require("fs");

const updatePositions = (positions, cntr, xDiff, yDiff, direction) => {
  if (direction === "L" || direction === "R") {
    if (xDiff === -2) {
      positions[cntr + 1].x--;
      if (yDiff !== 0) {
        positions[cntr + 1].y = positions[cntr].y;
      }
    } else if (xDiff === 2) {
      positions[cntr + 1].x++;
      console.log(cntr, "++", positions[cntr], positions[cntr + 1]);
      if (yDiff !== 0) {
        positions[cntr + 1].y = positions[cntr].y;
      }
    } else if (yDiff === -2) {
      positions[cntr + 1].y--;
      if (xDiff !== 0) {
        positions[cntr + 1].x = positions[cntr].x;
      }
    } else if (yDiff === 2) {
      positions[cntr + 1].y++;
      if (xDiff !== 0) {
        positions[cntr + 1].x = positions[cntr].x;
      }
    }
  }

  if (direction === "U" || direction === "D") {
    if (yDiff === -2) {
      positions[cntr + 1].y--;
      if (xDiff !== 0) {
        positions[cntr + 1].x = positions[cntr].x;
      }
    } else if (yDiff === 2) {
      positions[cntr + 1].y++;
      if (xDiff !== 0) {
        positions[cntr + 1].x = positions[cntr].x;
      }
    } else if (xDiff === -2) {
      positions[cntr + 1].x--;
      if (yDiff !== 0) {
        positions[cntr + 1].y = positions[cntr].y;
      }
    } else if (xDiff === 2) {
      positions[cntr + 1].x++;
      console.log(cntr, "++", positions[cntr], positions[cntr + 1]);
      if (yDiff !== 0) {
        positions[cntr + 1].y = positions[cntr].y;
      }
    }
  }
};

const solution1 = (moves, knots) => {
  const spots = new Set();

  const positions = [];

  for (let i = 0; i < knots; i++) {
    const p = { x: 0, y: 0 };
    positions.push(p);
  }

  let runs = 0;
  let letmoves = 0;
  for (const move of moves) {
    letmoves++;
    if (letmoves === 127) {
      console.log("here");
    }
    const direction = move.split(" ")[0];
    const steps = parseInt(move.split(" ")[1]);
    console.log(direction, steps);
    console.log("start:", positions);
    for (let i = 0; i < steps; i++) {
      if (direction === "R") {
        positions[0].x++;
      }
      if (direction === "L") {
        positions[0].x--;
      }
      if (direction === "U") {
        positions[0].y++;
      }
      if (direction === "D") {
        positions[0].y--;
      }

      let cntr = 0;

      while (cntr < knots - 1) {
        let needToMove = true;

        while (needToMove) {
          const xDiff = positions[cntr].x - positions[cntr + 1].x;
          const yDiff = positions[cntr].y - positions[cntr + 1].y;
          runs++;
          if (xDiff < -2 || xDiff > 2 || yDiff < -2 || yDiff > 2) {
            console.log("positions", positions);
            console.log("letmoves:", letmoves);
            console.log("cntr:", cntr);
            console.log("move:", move);
            console.log("runs:" + runs);
            process.exit();
          }

          if (xDiff > -2 && xDiff < 2 && yDiff > -2 && yDiff < 2) {
            needToMove = false;
          } else {
            updatePositions(positions, cntr, xDiff, yDiff, direction);
          }
          if (cntr > 0 && positions[cntr - 1].x - positions[cntr].x > 2) {
            console.log("here");
          }
        }
        cntr++;
      }

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
  const result = solution1(steps, 10);
  console.log(result);
};

//main();

module.exports = {
  solution1,
};
