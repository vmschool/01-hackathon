import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    
    constructor( type, text ){
        super( type, text )
    }

    add( module ) {
		this.el.insertAdjacentHTML('beforeend', module.toHTML());

        const menuItems = document.querySelectorAll('.menu-item') 
        const menuItem = menuItems[menuItems.length - 1]

        menuItem.addEventListener('click', () => {
            module.trigger();
		})
	}

    open( event ){
        event.preventDefault();

        const el = document.querySelector('#menu')
		el.style.top = `${event.clientY}px`;
		el.style.left = `${event.clientX}px`;
		el.classList.add("open");
    }

    close(){
        this.el.classList.remove("open")
    }
      
}