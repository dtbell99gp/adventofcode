const fs = require("fs");

const doAnyOverlap = (p) => {
  const pData = p.split(",");
  const p1Start = parseInt(pData[0].split("-")[0]);
  const p1End = parseInt(pData[0].split("-")[1]);
  const p2Start = parseInt(pData[1].split("-")[0]);
  const p2End = parseInt(pData[1].split("-")[1]);

  if (p1Start >= p2Start && p1Start <= p2End) {
    return true;
  }
  if (p1End >= p2Start && p1End <= p2End) {
    return true;
  }

  if (p2Start >= p1Start && p2Start <= p1End) {
    return true;
  }
  if (p2End >= p1Start && p2End <= p1End) {
    return true;
  }

  return false;
};

const doPairsOverlap = (p) => {
  const pData = p.split(",");
  const p1Start = parseInt(pData[0].split("-")[0]);
  const p1End = parseInt(pData[0].split("-")[1]);
  const p2Start = parseInt(pData[1].split("-")[0]);
  const p2End = parseInt(pData[1].split("-")[1]);

  if (
    p2Start >= p1Start &&
    p2Start <= p1End &&
    p2End >= p1Start &&
    p2End <= p1End
  ) {
    return true;
  }

  if (
    p1Start >= p2Start &&
    p1Start <= p2End &&
    p1End >= p2Start &&
    p1End <= p2End
  ) {
    return true;
  }

  return false;
};

const totalOverlap = (rows, anyOverlap = false) => {
  let tot = 0;
  for (const row of rows) {
    const r = anyOverlap ? doAnyOverlap(row) : doPairsOverlap(row);
    if (r) {
      tot++;
    }
  }
  return tot;
};

// const dta = fs.readFileSync("./input.txt", { encoding: "utf8" });
// const rows = dta.split("\n");
// const r = totalOverlap(rows);

module.exports = {
  totalOverlap,
  doPairsOverlap,
  doAnyOverlap,
};
