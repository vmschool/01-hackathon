import { Module } from '../../core/module';
import { Shapes } from '@/sourceData';
import { random } from '@/utils';
import './shapes.css';

<<<<<<< HEAD
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
=======
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
>>>>>>> 371fba7a4b8b436fc165aeaf7de4bca443c3a949
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        let randomNumber = random(1, 17);
        let objHTML = Shapes[randomNumber];

        const obj = document.createElement('div');
<<<<<<< HEAD
        obj.className = "boxWrapper";
=======
        obj.className = 'boxWrapper boxWrapper';
>>>>>>> 371fba7a4b8b436fc165aeaf7de4bca443c3a949
        obj.style.cssText = 'top:' + (cursorY - 25) + 'px;left:' + (cursorX - 25) + 'px;';
        obj.innerHTML = objHTML;

        document.getElementById('elementId').append(obj);
    }

    trigger() {
        this.createHTML();
    }
}
