import './styles.css'

import { GameOfLife } from './modules/gol'

const gameOfLife = new GameOfLife()

document.body.append(gameOfLife.createWorld())

const currentGen = gameOfLife.startGame()
setInterval(() => {gameOfLife.updateWorld()}, 1000)