//#region Import
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { MessageModule } from './modules/message.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
//#endregion

//#region Constants
export const OPEN_CLASS = 'open';
export const MENU_SELECTOR = '#menu';
export const ELEMENTS = [
  {
    name: 'clicks',
    text: 'Считать клики (за&nbsp;7&nbsp;секунд)',
    type: ClicksModule,
  },
  {
    name: 'background',
    text: 'Поменять цвет фона',
    type: BackgroundModule,
  },
  {
    name: 'timer',
    text: 'Таймер отсчета',
    type: TimerModule,
  },
  {
    name: 'shape',
    text: 'Создать фигуру',
    type: ShapeModule,
  },
  {
    name: 'message',
    text: 'Показать случайное сообщение',
    type: MessageModule,
  },
];
//#endregion

export const timerElements = [
  {
    tag: 'form',
    content: '',
    attr: {
      class: 'timer-input_form',
    },
    parent: 'cont',
  },
  {
    tag: 'input',
    content: '',
    attr: {
      id: 'timer-input',
      type: 'time',
      step: '1',
      value: '00:00:00',
      name: 'timerInput',
    },
    parent: 'form',
  },
  {
    tag: 'button',
    content: 'Старт',
    attr: {
      class: 'timer-button',
      type: 'submit',
    },
    parent: 'form',
  },
  {
    tag: 'button',
    content: 'Отмена',
    attr: {
      class: 'canсel-button',
      type: 'button',
    },
    parent: 'form',
  },
  {
    tag: 'span',
    content: '',
    attr: {
      class: 'timer-span hidden',
    },
    parent: 'cont',
  },
];
