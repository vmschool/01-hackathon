import { Module } from "../core/module";

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const canvas = document.createElement("canvas");
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.fillStyle = "#aaa";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        const randomShape = Math.floor(Math.random() * 2 + 1);
        const arrColor = [
            "#e9967a",
            "#adff2f",
            "#ff1493",
            "#ffd700",
            "#00ffff",
            "#deb887",
            "#708090",
            "#000080",
        ];

        const shapeWidth = Math.floor(Math.random() * 50 + 60);
        const shapeHeight = Math.floor(Math.random() * 50 + 60);
        const shapeRadius = Math.floor(Math.random() * 10 + 20);
        const randomX = window.innerWidth - shapeWidth;
        const randomY = window.innerHeight - shapeHeight;

        if (randomShape === 1) {
            context.beginPath();
            context.rect(randomX, randomY, shapeWidth, shapeHeight);
            context.fillStyle =
                arrColor[Math.floor(Math.random() * arrColor.length)];
            context.fill();
            context.lineWidth = 2;
            context.stroke();
        } else if (randomShape === 2) {
            context.beginPath();
            context.arc(randomX, randomY, shapeRadius, 0, 2 * Math.PI, false);
            context.fillStyle =
                arrColor[Math.floor(Math.random() * arrColor.length)];
            context.fill();
            context.lineWidth = 2;
            context.stroke();
        }

        document.body.append(canvas);
    }
}
