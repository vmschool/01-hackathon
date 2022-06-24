//#region Import
import './styles.css';
import { ContextMenu } from './menu';
import { MENU_SELECTOR, ELEMENTS } from './globals';
import { ElementsFactory, handleMenuClick } from './utils';
//#endregion

//#region Constants
const menu = new ContextMenu(MENU_SELECTOR);
const menuHTML = document.querySelector(MENU_SELECTOR);
const menuModules = ElementsFactory.createInstances(ELEMENTS);
//#endregion

//#region ExecCode
Object.values(menuModules).forEach((module) => menu.add(module));
//#endregion

//#region Listners
document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event);
});

menuHTML.addEventListener('click', (event) =>
  handleMenuClick(event, menuModules, menuHTML)
);
//#endregion
