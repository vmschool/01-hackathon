import {Module} from '../core/module'
import { random, getRandomColor } from "../utils";

export class ShapeModule extends Module {
    constructor() {
        super("shape", "Создать фигуру");
        this.shape = document.createElement("div");
    }

    trigger( ) {
        let shapeWidth = random(20, 200);
        let shapeHeight = random(20, 200);
        let shapeX = random(
            shapeWidth + 10,
            document.body.clientWidth - shapeWidth - 10
        );
        let shapeY = random(
            shapeHeight + 10,
            window.innerHeight - shapeHeight - 10
        );
        let shapeRadius = random(0, 50);
        this.shape.style.width = `${shapeWidth}px`;
        this.shape.style.height = `${shapeHeight}px`;
        this.shape.style.backgroundColor = getRandomColor();
        this.shape.style.borderRadius = `${shapeRadius}%`;
        this.shape.style.position = "absolute";
        this.shape.style.top = `${shapeY}px`;
        this.shape.style.left = `${shapeX}px`;
        document.body.append(this.shape);
        setTimeout(() => {
            this.shape.remove()
        }, 2000)
    }
}