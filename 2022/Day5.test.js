const fs = require("fs");
const { getContainers, getContainers2 } = require("./Day5");

const realContainers = {
  1: ["V", "N", "F", "S", "M", "P", "H", "J"],
  2: ["Q", "D", "J", "M", "L", "R", "S"],
  3: ["B", "W", "S", "C", "H", "D", "Q", "N"],
  4: ["L", "C", "S", "R"],
  5: ["B", "F", "P", "T", "V", "M"],
  6: ["C", "N", "Q", "R", "T"],
  7: ["R", "G", "V"],
  8: ["R", "L", "D", "P", "S", "Z", "C"],
  9: ["F", "B", "P", "G", "V", "J", "S", "D"],
};

const testContainers = {
  1: ["N", "Z"],
  2: ["D", "C", "M"],
  3: ["P"],
};

const testContainers2 = {
  1: ["N", "Z"],
  2: ["D", "C", "M"],
  3: ["P"],
};

const realContainers2 = {
  1: ["V", "N", "F", "S", "M", "P", "H", "J"],
  2: ["Q", "D", "J", "M", "L", "R", "S"],
  3: ["B", "W", "S", "C", "H", "D", "Q", "N"],
  4: ["L", "C", "S", "R"],
  5: ["B", "F", "P", "T", "V", "M"],
  6: ["C", "N", "Q", "R", "T"],
  7: ["R", "G", "V"],
  8: ["R", "L", "D", "P", "S", "Z", "C"],
  9: ["F", "B", "P", "G", "V", "J", "S", "D"],
};

test("should produce CMZ", () => {
  const dta = fs.readFileSync("./Day5_test.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const letters = getContainers(testContainers, rows);
  expect(letters).toBe("CMZ");
});

test("should produce SBPQRSCDF", () => {
  const dta = fs.readFileSync("./Day5steps.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const letters = getContainers(realContainers, rows);
  expect(letters).toBe("SBPQRSCDF");
});

test("should produce MCD", () => {
  const dta = fs.readFileSync("./Day5_test.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const letters = getContainers2(testContainers2, rows);
  expect(letters).toBe("MCD");
});

test("should produce RGLVRCQSB", () => {
  const dta = fs.readFileSync("./Day5steps.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const letters = getContainers2(realContainers2, rows);
  expect(letters).toBe("RGLVRCQSB");
});
