import {Module} from '../core/module'
import * as Utils from '../utils';

export class ShapeModule extends Module {
    #colors

    static TYPE = 'ShapeModule';
    static TEXT = 'Создать фигуру';

    constructor() {
    super(ShapeModule.TYPE, ShapeModule.TEXT)
    this.#colors = ['#E6D72A', '#5BC8AC', '#98DBC6', 
                    '#FEFE22', '#f162ff', '#ffcce7', 
                    '#fe3a9e', '#FBA0E3', '#FF00FF', 
                    '#DA70D6', '#EEBEF1', '#CD00CD',];
                   
    }

    getRandomColor = () => {
        const index = Utils.random(0, this.#colors.length - 1);
        console.log('index', index);
        return this.#colors[index];
    }

    createNewShape = () => {
        const newShape = document.createElement('div');
        newShape.id = 'shape';
        newShape.className = 'egg';
        newShape.display = 'block';
        newShape.style.webkitBorderRadius = '63px 63px 63px 63px / 108px 108px 72px 72px';
        newShape.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%' ;

        const widthShape = Utils.random(50, 260);
        const heightShape = widthShape * 1.5;
        const top = Utils.random(heightShape, window.innerHeight - (heightShape + 50));
        const left = Utils.random(widthShape, window.innerWidth - (widthShape + 50));

        newShape.style.marginTop = `${top}px`;
        newShape.style.marginLeft = `${left}px`;

        newShape.style.width = `${widthShape}px`; 
        newShape.style.height = `${heightShape}px`;
    
        newShape.style.backgroundColor = this.getRandomColor();
        console.log('color', newShape.style.backgroundColor);

        return newShape;
    }

    displayNewShape = () => {
        document.body.append(this.createNewShape());
    }

    trigger() {
        const oldShape = document.querySelector('#shape');

        if(oldShape){
            oldShape.remove();
        }
    
        this.displayNewShape();
    }
}