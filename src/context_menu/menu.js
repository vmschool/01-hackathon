import { Menu } from '../core/menu';
import { RandomBackgroundModule } from "@/context_menu/modules/random_background.module";
import { ClicksModule } from "@/context_menu/modules/clicks.module";
import { ShapeModule } from "@/context_menu/modules/shape.module";
import { RandomSound } from "@/context_menu/modules/random_sound.module";
import { TimerModule } from "@/context_menu/modules/timer.module";
import { CustomText } from "@/context_menu/modules/custom_text.module";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }
    open(event) {
        const contextMenu = document.querySelector('#menu');
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            contextMenu.classList.add('open');
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            //contextMenu.style.height = '200px';
        })
        document.body.addEventListener('click', event => {
            if (event.button !== 2) {
                contextMenu.classList.remove('open');
            }
        })
    }
    close() {
        const contextMenu = document.querySelector('#menu');
        contextMenu.classList.remove('open')
    }

    add() {
        const contextMenu = document.querySelector('#menu');
        const contextMenuItems = [
            new RandomBackgroundModule('randomBackground', 'Случайный фон'),
            new ClicksModule('clickModule', 'Аналитика кликов'),
            new ShapeModule('shapeModule', 'Случайная фигура'),
            new CustomText('customText', 'Кастомное сообщение'),
            new RandomSound('randomSound', 'Случайный звук'),
            new TimerModule('timer', 'Таймер отчёта')
        ]

        contextMenuItems.forEach((el) => {
            contextMenu.insertAdjacentHTML('beforeend', el.toHTML());
        })

        // const background = new RandomBackgroundModule('randomBackground', 'Случайный фон');
        // const numberOfClick = new ClicksModule('clickModule', 'Аналитика кликов');
        // const shapeModule = new ShapeModule('shapeModule', 'Случайная фигура');
        // const customText = new CustomText('customText', 'Кастомное сообщение');
        // const randomSound = new RandomSound('randomSound', 'Случайный звук');
        // const timer = new TimerModule('timer', 'Таймер отчёта');

        // contextMenu.insertAdjacentHTML('beforeend', background.toHTML());
        // contextMenu.insertAdjacentHTML('beforeend', numberOfClick.toHTML());
        // contextMenu.insertAdjacentHTML('beforeend', shapeModule.toHTML());
        // contextMenu.insertAdjacentHTML('beforeend', customText.toHTML());
        // contextMenu.insertAdjacentHTML('beforeend', randomSound.toHTML());
        // contextMenu.insertAdjacentHTML('beforeend', timer.toHTML());

    }
}