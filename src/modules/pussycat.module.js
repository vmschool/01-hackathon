import { Module } from '../core/module'

export class PussycatModule extends Module {
  #count

  constructor(type = 'pussycat', text = 'Сменить обои') {
    super(type, text)
    this.#count = 1
  }
  
  trigger() {
    this.#count++

    if (this.#count > 9) this.#count = 1

    document.body.style.backgroundImage = `url(http://lorempixel.com/1600/900/cats/${this.#count}`
  }
}

const pussy = new PussycatModule('1', '2')
document.body.addEventListener('click', () => {
  pussy.trigger()
})