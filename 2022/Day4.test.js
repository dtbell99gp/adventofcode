const { totalOverlap, doPairsOverlap } = require("./Day4");
const fs = require("fs");

test("do pairs overlap false", () => {
  const pairs = "2-4,6-8";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(false);
});

test("do pairs overlap true", () => {
  const pairs = "2-9,3-7";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("do pairs overlap true", () => {
  const pairs = "5-12,6-11";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("do pairs overlap true", () => {
  const pairs = "6-11,5-12";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("do pairs overlap true", () => {
  const pairs = "6-11,5-12";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("do pairs overlap false again", () => {
  const pairs = "50-70,47-63";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(false);
});

test("do pairs overlap true again", () => {
  const pairs = "6-6,4-6";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("do pairs overlap true again", () => {
  const pairs = "98-98,17-99";
  const result = doPairsOverlap(pairs);
  expect(result).toBe(true);
});

test("should produce result of 2", () => {
  const rows = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
  ];
  const result = totalOverlap(rows);
  expect(result).toBe(2);
});

test("totalOverlap should equal: 540 ", () => {
  const dta = fs.readFileSync("./Day4.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const r = totalOverlap(rows);
  expect(r).toBe(540);
});

test("anyOverlap should equal: 540 ", () => {
  const dta = fs.readFileSync("./Day4.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const r = totalOverlap(rows, true);
  expect(r).toBe(872);
});

test("should equal true", () => {
  const row = "2-8,5-3";
  const result = doPairsOverlap(row);
  expect(result).toBe(true);
});

test("should produce 588 using Roberts txt file", () => {
  const dta = fs.readFileSync("./input.txt", { encoding: "utf8" });
  const rows = dta.split("\n");
  const r = totalOverlap(rows);
  expect(r).toBe(588);
});

test("should produce result of 4", () => {
  const rows = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
  ];
  const result = totalOverlap(rows, true);
  expect(result).toBe(4);
});
