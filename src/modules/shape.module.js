
import { Module } from '../core/module';
import { random } from '../utils'

export class ShapeModule extends Module {
  constructor(type, text){
    super(type, text)
    this.init()
  }

  trigger(){ 
    // const subMenu = document.createElement('li')
    // subMenu.style.cssText = 'background: rgb(66 65 65); font-size: 12px; color: white; border-bottom: 1px solid rgba(255, 255,255, 0.3); padding: 0 10px; height: 0; overflow: hidden; cursor: pointer; transform-origin: top left; transition: 1s all ease-out' 
    // subMenu.textContent = 'Выбрать произвольную фигуру?'

    // e.target.insertAdjacentElement('afterend', subMenu)
    // setTimeout(()=> {
    //   subMenu.style.cssText += 'height: auto; padding: 8px 10px;' 
    // },0)
    console.log('HELLO')
    const animation = [this.triggerAnim.bind(this), this.triggerFigure.bind(this)]

    animation[random(0,1)]()

    // subMenu.addEventListener('click', this.triggerAnim.bind(this))
  }

  getRandomAtimationURL(){
    return  [
      'https://assets6.lottiefiles.com/private_files/lf30_ir9niyn7.json',
      'https://assets8.lottiefiles.com/private_files/lf30_ovxvpeuq.json',
      'https://assets9.lottiefiles.com/packages/lf20_pks8ulwy.json',
      'https://assets10.lottiefiles.com/private_files/lf30_t0igqye8.json',
      'https://assets9.lottiefiles.com/packages/lf20_q7uarxsb.json',
      'https://assets7.lottiefiles.com/packages/lf20_f8swhg5f.json',
      'https://assets2.lottiefiles.com/packages/lf20_x9h8ar8l.json'
    ] 
  }

  triggerAnim(){ 

    const {width, height} = document.body.getBoundingClientRect()
 
    const posX = width - random(0, width)
    const posY = height - random(0, height)

    const animation = document.createElement('lottie-player') 
    const randAnimation = this.getRandomAtimationURL()

    animation.setAttribute('src', randAnimation[random(0, randAnimation.length - 1 )])
    animation.setAttribute('background', 'transparent')
    animation.setAttribute('speed', '1')
    animation.setAttribute('loop', '')
    animation.setAttribute('autoplay', '')
    animation.style.cssText = `position:absolute; width: ${random(200, 500)}px; height: ${random(200, 500)}px; top:${posY}px; left:${posX}px; transform:translate(-50%, -50%); opacity:1; transition: 0.4s all ease `
    document.body.append(animation)

    setTimeout(() => {
      animation.style.opacity = '0'
      setTimeout(() => {
        animation.remove()
      }, 400)
    }, 5000)
  }

  triggerFigure(){
   
    const {width, height} = document.body.getBoundingClientRect()
 
    const posX = width - random(0, width)
    const posY = height - random(0, height)

    const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`

    const figure = document.createElement('div') 
    figure.style.cssText = `position:absolute; top:${posY}px; left:${posX}px; width:${random(100, 300)}px; height:${random(100, 300)}px; border-radius:${random(5, 50)}%; background:${color}`
 
    document.body.append(figure)

    setTimeout(() => {
      animation.style.opacity = '0'
      setTimeout(() => {
        figure.remove()
      }, 400)
    }, 10000)
  }

  init(){
    const script = document.createElement('script')
    script.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
    document.head.append(script) 
  }

}