import {Module} from '../core/module';
import {random} from '../utils';

export class ShapeModule extends Module {
    constructor(){
        super('random_figure', 'Создать фигуру');
        this.container = document.querySelector('body');
        this.color = ['green', 'blue', 'red', 'black'];
    }

    trigger(){
        const randomNum = random(1, 3);
        switch (randomNum) {
            case 1:
                this.#createRandomCircle();
                break;
            case 2:
                this.#createRandomTriangleUp();
                break;
        
            default:
                this.#createRandomSquare()
                break;
        }
    }

    #createRandomCircle(){
        const figure = document.createElement('div');
        const size = random(30, 130);
        const {width, height} = this.container.getBoundingClientRect();
        const x=random(0, width - size);
        const y=random(0, height - size);
    
        figure.classList.add('figure', 'circle');
        figure.style.width = `${size}px`;
        figure.style.height = `${size}px`;
        figure.style.top = `${y}px`;
        figure.style.right = `${x}px`;
        figure.style.background = this.color[random(0, 3)];
    
        this.container.append(figure);
    }
    #createRandomSquare(){
        const figure = document.createElement('div');
        const size = random(30, 130);
        const {width, height} = this.container.getBoundingClientRect();
        const x=random(0, width - size);
        const y=random(0, height - size);
    
        figure.classList.add('figure');
        figure.style.width = `${size}px`;
        figure.style.height = `${size}px`;
        figure.style.top = `${y}px`;
        figure.style.right = `${x}px`;
        figure.style.background = this.color[random(0, 3)];
    
        this.container.append(figure);
    }
    #createRandomTriangleUp(){
        const figure = document.createElement('div');
        const size = random(30, 130);
        const {width, height} = this.container.getBoundingClientRect();
        const x=random(0, width - size*2);
        const y=random(0, height - size);
    
        figure.classList.add('figure');
        figure.style.borderLeft = `${size}px solid transparent`;
        figure.style.borderRight = `${size}px solid transparent`;
        figure.style.borderBottom = `${size*2}px solid ${this.color[random(0, 3)]}`;
        figure.style.top = `${y}px`;
        figure.style.right = `${x}px`;
    
        this.container.append(figure);
    }
}