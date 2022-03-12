import {Module} from '@/core/module';
import * as UTILS from "@/core/utils";

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            const shapeModule = document.querySelector("[data-type = 'shapeModule']");
            shapeModule.addEventListener('click', () => {
                const shape = document.querySelectorAll('.shape')
                    if(shape) {
                        shape.forEach(item => {
                            item.style.opacity = '0'
                            setTimeout(()=> {
                                item.remove()
                            }, 500)
                        })
                        this.createElement()
                    } else {
                        this.createElement()
                    }
            })
        })
    }
    createElement() {
        const shapeElement = document.createElement('div')
        const shapeInnerElement = document.createElement('div')
        shapeElement.classList = 'shape'
        shapeElement.style.opacity = '1'
        shapeElement.style.transition = 'opacity 0.5s'
        shapeElement.style.width = `${UTILS.random(50, 300)}px`
        shapeElement.style.height = `${UTILS.random(50, 300)}px`
        shapeElement.style.borderRadius = `${UTILS.random(0, 50)}%`
        shapeElement.style.backgroundColor = `RGB(${UTILS.random(0, 255)}, ${UTILS.random(0, 255)}, ${UTILS.random(0, 255)})`;
        shapeElement.style.position = 'absolute'
        shapeElement.style.top = `${UTILS.random(0, 70)}%`
        shapeElement.style.left = `${UTILS.random(0, 70)}%`

        shapeInnerElement.style.width = `50%`
        shapeInnerElement.style.height = `50%`
        shapeInnerElement.style.borderRadius = `${UTILS.random(0, 50)}%`
        shapeInnerElement.style.backgroundColor = `RGB(${UTILS.random(0, 255)}, ${UTILS.random(0, 255)}, ${UTILS.random(0, 255)})`;
        shapeInnerElement.style.position = 'absolute'
        shapeInnerElement.style.top = "50%"
        shapeInnerElement.style.left = "50%"
        shapeInnerElement.style.transform = "translate(-50%, -50%) rotate(45deg)"
        shapeElement.append(shapeInnerElement)
        document.body.append(shapeElement)

    }
}