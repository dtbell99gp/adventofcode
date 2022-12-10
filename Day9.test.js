const { solution1 } = require("./Day9");
const fs = require("fs");

test("should produce 13 when finished processing steps in sample data", () => {
  const dta = fs.readFileSync("./Day9sample.txt", { encoding: "utf8" });
  const steps = dta.split("\n");
  expect(solution1(steps)).toBe(13);
});
