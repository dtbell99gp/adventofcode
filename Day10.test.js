const { solution1 } = require("./Day10");
const fs = require("fs");

test("should produce result from sample test", () => {
  const instructions = ["noop", "addx 3", "addx -5"];
  expect(solution1(instructions).register).toBe(-1);
});

test("should produce signal strength of 13140", () => {
  const dta = fs.readFileSync("./Day10sample1.txt", { encoding: "utf8" });
  const instructions = dta.split("\n");
  expect(solution1(instructions)).toBe(13140);
});
