import './styles.css'
import {ContextMenu} from "./menu";
import {BackgroundModule} from "./modules/background.module";
import {FigureModule} from "./modules/figure.module";
import {TicTacToeModule} from "./modules/tic-tac-toe.module";

const contextMenu = new ContextMenu('#menu')
const backgroundModule = new BackgroundModule('background-module', 'Изменить цвет заднего фона')
const figureModule = new FigureModule('figure-module', 'Создать случайную фигуру')
const ticTacToeModule = new TicTacToeModule('tic-tac-toe-module', 'Играть в крестики-нолики')

contextMenu.add(backgroundModule)
contextMenu.add(figureModule)
contextMenu.add(ticTacToeModule)
