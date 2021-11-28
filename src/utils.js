import { golGrit } from "./constants";

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
export function createInitialGeneration() {
  const generation = [];
  for (let i = 0; i < golGrit.rows; i++) {
    const generationXAxis = [];
    for (let j = 0; j < golGrit.cols; j++) {
      const element = {
        isAlive: false,
      };
      generationXAxis.push(element);
    }
    generation.push(generationXAxis);
  }
  return generation;
}

function getNeighborCount(currGen, row, col) {
  let count = 0;
  if (row - 1 >= 0) {
    if (currGen[row][col].isAlive) {
      count++;
    }
  }
  if (row - 1 >= 0 && col - 1 >= 0) {
    if (currGen[row - 1][col - 1].isAlive) {
      count++;
    }
  }
  if (row - 1 >= 0 && col + 1 < golGrit.cols) {
    if (currGen[row - 1][col + 1].isAlive) {
      count++;
    }
  }
  if (col - 1 >= 0) {
    if (currGen[row][col - 1].isAlive) {
      count++;
    }
  }
  if (col + 1 < golGrit.cols) {
    if (currGen[row][col + 1].isAlive) {
      count++;
    }
  }
  if (row + 1 < golGrit.rows && col - 1 >= 0) {
    if (currGen[row + 1][col - 1].isAlive) {
      count++;
    }
  }
  if (row + 1 < golGrit.rows && col + 1 < golGrit.cols) {
    if (currGen[row + 1][col + 1].isAlive) {
      count++;
    }
  }
  if (row + 1 < golGrit.rows) {
    if (currGen[row + 1][col].isAlive) {
      count++;
    }
  }
  return count;
}
export function createNextGen(currGen) {
  const nextGen = createInitialGeneration();
  currGen.forEach((row, roi) => {
    row.forEach((col, coi) => {
      const neighbors = getNeighborCount(currGen, roi, coi);
      if (currGen[roi][coi].isAlive) {
        if (neighbors < 2) {
          nextGen[roi][coi].isAlive = false;
        } else if (neighbors === 2 || neighbors === 3) {
          nextGen[roi][coi].isAlive = true;
        } else if (neighbors > 3) {
          nextGen[roi][coi].isAlive = false;
        }
      } else {
        if (neighbors === 3) {
          nextGen[roi][coi].isAlive = true;
        }
      }
    });
  });
  return nextGen;
}
