const getContainers2 = (containers, steps) => {
  for (const step of steps) {
    const stepData = step.split(" ");
    const containersToMove = parseInt(stepData[1]);
    const startPosition = stepData[3];
    const endPosition = stepData[5];
    const lettersToMove = [];
    for (let i = 0; i < containersToMove; i++) {
      const ltr = containers[startPosition].shift();
      lettersToMove.push(ltr);
      //containers[endPosition].unshift(ltr);
    }
    const totJumps = lettersToMove.length;
    for (let i = 0; i < totJumps; i++) {
      const ltr = lettersToMove.pop();
      containers[endPosition].unshift(ltr);
    }
  }

  let ltrs = "";
  Object.keys(containers).forEach((k) => {
    ltrs = ltrs + containers[k][0];
  });
  return ltrs;
};

const getContainers = (containers, steps) => {
  for (const step of steps) {
    const stepData = step.split(" ");
    const containersToMove = parseInt(stepData[1]);
    const startPosition = stepData[3];
    const endPosition = stepData[5];

    for (let i = 0; i < containersToMove; i++) {
      const ltr = containers[startPosition].shift();
      containers[endPosition].unshift(ltr);
    }
  }
  let ltrs = "";
  Object.keys(containers).forEach((k) => {
    ltrs = ltrs + containers[k][0];
  });
  return ltrs;
};

module.exports = {
  getContainers,
  getContainers2,
};
