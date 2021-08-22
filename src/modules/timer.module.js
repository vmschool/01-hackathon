import { TimerInterface } from "./timerInterface";

export default class TimerModule extends TimerInterface {
  constructor(type, text) {
    super(type, text);
  }

  startProcess(titleField) {
    this.timerControlOn(titleField);
  }

  finishProcess() {
    this.timerControlOf();
    this.restart();
  }

  trigger() {
    this.initiateTimer(this.type, 'Create Timer');
  }
}
