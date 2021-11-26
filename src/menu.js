import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    click() {
        console.log('Context menu');
    }
    open() {
        console.log('Open Menu')
    }
}