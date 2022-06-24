import {Menu} from './core/menu'
import { randomOpenConextMenu, createItemsContextMenu, closeContextMenu } from './utils'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open() {
        randomOpenConextMenu();
    }

    close() {
        closeContextMenu();
    }

    add() {
        createItemsContextMenu();
    }
}