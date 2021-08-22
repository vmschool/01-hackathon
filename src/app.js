import "./styles.css";
import { ContextMenu } from "./menu";
import { counterClick } from "./modules/clicks.module";
import { backgroundModule } from "./modules/background.module";
import { shapeModule } from "./modules/shape.module";
import { currencyModule } from "./modules/currency.module";
import { cityModule } from "./modules/city.module";
import { jokeModule } from "./modules/joke.module";

const menu = new ContextMenu();

// console.log(menu);
export default menu;
const menuList = [counterClick, backgroundModule, shapeModule, currencyModule, cityModule, jokeModule];
// hi.render();
menuList.forEach((el) => el.addItemInMenuList());
menu.render();
