import {Menu} from './core/menu'
import {BackgroundModule} from "./modules/background.module";
import {ClicksModule} from "./modules/clicks.module";
import {ShapeModule} from "./modules/shape.module";

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open(x, y) {
        this.el.style.left = x + 'px'
        this.el.style.top = y + 'px'
        this.add(modules)
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
        this.el.innerHTML = ''
    }

    add(modules) {
        if (!modules.length) { // если массив элементов пустой - выходим
            return
        }
        if (!this.el.childNodes.length) { // проходим по массиву и помещаем каждый элемент в ul
            modules.forEach(module => {
                this.el.innerHTML += module.toHTML()
            })
        }
        const modulesArr = this.el.querySelectorAll('.menu-item') // находим все li
        modulesArr.forEach(module => {
            switch (module.dataset.type) { // на каждый элемент li вешаем слушатель клика в зависимовсти от data-type
                case 'background':
                    module.addEventListener('click', () => {
                        const moduleItem = modules.find(item => item.type === 'background')
                        console.log(moduleItem.trigger())
                    })
                    break
                case 'click':
                    module.addEventListener('click', () => {
                        const moduleItem = modules.find(item => item.type === 'click')
                        console.log(moduleItem.trigger())
                    })
                    break
                case 'shape':
                    module.addEventListener('click', () => {
                        const moduleItem = modules.find(item => item.type === 'shape')
                        console.log(moduleItem.trigger())
                    })
                    break
            }
        })
    }
}

const modules = [
    new BackgroundModule('background', 'Поменять цвет'),
    new ClicksModule('click', 'Считать клики (за 3 секунды)'),
    new ShapeModule('shape', 'Создать фигуру')
]