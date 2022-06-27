import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { CallMessageModule } from './modules/call-message.module';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { SoundsModule } from './modules/sounds.module';
import { TimerModule } from './modules/timer.module';
import { DiceGameModule } from './modules/dice-game.module';
import { BallCatcherModule } from './modules/ball-catcher.module';

// инициализация меню + конструктор родительского класса из "core" создает переменную "el" по селектору #menu
const contextMenu = new ContextMenu('#menu');

const area = document.createElement("div");
area.classList.add("area");
area.id = "area";
document.body.append(area);

// обработчик на правый клик для открытия меню
document.body.addEventListener('contextmenu',  event => {
  contextMenu.open(event);
});

// инициализация модулей
const callMessage = new CallMessageModule('message-text', 'Вызвать сообщение');
const clicksModule = new ClicksModule('clickModule', 'Аналитика кликов');
const shapeModule = new ShapeModule('shapeModule', 'Создать фигуру');
const backgroundModule = new BackgroundModule('background', 'Цвет фона сменить!');
const soundsModule = new SoundsModule('sound_element', 'Издать звук');
const timerModule = new TimerModule("timer", "Таймер обратного отсчета");
const diceGameModule = new DiceGameModule("dice-game", "Запустить игру 'Кости'");
const ballCatcherModule = new BallCatcherModule("ball-catcher-game", "Запустить игру 'Мяч'");

// добавление в меню модуля и его обрабтчика клика
contextMenu.add(callMessage);
contextMenu.add(clicksModule);
contextMenu.add(shapeModule);
contextMenu.add(backgroundModule);
contextMenu.add(soundsModule);
contextMenu.add(timerModule);
contextMenu.add(diceGameModule);
contextMenu.add(ballCatcherModule);