import {Module} from '../core/module'

export class ShapeModule extends Module {
    #stackable
    #$canvas
    constructor(type = 'shapeModule', text = 'Создать фигуру', stackable = false) {
        super(type,text);
        this.#stackable = stackable
        this.#$canvas =  undefined
    }

    trigger() {
        console.log('trigger модуля спауна фигур сработал');
        if(!this.#$canvas) this.#setCanvas()
        const getRandColor = ()=>{
            return "rgb("+[
                Math.round(Math.random()*0xFF),
                Math.round(Math.random()*0xFF),
                Math.round(Math.random()*0xFF)
            ].join()+")";
        }
        const getRandom = (min, max)=>{
            return Math.floor(Math.random() * (max - min) + min)
        }
        if(this.#$canvas && this.#$canvas.getContext) {
            if(!this.#stackable) this.#clearCanvas()
            let maxFigureWidthHeight = window.innerWidth*0.35;
            let minFigureWidthHeight = window.innerWidth*0.15;
            let figureWidth = getRandom(minFigureWidthHeight, maxFigureWidthHeight);
            let figureHeight = getRandom(minFigureWidthHeight, maxFigureWidthHeight);
            let x = getRandom(figureWidth/2, window.innerWidth - figureWidth/2 );
            let y = getRandom(figureHeight/2, window.innerHeight - figureHeight/2 );
            const ctx = this.#$canvas.getContext('2d');
            const figures = ['circle', 'triangle','pentagon', 'trapezoid', 'diamond', 'rectangle']
            switch(figures[getRandom(0, figures.length)]) {
                case "circle":
                    ctx.beginPath();
                    ctx.arc(x, y, 50, 0,2 * Math.PI);
                    ctx.fillStyle = getRandColor();
                    ctx.fill();
                    ctx.stroke();
                    break;
                case "rectangle":
                    ctx.fillRect(x,y,x/2,y/2);
                    ctx.fillStyle = getRandColor();
                    break;
                case "triangle":
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 50, y);
                    ctx.lineTo(x + 100, y);
                    ctx.lineTo(x + 50,y -50 );
                    ctx.moveTo(x +50, y)
                    ctx.lineTo(x +100,y)
                    ctx.stroke();
                    ctx.fillStyle = getRandColor();
                    ctx.fill();
                    break;
                case "pentagon":
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 60, y);
                    ctx.lineTo(x + 85, y - 55);
                    ctx.lineTo(x + 30, y - 75);
                    ctx.lineTo(x - 25,y - 55);
                    ctx.stroke();
                    ctx.fillStyle = getRandColor();
                    ctx.fill();
                    break;
                case "trapezoid":
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 100, y);
                    ctx.lineTo(x + 75, y - 25);
                    ctx.lineTo(x + 25,y - 25 );
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    ctx.fillStyle = getRandColor();
                    ctx.fill();
                    break;
                case "diamond":
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 50, y - 50);
                    ctx.lineTo(x, y - 100);
                    ctx.lineTo(x - 50,y - 50 );
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    ctx.fillStyle = getRandColor();
                    ctx.fill();
                    break;
                default:
                    break;
            }

        }

    }
    #clearCanvas(){
        this.#$canvas.getContext("2d")?.clearRect(0, 0, this.#$canvas.width, this.#$canvas.height);
    }

    #setCanvas(){
        console.log('setCanvas() модуля спауна фигур');
        document.body.append(document.createElement('canvas'))
        this.#$canvas = document.querySelector('canvas')
        this.#$canvas.width = window.innerWidth;
        this.#$canvas.height = window.innerHeight;
        this.#$canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;`;
        const setupCanvas = ()=>{
            this.#$canvas.width = window.innerWidth;
            this.#$canvas.height = window.innerHeight;
        }
        window.onresize = function() {
            setupCanvas();
        };
    }
}