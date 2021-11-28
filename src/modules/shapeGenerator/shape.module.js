import { Module } from '../../core/module';
import { Shapes } from '@/sourceData';
import { random } from '@/utils';
import './shapes.css';

export class ShapeModule extends Module {
    appendSeconds;

    constructor() {
        super('shape', 'Generate Shape');
        this.body = document.querySelector('body');
    }

    createHTML() {
        const container = document.createElement('div');
        container.id = 'elementId';
        container.className = 'container-block ';
        container.style.zIndex = '-1';
        const clickAnywhere = document.createElement('div');
        clickAnywhere.className = 'clickAnywhere';
        clickAnywhere.textContent = 'Click Anywhere';
        const exit = document.createElement('a');
        exit.href = '#';
        exit.className = 'exit';
        // exit.onclick = closeTab()
        this.body.append(container, clickAnywhere, exit);
        document.addEventListener('click', this.mouseDown);

        // <a href="#" class="close"></a>
    }
    // closeTab(){
    //   container.removeChild
    // }
    mouseDown(e) {
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let randomNumber = random(1, 17);
        let objHTML = Shapes[randomNumber];

        const obj = document.createElement('div');
        obj.className = 'boxWrapper boxWrapper';
        obj.style.cssText = 'top:' + (cursorY - 25) + 'px;left:' + (cursorX - 25) + 'px;';
        obj.innerHTML = objHTML;

        document.getElementById('elementId').append(obj);
    }

    trigger() {
        this.createHTML();
    }
}
