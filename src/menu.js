import {Menu} from './core/menu'

export class ContextMenu extends Menu {
   run(){
      this.open()
      this.close()
   }
}