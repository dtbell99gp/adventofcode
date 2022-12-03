const fs = require("fs");
const findTotalCalories = (rows) => {
  let elf = 1;
  let mostElf = 1;
  let mostCalories = 0;
  let calories = 0;
  let caloriesArray = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    if (!row) {
      if (calories > mostCalories) {
        mostCalories = calories;
        mostElf = elf;
      }
      caloriesArray.push(calories);
      calories = 0;
      elf++;
    } else {
      calories += parseInt(row);
    }
  }
  caloriesArray.sort(function (a, b) {
    return b - a;
  });
  const mostTopThree = caloriesArray[0] + caloriesArray[1] + caloriesArray[2];
  return { mostElf, mostCalories, mostTopThree, caloriesArray };
};

// const data = fs.readFileSync("./day1.txt", { encoding: "utf8" });
// const rows = data.split("\n");
// const result = findTotalCalories(rows);
// console.log(result);

module.exports = { findTotalCalories };
