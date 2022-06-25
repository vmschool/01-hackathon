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
