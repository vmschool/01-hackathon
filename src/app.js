import "./styles.css";
import { ContextMenu } from "./menu";
import { counterClick } from "./modules/clicks.module";
import { counterClickvvv } from "./modules/shape.module";
import { playRandomSound } from "./modules/randomSound.module";

const menu = new ContextMenu();

// console.log(menu);
export default menu;
const menuList = [counterClick, counterClickvvv, playRandomSound];
// hi.render();
menuList.forEach((el) => el.addItemInMenuList());
menu.render();

