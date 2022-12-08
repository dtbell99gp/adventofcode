const fs = require("fs");

const totalFileSystemSize = 70000000;
const updateSpaceRequired = 30000000;

const getTotalSize = (commands) => {
  const dirs = [];
  const dta = {};

  for (const cmd of commands) {
    const cmdData = cmd.split(" ");

    if (cmdData[0] === "$") {
      if (cmdData[1] === "cd") {
        if (cmdData[2] === "..") {
          dirs.pop();
        } else {
          const newDir = dirs.join("_") + "_" + cmdData[2];
          dirs.push(newDir);
        }
      }
      continue;
    }

    if (cmdData[0] === "dir") {
      //no work here
    } else {
      const amt = parseInt(cmdData[0]);
      let cntr = 0;
      for (const dir of dirs) {
        cntr++;
        if (!dta.hasOwnProperty(dir)) {
          dta[dir] = 0;
        }
        dta[dir] += amt;
      }
    }
  }

  let tot = 0;

  Object.keys(dta).forEach((key) => {
    const amt = dta[key];
    if (amt <= 100000) {
      tot += amt;
    }
  });

  const totalSizeOnDisk = dta["_/"];
  const freeSpace = totalFileSystemSize - totalSizeOnDisk;
  const sizeToFree = 30000000 - freeSpace;
  const dirOptions = [];
  Object.keys(dta).forEach((key) => {
    const amt = dta[key];
    if (amt >= sizeToFree) {
      dirOptions.push(amt);
    }
  });

  dirOptions.sort(function (a, b) {
    return a - b;
  });

  const removeSize = dirOptions[0];

  return { tot, sizeToFree, dirOptions, removeSize, dta };
};

const main = () => {
  const dta = fs.readFileSync("./Day7.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
};

//main();

module.exports = {
  getTotalSize,
};
