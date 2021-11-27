
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
      'https://assets2.lottiefiles.com/packages/lf20_x9h8ar8l.json',
      'https://assets9.lottiefiles.com/packages/lf20_rt9mhehe.json',
      'https://assets5.lottiefiles.com/packages/lf20_ecxcfmdm.json',
      'https://assets4.lottiefiles.com/private_files/lf30_tfozcvfo.json'
    ] 
  }

  triggerAnim(){ 

    const {posX, posY, figureWidth, figureHeight} = this.getCP()

    const animation = document.createElement('lottie-player') 
    const randAnimation = this.getRandomAtimationURL()

    animation.setAttribute('src', randAnimation[random(0, randAnimation.length - 1 )])
    animation.setAttribute('background', 'transparent')
    animation.setAttribute('speed', '1')
    animation.setAttribute('loop', '')
    animation.setAttribute('autoplay', '')

    animation.style.cssText = `
      position: absolute; 
      width: ${figureWidth}px;
      height: ${figureWidth}px;
      top:${random(0, posY)}px; 
      left:${random(0, posX)}px; 
      opacity: 0;
      transform: scale(0);
      transition: 0.4s all ease `

    this.show(animation)
    document.body.append(animation) 
    this.remove(animation)
  }

  triggerFigure(){
    const {posX, posY, figureWidth, figureHeight} = this.getCP()
    const color = this.getRandomColor()
    
    const figure = document.createElement('div')
    figure.style.cssText = `
      position: absolute;
      top:${random(0, posY)}px;
      left:${random(0, posX)}px; 
      width:${figureWidth}px; 
      height:${figureHeight}px; 
      border-radius:${random(0, 50)}%; 
      background:${color};
      opacity: 0;
      transform: scale(0);
      transition: 0.4s all ease `

    this.show(figure)
    document.body.append(figure) 
    this.remove(figure) 
  }

  init(){
    const script = document.createElement('script')
    script.setAttribute('src', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')
    document.head.append(script) 
  }

  remove(elem){
    setTimeout(() => {
      elem.style.opacity = '0'
      setTimeout(() => {
        elem.remove()
      }, 400)
    }, 5000)
  }

  show(elem){
    setTimeout(()=> {
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
    },1)
  }

  getCP(){
    const MAX = 600
    const MIN = 100
    const { width, height } = document.body.getBoundingClientRect()  
    const figureWidth = random(MIN, MAX)
    const figureHeight = random(MIN, MAX)
    const posX = width - figureWidth
    const posY = height - figureHeight

    return { 
      posX: posX,
      posY: posY,
      figureWidth: figureWidth,
      figureHeight: figureHeight  
    }

  }

  getRandomColor(){
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})` 
  }
}