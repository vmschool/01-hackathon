import {Module} from '@/core/module';
import * as UTILS from "@/core/utils";

export class RandomBackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
       return new Promise(() => {
           const menuList = document.querySelector("[data-type = 'randomBackground']");
           menuList.addEventListener('click', () => {
               document.body.style.background = `RGB(${UTILS.random(0, 255)}, ${UTILS.random(0, 255)}, ${UTILS.random(0, 255)})`;
               document.body.style.transition = 'background 1s ease';
           })
       })
    }
}