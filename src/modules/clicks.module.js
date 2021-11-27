import {Module} from '../core/module'


export class ClicksModule extends Module {
    constructor(type, text) {
        super(type,'Clicks module')
        
        this.container = document.createElement('div')
        this.container.classList = 'all-btn-click'

        this.mainTitle = document.createElement('h1')
        this.mainTitle.className = 'main-title-click'
        this.mainTitle.textContent = 'Сделайте ваш выбор'
    }
    
    start(time) {
        let counter = 0
      
        this.title = document.createElement('h1')
        this.title.className = 'title-click'
        this.title.textContent =  time < 10?` 00:0${time}`:` 00:${time}`
     
        document.body.append(this.title)
      
        document.addEventListener('click', () => {
             time === 0? counter: counter++
        })
     
        const int = setInterval(()=> {
            if(time === 0) {
                clearInterval(int)
            }
            time === 0? this.finish(counter):
            time > 10? this.title.textContent = ` 00:${--time}`:
            this.title.textContent = ` 00:0${--time}`
            
        },1000)      
    } 
    finish(count) {
        const title = document.querySelector('.title-click')
        title.textContent = `Количество кликов: ${count}`

        setTimeout(() => {
           title.remove()
        },2000)
       }
    chooseTime() {
        const btn_1 = document.createElement('button')
        btn_1.className = 'btn-time-click'
        btn_1.textContent = '5 секунд'
        btn_1.dataset.time = '5'

        const btn_2 = document.createElement('button')
        btn_2.className = 'btn-time-click'
        btn_2.textContent = '10 секунд'
        btn_2.dataset.time = '10'

        const btn_3 = document.createElement('button')
        btn_3.className = 'btn-time-click'
        btn_3.textContent = '15 секунд'
        btn_3.dataset.time = '15'

        this.container.append(btn_1,btn_2,btn_3)
        document.body.append(this.mainTitle ,this.container)

        const btnContainer = document.querySelector('.all-btn-click')
       
        btnContainer.addEventListener('click', (event) => {
            
             if(event.target.classList.contains('btn-time-click')){
                 this.mainTitle.remove()
                 this.container.remove()
                 
                 this.start(event.target.dataset.time)
             }
        })
    } 
}