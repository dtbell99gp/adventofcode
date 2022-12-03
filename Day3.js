const values = "!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getValueOfLetter = (letter) => {
  return values.indexOf(letter);
};

const splitString = (s) => {
  const l = s.length / 2;
  const s1 = s.substring(0, l);
  const s2 = s.substring(l, l + l);
  return { s1, s2 };
};

const getDuplicateLetter = (s1, s2, s3) => {
  let dup;
  let dup2;
  for (const l of s1.split("")) {
    for (const l2 of s2.split("")) {
      if (l2 === l) {
        dup = l;
        if (s3) {
          for (const l3 of s3.split("")) {
            if (l3 === dup) {
              dup2 = dup;
            }
          }
        }
      }
    }
  }
  if (dup2) {
    return dup2;
  }
  return dup;
};

const getSum2 = (rows) => {
  let tot = 0;
  let cntr = 1;
  let s1;
  let s2;
  let s3;
  for (const row of rows) {
    if (cntr === 1) {
      s1 = row;
    } else if (cntr === 2) {
      s2 = row;
    } else if (cntr === 3) {
      s3 = row;
    }
    if (s1 && s2 && s3) {
      const l = getDuplicateLetter(s1, s2, s3);
      const v = getValueOfLetter(l);
      tot += v;
      s1 = null;
      s2 = null;
      s3 = null;
      cntr = 0;
    }
    cntr++;
  }
  return tot;
};

const getSum = (rows) => {
  let tot = 0;
  for (const row of rows) {
    const { s1, s2 } = splitString(row);
    const dup = getDuplicateLetter(s1, s2);
    const t = getValueOfLetter(dup);
    tot += t;
  }
  return tot;
};

module.exports = {
  getSum,
  getSum2,
  splitString,
  getDuplicateLetter,
  getValueOfLetter,
};
