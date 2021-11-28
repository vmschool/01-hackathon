import {Module} from '../../core/module';
import {Shapes} from '@/sourceData';
import {random} from "@/utils";
import './shapes.css';

export class ShapeModule extends Module{
    appendSeconds
    bindedHandler
    constructor() {
      super('shape','Generate Shape')
        this.container = document.createElement('div')
        this.container.id = 'elementId'
        this.container.className = 'container-block '
        this.body = document.querySelector('body')
    }
    
    createHTML(){
        
        const clickAnywhere = document.createElement('div')
        clickAnywhere.className = 'clickAnywhere'
        clickAnywhere.textContent = 'Click Anywhere'
        const exit = document.createElement('button')
        exit.href = '#'
        exit.className = 'exit'
        exit.onclick = this.closeTab.bind(this)
        this.container.append(clickAnywhere,exit)
        this.body.append(this.container)
        this.bindedHandler = this.clickHandler.bind(this);
        this.container.addEventListener("click", this.bindedHandler);
    }
    clickHandler(e){
      if(e.target === this.container)
      {this.mouseDown(e)}
    }
    closeTab(){
      this.container.removeEventListener("click", this.bindedHandler);
      console.log(this)
      this.container.remove()
    }
    
     mouseDown(e) {
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let randomNumber = random(1,17)
        let objHTML = Shapes[randomNumber]

        const obj = document.createElement('div');
        obj.className = "boxWrapper";
        obj.style.cssText = 'top:' + (cursorY - 25) + 'px;left:' + (cursorX - 25) + 'px;';
        obj.innerHTML = objHTML;

        document.getElementById("elementId").append(obj);
    }
    
    trigger(){
        this.createHTML()
    }
}
