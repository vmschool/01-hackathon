import './styles.css';
import { ContextMenu } from "@/context_menu/menu";
const contextMenu = new ContextMenu();

contextMenu.add();
contextMenu.open();
contextMenu.trigger()