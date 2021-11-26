import './styles.css';
import { ContextMenu } from './menu';

const menu = new ContextMenu();
document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log(event.target);
    menu.click()
    menu.open()
})
