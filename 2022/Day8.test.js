const fs = require("fs");
const { totalVisibleTrees, idealScore } = require("./Day8");

test("sample data should contain 5 rows", () => {
  const dta = fs.readFileSync("./Day8sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(rows.length).toBe(5);
});

test("sample data should produce result of 21 trees visible", () => {
  const dta = fs.readFileSync("./Day8sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(totalVisibleTrees(rows)).toBe(21);
});

test("real data should contain 99 rows", () => {
  const dta = fs.readFileSync("./Day8real.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(rows.length).toBe(99);
});

test("real data should produce result of 1835 trees visible", () => {
  const dta = fs.readFileSync("./Day8real.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(totalVisibleTrees(rows)).toBe(1835);
});

test("sample data should produce result of ideal score of 8", () => {
  const dta = fs.readFileSync("./Day8sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(idealScore(rows)).toBe(8);
});

test("real data should produce result of ideal score of 263670", () => {
  const dta = fs.readFileSync("./Day8real.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(idealScore(rows)).toBe(263670);
});
