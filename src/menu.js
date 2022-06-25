import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    modules = [];
    

    constructor(selector){
      
        super(selector)

        this.el.addEventListener('click', (event) => {
            const type = event.target.dataset.type;

            if(type){
                const check = this.modules.find((m) => m.type === type);
                check.trigger();
                this.close();
            }
        })

        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.open(event.clientX, event.clientY);
        })
    }
    open(x=0, y=0){
        
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;
        this.el.classList.add('open');
    
    }

    close(){

        this.el.classList.remove('open');
    }

    add(module){
       this.modules.push(module);
       this.el.insertAdjacentHTML('beforeend', module.toHTML());
    }
}

