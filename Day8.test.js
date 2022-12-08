const fs = require("fs");
const { totalVisibleTrees } = require("./Day8");

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
