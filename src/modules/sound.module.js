import {Module} from '../core/module'
import { beep } from '../utils'

export class SoundModule extends Module {
    constructor (type, text) {
        super(type, text);
    }

    trigger(){

    //генератор целого случайного числа от min до max
    function getRandomIntNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
    }
    let f = getRandomIntNumber(300, 5000) //f - частота в герцах

    beep(f)
    }

} 
