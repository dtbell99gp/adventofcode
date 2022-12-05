const fs = require("fs");

const doPairsOverlap = (p) => {
  const pData = p.split(",");
  const p1Start = pData[0].split("-")[0];
  const p1End = pData[0].split("-")[1];
  const p2Start = pData[1].split("-")[0];
  const p2End = pData[1].split("-")[1];

  if (
    (p1Start <= p2Start && p1End >= p2End) ||
    (p2Start <= p1Start && p2End >= p1End)
  ) {
    return true;
  }
  return false;
};

const doPairsUnderlap = (p) => {
  const pData = p.split(",");
  const p1Start = pData[0].split("-")[0];
  const p1End = pData[0].split("-")[1];
  const p2Start = pData[1].split("-")[0];
  const p2End = pData[1].split("-")[1];

  if (
    (p1Start > p2Start && p1End < p2End) ||
    (p2Start > p1Start && p2End < p1End)
  ) {
    return true;
  }
  return false;
};

const totalOverlap = (rows) => {
  let tot = 0;
  console.log(rows.length);
  for (const row of rows) {
    if (doPairsOverlap(row)) {
      tot++;
      //console.log(row);
    } else {
      //console.log(row);
    }
  }
  return tot;
};

const totalUnderlap = (rows) => {
  let tot = 0;
  console.log(rows.length);
  for (const row of rows) {
    if (doPairsUnderlap(row)) {
      tot++;
      //console.log(row);
    } else {
      //console.log(row);
    }
  }
  return tot;
};

// const dta = fs.readFileSync("./Day4.txt", { encoding: "utf8" });
// const rows = dta.split("\n");
// const r = totalOverlap(rows);
// console.log(r);

module.exports = {
  totalOverlap,
  doPairsOverlap,
  doPairsUnderlap,
  totalUnderlap,
};
