const isUnique = (str, size) => {
  const chars = str.split("");
  const s = new Set();
  for (const ch of chars) {
    s.add(ch);
  }
  if (s.size === size) {
    return true;
  }
  return false;
};

const getStreamStart = (str) => {
  let start = 0;
  let found = false;
  let pos = 0;
  let cntr = 0;
  while (!found) {
    const four = str.substring(start, 4 + start);
    if (isUnique(four, 4)) {
      found = true;
      pos = start + 4;
    } else {
      start++;
    }
  }
  return pos;
};

const getMessageStart = (str) => {
  let start = 0;
  let found = false;
  let pos = 0;
  let cntr = 0;
  while (!found) {
    const fourteen = str.substring(start, 14 + start);
    if (isUnique(fourteen, 14)) {
      found = true;
      pos = start + 14;
    } else {
      start++;
    }
  }
  return pos;
};

module.exports = {
  getStreamStart,
  isUnique,
  getMessageStart,
};
