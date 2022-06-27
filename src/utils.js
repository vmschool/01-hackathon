export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function clickCount(isDouble) {
  if (isDouble) {
    const dblclickScore = document.querySelector('.dblclick-score');
    if (this.startTime > 0) this.dblClickCounter++;
    dblclickScore.textContent = `Double Click Score: ${this.dblClickCounter}`;
  } else {
    const clickScore = document.querySelector('.click-score');
    if (this.startTime > 0) this.clickCounter++;
    if (clickScore) {
      clickScore.textContent = `Click Score: ${this.clickCounter}`;
    }
  }
}

export function getRandomColor() {
  let RGB = [];
  for (let i = 0; i < 3; i++) {
    RGB.push(random(0, 255));
  }
  const [red, green, blue] = RGB;

  return `rgb(${red},${green},${blue})`;
}

// export function createCross() {
//   const crossBlock = document.createElement('button');
//   const spanElement = document.createElement('span');
//   crossBlock.className = 'cross-block';
//   crossBlock.type = 'button';

//   crossBlock.append(spanElement);

//   return crossBlock;
// }

export function closeByCross(currentModal) {
  const modal = document.querySelector(currentModal);

  if (modal) {
    modal.remove();
  }

  
}

export function createCross() {
  const crossBlock = document.createElement('button');
  const spanElement = document.createElement('span');
  crossBlock.className = 'cross-block';
  crossBlock.type = 'button';

  crossBlock.append(spanElement);

  return crossBlock;
}

// export function closeByCross(currentModal) {
//   const modal = document.querySelector(currentModal);

//   if (modal) {
//     modal.remove();
//   }
// }
