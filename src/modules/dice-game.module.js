import {Module} from '../core/module';
import {createCross} from '../utils';
import {closeByCross} from '../utils';
import { random } from "../utils";

import JS_IMAGE_1 from '../assets/images/01.svg';
import JS_IMAGE_2 from '../assets/images/02.svg';
import JS_IMAGE_3 from '../assets/images/03.svg';
import JS_IMAGE_4 from '../assets/images/04.svg';
import JS_IMAGE_5 from '../assets/images/05.svg';
import JS_IMAGE_6 from '../assets/images/06.svg';

export class DiceGameModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  createDiceGameHTML() {
    const cross = createCross();

    const diceGameContainerHTML = document.createElement('div');
    diceGameContainerHTML.id = 'dice-game-container';


    const diceWrapHTML = document.createElement('div');
    diceWrapHTML.className = 'dice-wrap';
    diceGameContainerHTML.append(diceWrapHTML);

    const diceLeftHTML = document.createElement('img');
    diceLeftHTML.id = 'dice-left';
    diceLeftHTML.src = JS_IMAGE_1;
    const diceRightHTML = document.createElement('img');
    diceRightHTML.id = 'dice-right';
    diceRightHTML.src = JS_IMAGE_2;
    diceWrapHTML.append(diceLeftHTML, diceRightHTML);

    const diceTextTotal = document.createElement('p');
    diceTextTotal.className = 'dice-total'
    diceTextTotal.textContent = 'Всего ' + 0;
    diceTextTotal.id = 'total';

    const diceStartButton = document.createElement('button');
    diceStartButton.className = 'dice-button'
    diceStartButton.id = 'btn';
    diceStartButton.textContent = 'БРОСИТЬ КОСТИ';
    diceGameContainerHTML.append(cross,diceWrapHTML, diceTextTotal, diceStartButton);
    return diceGameContainerHTML;
  }

  close() {
    const crossBtn = document.querySelector('.cross-block');
    const modal = document.querySelector('.countdown-wrapper');

    crossBtn.addEventListener('click', event => {
      closeByCross('#dice-game-container');
    })
  }

  trigger() {

    let images = [
      JS_IMAGE_1,
      JS_IMAGE_2,
      JS_IMAGE_3,
      JS_IMAGE_4,
      JS_IMAGE_5,
      JS_IMAGE_6,
    ];

    const diceGameMenuItem = document.querySelector('[data-type="dice-game"]');
      document.querySelector('#area').append(this.createDiceGameHTML());

      const cross = document.querySelector('.cross-block');
      cross.style.background = 'mediumseagreen';

      const diceButton = document.querySelector('#btn');
      diceButton.addEventListener('click', () => {
        let diceLeftValue = random(1,6);
        let diceRightValue = random(1,6);
        console.log('diceLeftValue', diceLeftValue);
        console.log('diceRightValue', diceRightValue);
        diceRoll (diceLeftValue, diceRightValue);
      });

      function diceRoll (num1, num2) {
        let diceImages = document.querySelectorAll("img");

        diceImages.forEach((img) => img.classList.add("roll"));

        setTimeout(() => {
          diceImages.forEach((img) => img.classList.remove("roll"));
          const total = num1 + num2;
          document.querySelector("#total").innerHTML = "Всего " + total;
        }, 1000)

        const diceLeft = document.querySelector("#dice-left");
        diceLeft.setAttribute('src', images[num1 -1]);

        const diceRight = document.querySelector("#dice-right");
        diceRight.setAttribute('src', images[num2 -1]);

      }
      this.close()
  }
}
