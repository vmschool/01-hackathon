import './styles.css';
import ContextMenu from './menu';

import Mod1 from './modules/mod1';
import Mod2 from './modules/mod2';
import Mod3 from './modules/mod3';

// const CONTEXT_MENU_EL = document.querySelector('#menu')

const contextMenu = new ContextMenu('#menu');
contextMenu.add(new Mod1, new Mod2, new Mod3);
