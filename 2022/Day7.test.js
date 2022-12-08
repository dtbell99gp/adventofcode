const fs = require("fs");
const { getTotalSize } = require("./Day7");

test("should produce 95437 when totaling sample test data", () => {
  const dta = fs.readFileSync("./Day7sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
  expect(result.tot).toBe(95437);
});

test("should produce 1077191 when totaling real data file", () => {
  const dta = fs.readFileSync("./Day7.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
  expect(result.tot).toBe(1077191);
});

test("should return size of 8381165 ", () => {
  const dta = fs.readFileSync("./Day7sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
  expect(result.sizeToFree).toBe(8381165);
});

test("should return directory D size of 24933642 to delete to free up space", () => {
  const dta = fs.readFileSync("./Day7sample.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
  console.log(result);
  expect(result.removeSize).toBe(24933642);
});

test("should return directory D size of 5649896 to delete to free up space", () => {
  const dta = fs.readFileSync("./Day7.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const result = getTotalSize(rows);
  console.log(result);
  expect(result.removeSize).toBe(5649896);
});
