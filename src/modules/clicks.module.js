import {Module} from '../core/module'
import * as Utils from '../utils'


export class ClicksModule extends Module {

        constructor(){
        super('type', 'text')
        this.htmlBody = document.querySelector('body')
        this.startbBut = document.createElement('button')

        }
        
        
        render(){
            
            this.startbBut.style.background = '#ffffff'
            this.startbBut.style.width = '50px'
            this.startbBut.style.height = '50px'
            this.startbBut.style.marginLeft = '600px'
            this.startbBut.style.marginTop = '100px'
            this.startbBut.style.borderRadius = '25px'
            this.startbBut.style.border = '2px solid #284CFF '
            this.startbBut.style.backgroundColor = '#EFFF41'
            this.startbBut.style.color = 'red'
            this.startbBut.textContent ='старт'
            this.startbBut.className = 'clic'
            this.htmlBody.append(this.startbBut)
        }

            start(){ 
                this.startbBut.addEventListener('click', event =>{
                    this.startbBut.remove()
                    
                    if (event.target) {
                        Utils.resetCounter()
                        let i = 0
                        setTimeout(()=>{ this.htmlBody.append(Utils.updateDisplay(i)), this.htmlBody.append(this.startbBut) }, 5000)
                        this.htmlBody.addEventListener('click', event =>{ if (event.target){ i ++} })
                        }
                                })
            }
        
                
}
            