const { solution1 } = require("./Day9");
const fs = require("fs");

test("should produce 13 when finished processing steps in sample data with 2 knots", () => {
  const dta = fs.readFileSync("./Day9sample.txt", { encoding: "utf8" });
  const steps = dta.split("\n");
  expect(solution1(steps, 2)).toBe(13);
});

test("should produce 36 when finished processing steps in sample data with 10 knots", () => {
  const dta = fs.readFileSync("./Day9sample2.txt", { encoding: "utf8" });
  const steps = dta.split("\n");
  expect(solution1(steps, 10)).toBe(36);
});

// test("should produce ? when finished processing steps in real data with 10 knots", () => {
//   const dta = fs.readFileSync("./Day9real.txt", { encoding: "utf8" });
//   const steps = dta.split("\n");
//   expect(solution1(steps, 10)).toBe("?");
// });
