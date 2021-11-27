import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import * as Utils from './utils'

export class ContextMenu extends Menu {

    constructor(){
        super()
        this.backgroundModule = new BackgroundModule()
        this.clicksModule = new ClicksModule()
        this.shapeModule = new ShapeModule()
        this.modules =[]
        
    }
    render(){
        createModuleArray()
        const ulElem = document.querySelector('ul')
        this.modules.forEach(item=>{
            const liElem = document.createElement('li')
            liElem.className = 'menu-item'
            liElem.dataset.type = item.id
            liElem.textContent = item.text
            ulElem.append(this.liElem)
        })
        
        document.body.append(this.ulElem)
        
        document.body.addEventListener('contextmenu',(event)=>{
            event.preventDefault()
            this.open()
        })

        document.body.addEventListener('click',(event)=>{
            event.preventDefault
            this.close()
        })
        this.liElem.addEventListener('click',(event)=>{
            event.preventDefault
            const type = event.target.dataset
            this.add(type)
        })
        Utils.menuClick()
        console.log(document.body.innerHTML)
    }
    open(){
        this.ulElem.style.display = 'block';
        console.log('open')
    }
    close() {
        this.ulElem.style.display = 'none';
        console.log('close')
    }
    
    add(value) {
       if (+value === 1){
        this.clicksModule.trigger()
       }
       if (+value === 2){
        this.shapeModule.trigger()
       }
       if (+value === 3){
        this.backgroundModule.trigger()
       }
       
    }
    createModuleArray(){
        const r = /\d/
        const reg = /\>([^<]+)</
        const obj = {
            id: 0,
            text: ''
        }
        if(this.backgroundModule instanceof Module){
            obj.id = r.exec(this.backgroundModule.toHTML()[0])
            obj.text = reg.exec(this.backgroundModule.toHTML()[1])
            this.modules.push(obj)
        }
        if(this.clicksModule instanceof Module){
            obj.id = r.exec(this.clicksModule.toHTML()[0])
            obj.text = reg.exec(this.clicksModule.toHTML()[1])
            this.modules.push(obj)
        }
        if(this.shapeModule instanceof Module){
            obj.id = r.exec(this.shapeModule.toHTML()[0])
            obj.text = reg.exec(this.shapeModule.toHTML()[1])
            this.modules.push(obj)
        }    
    }

}