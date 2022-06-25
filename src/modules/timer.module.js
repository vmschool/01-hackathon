//#region Import
import { Module } from '../core/module';
import { createTag, timerTickHandler } from '../utils';
import { timerElements } from '../globals';
//#endregion

export class TimerModule extends Module {
  trigger() {
    // prettier-ignore
    const timerContainer = createTag('div','',
    { class: 'timer-container' }, document.body)

    // prettier-ignore
    const [timerForm,timerInput,,timerCancel,timeShower] = timerElements.map((e) =>
      createTag(e.tag, e.content, e.attr, e.parent === 'cont'
          ? timerContainer
          : timerContainer.querySelector('form')
      )
    );
    timerCancel.onclick = () => timerForm.remove();

    timerForm.addEventListener('submit', timerSubmitHandle);

    function timerSubmitHandle(event) {
      event.preventDefault();
      timerForm.remove();
      timeShower.classList.toggle('hidden');

      const timeArray = timerInput.value.split(':').map((e) => +e);
      const waitMs =
        timeArray[0] * 3600000 + timeArray[1] * 60000 + timeArray[2] * 1000;
      setTimeout(timerTickHandler, 1000, waitMs, timeShower, timerContainer);
    }
  }
}
