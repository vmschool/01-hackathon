import {Module} from '../core/module'
import { createElement } from '../utils'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type,text)

        this.container = createElement('div', 'all-btn')
        this.mainTitle = createElement('h1','main-title', 'Сделайте ваш выбор') 
    }
    start(time) {
        let counter = 0
        this.title =  createElement('h1','title',  time < 10?` 00:0${time}`:` 00:${time}`)
     
        document.body.append(this.title)
      
        document.addEventListener('click', () => {
             time === 0? counter: counter++
        })

        function finish() {
         const title = document.querySelector('.title')
       
         title.textContent = `Количество кликов: ${counter}`

         setTimeout(() => {
            title.remove()
         },5000)
        }
        setInterval(()=> {
            time === 0? finish():
            time > 10? this.title.textContent = ` 00:${--time}`:
            this.title.textContent = ` 00:0${--time}`
        },1000)      
    } 
    chooseTime() {
        this.container.append(
            createElement('button', 'btn-time', '5 секунд', '5'),
            createElement('button', 'btn-time', '10 секунд', '10'),
            createElement('button', 'btn-time', '15 секунд', '15'),
        )
        document.body.append(this.mainTitle ,this.container)

        const btnContainer = document.querySelector('.all-btn')
       
        btnContainer.addEventListener('click', (evt) => {
            
             if(evt.target.classList.contains('btn-time')){
                 this.mainTitle.remove()
                 this.container.remove()
                 
                 this.start(evt.target.dataset.time)
             }
        })
    } 
}