import {Module} from '../core/module'
import * as Utils from '../utils';

export class ShapeModule extends Module {
    #colors
    #widthShape
    #heightShape

    static TYPE = 'ShapeModule';
    static TEXT = 'Создать фигуру';

    constructor() {
    super(ShapeModule.TYPE, ShapeModule.TEXT)
    this.#colors = ['#E6D72A', '#5BC8AC', '#98DBC6', 
                    '#FEFE22', '#fi62ff', '#ffcce7', 
                    '#fe3a9e', '#FBA0E3', '#FF00FF', 
                    '#DA70D6', '#EEBEF1', '#CD00CD'];
    this.#widthShape = Utils.random(20, 60);
    this.#heightShape = this.#widthShape * 1.5;               
    }

    getRendomColor = () => {
        const index = Utils.random(0, this.#colors.length - 1);
        return this.#colors[index];
    }

    createNewShape = () => {
        const newShape = document.createElement('div');
        newShape.id = 'shape';
        newShape.className = 'egg';
        newShape.display = 'block';
        newShape.style.webkitBorderRadius = '63px 63px 63px 63px / 108px 108px 72px 72px';
        newShape.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%' ;
    
        const top = Utils.random(0, 50);
        const left = Utils.random(0, 100);
        newShape.style.marginTop = `${top}%`;
        newShape.style.marginLeft = `${left}%`;
    
        this.#widthShape = Utils.random(20, 60);
        this.#heightShape = widthShape * 1.5;
        
        newShape.style.width = `${this.#widthShape}rem`; 
        newShape.style.height = `${this.#heightShape}rem`;
    
        newShape.style.backgroundColor = this.getRendomColor();

        return newShape;
    }

    displayNewShape = () => {
        document.body.append(this.createNewShape());
    }

    trigger() {
        document.body.addEventListener('click',() => {
            const oldShape = document.querySelector('#shape');
            if(oldShape){
                oldShape.remove();
            }
        
            this.displayNewShape();
        })
    }
}