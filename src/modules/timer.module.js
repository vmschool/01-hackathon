import {Module} from '../core/module'

export class TimerModule extends Module {

  trigger() {
    console.log('timer from timer');
  }
}
