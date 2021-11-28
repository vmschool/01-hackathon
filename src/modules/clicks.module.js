import {Module} from '../core/module'


export class ClicksModule extends Module {
    constructor(type,text) {
        super(type,text)
       
        this.container = document.createElement('div')
        this.container.className = 'clicks__btn__container'

        this.mainTitle = document.createElement('h1')
        this.mainTitle.className = 'clicks__main__title '
        this.mainTitle.textContent = 'Сделайте ваш выбор'

        this.clickBtn_5 = document.createElement('button')
        this.clickBtn_5.className = 'clicks__btn__time'
        this.clickBtn_5.textContent = '5 секунд'
        this.clickBtn_5.dataset.time = '5'

        this.clickBtn_10  = document.createElement('button')
        this.clickBtn_10.className = 'clicks__btn__time'
        this.clickBtn_10.textContent = '10 секунд'
        this.clickBtn_10.dataset.time = '10'

        this.clickBtn_15 = document.createElement('button')
        this.clickBtn_15.className = 'clicks__btn__time'
        this.clickBtn_15.textContent = '15 секунд'
        this.clickBtn_15.dataset.time = '15'
    }
    
    #start(time) {
        let counter = 0
        if(!this.title) {
            this.title = document.createElement('h1')
            this.title.className = 'clicks__title'
            this.title.textContent =  time < 10?` 00:0${time}`:` 00:${time}`
            this.title.style.webkitUserSelect = 'none'
        }
        document.body.append(this.title)
      
        document.addEventListener('click', () => {
             time === 0?counter:counter++
        })
     
        const int = setInterval(()=> {
            if(time === 0) {
                clearInterval(int)
            }
            time === 0?this.#finish(counter):
            time > 10?this.title.textContent = ` 00:${--time}`:
            this.title.textContent = ` 00:0${--time}`
            
        },1000)      
    } 
    #finish(count) {
        const title = document.querySelector('.clicks__title')
        title.textContent = `Количество кликов: ${count}`

        setTimeout(() => {
           title.remove()
        },2000)
       }
    trigger() {
        this.container.append(this.clickBtn_5,this.clickBtn_10,this.clickBtn_15)
        document.body.append(this.mainTitle ,this.container)

        const btnContainer = document.querySelector('.clicks__btn__container')
       
        btnContainer.addEventListener('click', (event) => {
             if(event.target.classList.contains('clicks__btn__time')){
                 this.mainTitle.remove()
                 this.container.remove()
                 
                 this.#start(event.target.dataset.time)
             }
        })
    } 
}