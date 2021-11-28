import {Module} from '../core/module'


const tegHtml = document.createElement('h2')
tegHtml.style.color='green'
tegHtml.style.marginLeft = '500px'


function updateDisplay(i) {
    
    tegHtml.innerHTML = `количество кликов = ${i}`
    return tegHtml
} 

function resetCounter() {
    tegHtml.innerHTML = ''
return tegHtml
}

export class ClicksModule extends Module {

        constructor(){
        super('type', 'text')
            this.counter = 0
            console.log('this.counter', this.counter)
        
        }
        
        
        render(){
            const htmlBody = document.querySelector('body')
            const startbBut = document.createElement('button')
            console.log('this.counter1', this.counter)
            startbBut.type='button'
            startbBut.style.background = '#ffffff'
            startbBut.style.width = '50px'
            startbBut.style.height = '50px'
            startbBut.style.marginLeft = '600px'
            startbBut.style.marginTop = '100px'
            startbBut.style.borderRadius = '25px'
            startbBut.style.border = '2px solid #284CFF '
            startbBut.style.backgroundColor = '#EFFF41'
            startbBut.style.color = 'red'
            startbBut.textContent ='старт'
            startbBut.className = 'clic'
            htmlBody.append(startbBut)

            startbBut.addEventListener('click', event =>{
                startbBut.remove()
                
                if (event.target) {
                    resetCounter()      
                    let i = 0
                    setTimeout(()=>{ htmlBody.append(updateDisplay(i)), htmlBody.append(startbBut) }, 5000)
                            htmlBody.addEventListener('click', event =>{ if (event.target){ i ++} })
                    }
            

                
            })
          
        }
                
}
            //     startbBut.onclick = function(event) {
            
            //         if (document.querySelector('h2')){
            //         resetCounter()}
                

            //         let i = 0
            //         console.log('start',i)
            //         if (event.target){
            //             setTimeout(()=>{ htmlBody.append(updateDisplay(i))  }, 5000)
            //                 htmlBody.addEventListener('click', event =>{
                               
            //                             if (event.target){ i ++}
                                
            //                 })
                            
            //     }
            

            // }
