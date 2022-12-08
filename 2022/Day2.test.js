const { getScore, getTotalScore } = require("./Day2");

test("should produce correct score based on input passed", () => {
  expect(getScore("A", "X")).toBe(4);
  expect(getScore("A", "Y")).toBe(8);
  expect(getScore("A", "Z")).toBe(3);

  expect(getScore("B", "X")).toBe(1);
  expect(getScore("B", "Y")).toBe(5);
  expect(getScore("B", "Z")).toBe(9);

  expect(getScore("C", "X")).toBe(7);
  expect(getScore("C", "Y")).toBe(2);
  expect(getScore("C", "Z")).toBe(6);
});

test("should produce total score based on row data", () => {
  const rows = ["A X", "A Y", "A Z", "B X", "B Y", "B Z", "C X", "C Y", "C Z"];
  expect(getTotalScore(rows)).toBe(4 + 8 + 3 + 1 + 5 + 9 + 7 + 2 + 6);
});
