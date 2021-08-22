import {Module} from '../core/module'
import { random } from "../utils";


export class BackgroundModule extends Module {
  constructor() {
    super('random background', 'Случайный фон');
  }

  trigger() {
    const container = document.querySelector('.container')
    console.log(container)

    const backgroundArea = document.createElement('div')
    backgroundArea.className = 'bg-area'
    container.append(backgroundArea)
    
    const buttonColor = document.createElement('button')
    buttonColor.textContent = 'Cменить фон'
    backgroundArea.append(buttonColor)

    function createRandomColor() {
      const colorR = random(0, 255)
      const colorG = random(0, 255)
      const colorB = random(0, 255)

      backgroundArea.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
    }

    buttonColor.addEventListener('click', (event) => {
      const {target} = event
      if (target) {
        createRandomColor()
      }
    })

  }

}