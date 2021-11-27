import {Module} from '../../core/module';
import {Shapes} from '@/sourceData';
import {random} from "@/utils";
import './shapes.css';

export class ShapeModule extends Module{
    appendSeconds

    constructor() {
      super('shape','Generate Shape')
        this.body = document.querySelector('body')
    }

    createHTML(){
        const container = document.createElement('div')
        container.id = 'elementId'
        container.className = 'container-block blue'
      container.style.zIndex = '-1';
        const containerWhite = document.createElement('div')
        containerWhite.id = 'elementId2'
        containerWhite.className = 'container white'
        const clickAnywhere = document.createElement('div')
        clickAnywhere.className = 'clickAnywhere'
        clickAnywhere.textContent = 'Click Anywhere'

        this.body.append(container,clickAnywhere)
        document.addEventListener("click", this.mouseDown);

    }

     mouseDown(e) {
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let randomNumber = random(1,17)
        let objHTML = Shapes[randomNumber]

        const obj = document.createElement('div');
        obj.className = "boxWrapper boxWrapper";
        obj.style.cssText = 'top:' + (cursorY - 25) + 'px;left:' + (cursorX - 25) + 'px;';
        obj.innerHTML = objHTML;

        document.getElementById("elementId").append(obj);
        let h = document.getElementById('elementId2').offsetHeight;
        const obj2 = obj.cloneNode(true);
        obj2.style.cssText = 'top:' + (cursorY - 25 - h) + 'px;left:' + (cursorX - 25) + 'px;';
        obj2.innerHTML = objHTML;

        document.getElementById("elementId2").append(obj2);
    }

    trigger(){
        this.createHTML()
    }
}
