import "./styles.css";
import { ContextMenu } from "./menu";
import { ClicksModule } from "./modules/clicks.module";

// const menu = new ContextMenu();
// const counterClick = new ClicksModule("counterClick", "text");
// // console.log(menu);
// // export default menu;
// const menuList = [counterClick, counterClickvvv];
// // hi.render();
// menuList.forEach((el) => el.addItemInMenuList());
// menu.render();

const menu = new ContextMenu();
const counterClick = new ClicksModule(
  "counterClick",
  "Аналитика кликов (за 5 секунд)"
);

menu.add(counterClick);

menu.render();
