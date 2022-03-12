import {Module} from '../../core/module';

export class RandomBackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        function bg() {
            const menuList = document.querySelector("[data-type = 'randomBackground']");
            menuList.addEventListener('click', (event) => {
                const colorsBackground = ['#FED6BC', '#FFFADD', '#DEF7FE', '#E7ECFF', '#C3FBD8', '#FDEED9', '#B5F2EA', '#C6D8FF'];
                const color = Math.floor(Math.random() * colorsBackground.length);
                document.body.style.background = colorsBackground[color];
                document.body.style.transition = 'background 1s ease';
            })
        }
        setTimeout(bg, 1)
        return super.toHTML();
    }
}