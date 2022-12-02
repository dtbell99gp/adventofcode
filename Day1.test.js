const { findTotalCalories } = require("./Day1");

test("should produce correct total calories from collection", () => {
  const rows = [
    "2000",
    "1000",
    "4000",
    "",
    "1000",
    "5000",
    "12000",
    "",
    "400",
    "",
    "300",
    "200",
    "",
    "4000",
    "18000",
    "",
    "200",
    "1000",
  ];
  const result = findTotalCalories(rows);
  expect(result.mostCalories).toBe(22000);
  expect(result.mostElf).toBe(5);
});

test("should produce correct array of most calories from collection", () => {
  const rows = [
    "2000",
    "1000",
    "4000",
    "",
    "1000",
    "5000",
    "12000",
    "",
    "400",
    "",
    "300",
    "200",
    "",
    "4000",
    "18000",
    "",
    "200",
    "1000",
  ];
  const result = findTotalCalories(rows);
  console.log(result);
  expect(result.mostTopThree).toBe(47000);
});
