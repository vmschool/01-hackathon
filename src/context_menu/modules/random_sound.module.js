import {Module} from '@/core/module';


export class RandomSound extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        console.log('123456')
        // return new Promise(() => {
        //     const soundModule = document.querySelector("[data-type = 'randomSound']");
        //     soundModule.addEventListener('click', () => {
        //         console.log('123456')
        //     })
        // })

    }
}