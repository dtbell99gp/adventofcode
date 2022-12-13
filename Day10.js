// const solution1 = (instructions) => {
//   let x = 1;
//   let instructionQueue = [];
//   let instructionCounter = 0;
//   let signalStrength = 0;
//   let signalChecks = [20, 60, 100, 140, 180, 220];

//   const executeInstruction = (instruction) => {
//     if (instruction.cmd === "addx") {
//       x = x + instruction.nbr;
//     }
//   };

//   while (instructionQueue.length > 0 || instructions.length > 0) {
//     instructionCounter++;
//     console.log("x:", x);

//     for (const signalCheck of signalChecks) {
//       if (signalCheck === instructionCounter) {
//         signalStrength += signalCheck * x;
//         console.log(signalCheck, " => ", signalCheck * x, x);
//         console.log(signalStrength);
//       }
//     }

//     // Add more instructions to the queue
//     if (instructions.length > 0) {
//       const instruction = instructions.shift();
//       if (instruction === "noop") {
//         continue;
//       } else {
//         // add additional instruction to the register
//         const cmd = instruction.split(" ");
//         if (cmd[0] === "addx") {
//           instructionQueue.push({
//             instruction: instructionCounter + 1,
//             cmd: cmd[0],
//             nbr: parseInt(cmd[1]),
//             completed: false,
//           });
//         }
//       }
//     }
//     // Check and execute instructions
//     for (const queueInstruction of instructionQueue) {
//       if (
//         queueInstruction.instruction === instructionCounter &&
//         !queueInstruction.completed
//       ) {
//         executeInstruction(queueInstruction);
//         queueInstruction.completed = true;
//       }
//     }
//     const updatedQueue = [];
//     for (const queueInstruction of instructionQueue) {
//       if (!queueInstruction.completed) {
//         updatedQueue.push(queueInstruction);
//       }
//     }
//     instructionQueue = updatedQueue;
//   }
//   return { register: x, signalStrength };
// };

const solution1 = (instructions) => {
  let nextInstruction;
  let totSignal = 0;

  let x = 1;

  let ui = "";

  for (let clock = 1; clock < 241; clock++) {
    let char = "\x1b[36m.\x1b[0m";
    let clockPos = clock - 1;
    if (clock >= 41 && clock < 80) {
      clockPos = clockPos - 40;
    }
    if (clock >= 81 && clock < 120) {
      clockPos = clockPos - 80;
    }
    if (clock >= 121 && clock < 160) {
      clockPos = clockPos - 120;
    }
    if (clock >= 161 && clock < 200) {
      clockPos = clockPos - 160;
    }
    if (clock >= 201 && clock < 240) {
      clockPos = clockPos - 200;
    }
    // } else if (clock >= 80 && clock < 120) {
    //   clockPos = 80 - clockPos;
    // }
    if (clockPos === x || clockPos === x - 1 || clockPos === x + 1) {
      char = "\x1b[37m#\x1b[0m";
    }

    ui = `${ui}${char}`;
    if (
      clock === 40 ||
      clock === 80 ||
      clock === 120 ||
      clock === 160 ||
      clock === 200 ||
      clock === 240
    ) {
      ui = ui + "\n";
    }

    console.clear();
    console.log(ui);

    if (clock === 20) {
      totSignal += 20 * x;
    } else if (clock === 60) {
      totSignal += 60 * x;
    } else if (clock === 100) {
      totSignal += 100 * x;
    } else if (clock === 140) {
      totSignal += 140 * x;
    } else if (clock === 180) {
      totSignal += 180 * x;
    } else if (clock === 220) {
      totSignal += 220 * x;
    }

    if (nextInstruction) {
      x += nextInstruction;
      nextInstruction = null;
      continue;
    }
    const instruction = instructions.shift();
    if (instruction === "noop") {
      continue;
    }
    const nbr = parseInt(instruction.split(" ")[1]);
    nextInstruction = nbr;
  }
  return totSignal;
};

const fs = require("fs");
const dta = fs.readFileSync("./Day10real.txt", { encoding: "utf8" });
const dtaArray = dta.split("\n");
console.log(solution1(dtaArray));

module.exports = {
  solution1,
};
