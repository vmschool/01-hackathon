import {Module} from '../core/module'
import {getRandomColor, random} from "../utils";

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        document.body.style.backgroundImage = `linear-gradient(${random(0, 360)}deg, ${getRandomColor()}, ${getRandomColor()})`
    }
}