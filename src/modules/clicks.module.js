import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor() {
    super('click analytics', 'Аналитика кликов');
  }

  trigger() {
    const container = document.querySelector('.container')

    const clickedArea = document.createElement('div')
    clickedArea.className = 'clicked-area'

    const getReady = document.createElement('span')
    getReady.className = 'get-ready'
    getReady.textContent = 'Кликай по синему прямоугольнику!'

    container.append(getReady, clickedArea)
    console.log('im triggered!')

    let clicksCounter = 0;

    

    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target) {
        clicksCounter++;
      }
    });
    const currentTimeout = 5000;
    setTimeout(() => {
      const clicksAmount = `Количество кликов за ${
        currentTimeout / 1000
      } секунд равно ${clicksCounter}`;
      console.log(clicksAmount)
      const clicksAmountElement = document.createElement("div");
      clicksAmountElement.textContent = clicksAmount;
      container.append(clicksAmountElement)
      
    }, currentTimeout);
  }
}
