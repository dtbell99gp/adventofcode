const fs = require("fs");

const testData = [];
testData.push("vJrwpWtwJgWrhcsFMMfFFhFp");
testData.push("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL");
testData.push("PmmdzqPrVvPwwTWBwg");
testData.push("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn");
testData.push("ttgJtRGJQctTZtZT");
testData.push("CrZsJsPPZsGzwwsLwLmpwMDw");

const {
  getSum,
  getSum2,
  splitString,
  getDuplicateLetter,
  getValueOfLetter,
} = require("./Day3");

test("should split the string correctly", () => {
  const result = splitString("vJrwpWtwJgWrhcsFMMfFFhFp");
  expect(result.s1).toBe("vJrwpWtwJgWr");
  expect(result.s2).toBe("hcsFMMfFFhFp");
});

test("should return duplicate letter of strings", () => {
  const s1 = "vJrwpWtwJgWr";
  const s2 = "hcsFMMfFFhFp";
  expect(getDuplicateLetter(s1, s2)).toBe("p");
});

test("should return duplicate letter of strings", () => {
  const s1 = "vJrwpWtwJgWrhcsFMMfFFhFp";
  const s2 = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
  const s3 = "PmmdzqPrVvPwwTWBwg";

  const s4 = "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn";
  const s5 = "ttgJtRGJQctTZtZT";
  const s6 = "CrZsJsPPZsGzwwsLwLmpwMDw";

  expect(getDuplicateLetter(s1, s2, s3)).toBe("r");
  expect(getDuplicateLetter(s4, s5, s6)).toBe("Z");
});

test("should produce correct letter value", () => {
  expect(getValueOfLetter("p")).toBe(16);
  expect(getValueOfLetter("L")).toBe(38);
  expect(getValueOfLetter("P")).toBe(42);
  expect(getValueOfLetter("v")).toBe(22);
  expect(getValueOfLetter("t")).toBe(20);
  expect(getValueOfLetter("s")).toBe(19);
});

test("should produce sum of 157", () => {
  const expectedResult = 157;
  const result = getSum(testData);
  expect(result).toBe(expectedResult);
});

test("should produce getSum value of 8493", () => {
  const dta = fs.readFileSync("./Day3.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(rows.length).toBe(300);
  const result = getSum(rows);
  expect(result).toBe(8493);
});

test("should produce total of 70 for two groups", () => {
  const dta = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ];
  expect(getSum2(dta)).toBe(70);
});

test("should produce getSum2 value of ?", () => {
  const dta = fs.readFileSync("./Day3.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  expect(rows.length).toBe(300);
  const result = getSum2(rows);
  expect(result).toBe(2552);
});
