import {Module} from '../core/module'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    console.log('SoundModule')
  }
}
