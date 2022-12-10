const fs = require("fs");

const createDataArray = (rows) => {
  const dta = [];
  for (let i = 0; i < rows.length; i++) {
    const rowDta = rows[i].split("");
    const rowArray = [];
    for (const s of rowDta) {
      const n = parseInt(s);
      rowArray.push(n);
    }
    dta.push(rowArray);
  }
  return dta;
};

const idealScore = (rows) => {
  const dta = createDataArray(rows);
  console.log(dta);
  const scores = [];
  for (let i = 1; i < dta.length - 1; i++) {
    for (let j = 1; j < dta[0].length - 1; j++) {
      const currentValue = dta[i][j];

      if (i === 3 && currentValue === 5) {
        console.log("pause");
      }
      // right

      let rightVal = 0;
      for (let m = j + 1; m < dta[i].length; m++) {
        const testValue = dta[i][m];
        //if (testValue <= currentValue) {
        rightVal++;
        //}
        if (testValue >= currentValue) {
          break;
        }
      }

      // down
      let downVal = 0;
      for (let m = i + 1; m < dta.length; m++) {
        const testValue = dta[m][j];
        //if (testValue <= currentValue) {
        downVal++;
        //}
        if (testValue >= currentValue) {
          break;
        }
      }

      // left
      let leftVal = 0;
      for (let m = j - 1; m >= 0; m--) {
        const testValue = dta[i][m];
        //if (testValue <= currentValue) {
        leftVal++;
        //}
        if (testValue >= currentValue) {
          break;
        }
      }

      // up
      let upVal = 0;
      for (let m = i - 1; m >= 0; m--) {
        const testValue = dta[m][j];
        //if (testValue <= currentValue) {
        upVal++;
        //}
        if (testValue >= currentValue) {
          break;
        }
      }
      scores.push(upVal * downVal * leftVal * rightVal);
    }
  }
  scores.sort((a, b) => b - a);
  return scores[0];
};

const totalVisibleTrees = (rows) => {
  const dta = createDataArray(rows);
  console.log(dta);
  let tot = 0;
  for (let i = 1; i < dta.length - 1; i++) {
    for (let j = 1; j < dta[0].length - 1; j++) {
      let treeCounted = false;
      //console.log(`${i},${j} == ${dta[i][j]}`);
      const currentValue = dta[i][j];
      // left
      let tall = true;
      for (let m = 0; m < j; m++) {
        const testValue = dta[i][m];
        //console.log(currentValue, testValue);
        if (testValue >= currentValue) {
          tall = false;
          break;
        }
      }
      if (tall) {
        console.log("left tall:", i, currentValue);
        if (!treeCounted) {
          tot++;
          treeCounted = true;
        }
      }

      // right
      tall = true;
      for (let m = j + 1; m < dta[i].length; m++) {
        const testValue = dta[i][m];
        //console.log(currentValue, testValue);
        if (testValue >= currentValue) {
          tall = false;
          break;
        }
      }
      if (tall) {
        console.log("right tall:", i, currentValue);
        if (!treeCounted) {
          tot++;
          treeCounted = true;
        }
      }

      // top
      tall = true;
      for (let m = 0; m < i; m++) {
        const testValue = dta[m][j];
        //console.log(currentValue, testValue);
        if (testValue >= currentValue) {
          tall = false;
          break;
        }
      }
      if (tall) {
        console.log("top tall:", currentValue);
        if (!treeCounted) {
          tot++;
          treeCounted = true;
        }
      }

      // bottom
      tall = true;
      for (let m = i + 1; m < dta.length; m++) {
        const testValue = dta[m][j];
        //console.log(currentValue, testValue);
        if (testValue >= currentValue) {
          tall = false;
          break;
        }
      }
      if (tall) {
        console.log("bottom tall:", currentValue);
        if (!treeCounted) {
          tot++;
          treeCounted = true;
        }
      }
    }
  }

  tot += dta[0].length * 2;
  for (let i = 1; i < dta.length - 1; i++) {
    tot += 2;
  }

  return tot;
};

const main = () => {
  const dta = fs.readFileSync("./Day8sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const resp = idealScore(rows);
  console.log(resp);
};

main();

module.exports = {
  totalVisibleTrees,
  idealScore,
};
