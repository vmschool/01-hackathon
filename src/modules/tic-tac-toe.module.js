import { Module } from '../core/module'

export class TicTacToeModule extends Module {
    #area;
    #el;
    #moveNumber;
    #isGameContinues;
    #messageBox;

    constructor(type, text) {
        super(type, text);
        this.#moveNumber = 1;
        this.#isGameContinues = false;
        this.#el = document.createElement('div');
        this.#el.className = 'tic-tac-toe-container';
        const header = document.createElement('div');
        header.className = 'tic-tac-toe-header';
        header.textContent = 'Крестики-нолики';
        this.#el.append(header);
        this.#area = {
            arr:
                [
                    undefined, undefined, undefined,
                    undefined, undefined, undefined,
                    undefined, undefined, undefined,
                ],
            el: document.createElement('div')
        }
        this.#area.el.className = 'tic-tac-toe-area';
        const areaWrapper = document.createElement('div');
        areaWrapper.className = 'tic-tac-toe-wrapper';
        areaWrapper.append(this.#area.el)
        this.#el.append(areaWrapper);
        this.#messageBox = document.createElement('div');
        this.#messageBox.className = 'tic-tac-toe-message-box';
        areaWrapper.append(this.#messageBox)
        const buttons = document.createElement('div');
        buttons.className = 'tic-tac-toe-buttons';
        const resetButton = document.createElement('button');
        resetButton.className = 'tic-tac-toe-reset-button';
        resetButton.textContent = 'Начать заново';
        resetButton.addEventListener('click', () => {
            this.#resetGame();
        })
        buttons.append(resetButton);
        const closeButton = document.createElement('button');
        closeButton.className = 'tic-tac-toe-close-button';
        closeButton.textContent = 'Закончить игру';
        closeButton.addEventListener('click', () => {
            this.#closeArea();
        })
        buttons.append(closeButton);
        this.#el.append(buttons);
    }

    #showArea() {
        for (let id = 0; id < 9; id++) {
            const box = document.createElement('div');
            box.className = 'tic-tac-toe-area-box';
            box.dataset.id = String(id);
            this.#area.el.append(box);
        }
        document.body.append(this.#el);
    }

    #closeArea() {
        this.#el.parentNode.removeChild(this.#el);
    }

    #resetGame() {
        this.#isGameContinues = true;
        this.#area.arr = [
            undefined, undefined, undefined,
            undefined, undefined, undefined,
            undefined, undefined, undefined,
        ];
        this.#moveNumber = 1;
        while (this.#area.el.firstChild) {
            this.#area.el.removeChild(this.#area.el.firstChild)
        }
        this.#showArea();
    }

    #checkForWinner() {
        const victoryRule = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < victoryRule.length; i++) {
            if (victoryRule[i].every(id =>
                this.#area.arr[id] === 'X'
            )) {
                this.#isGameContinues = false;
                return 'Победили крестики!';
            } else if (victoryRule[i].every(id =>
                this.#area.arr[id] === 'O'
            )) {
                this.#isGameContinues = false;
                return 'Победили нолики!';
            }
        }
        if (this.#area.arr.every(boxValue => boxValue !== undefined)) {
            this.#isGameContinues = false;
            return 'Победила дружба!';
        }
        return false;
    }

    trigger() {
        this.#isGameContinues = true;
        while (this.#area.el.firstChild) {
            this.#area.el.removeChild(this.#area.el.firstChild)
        }
        this.#messageBox.textContent = '';
        this.#showArea();
        this.#area.el.addEventListener('click', (event) => {
            if (event.target.className === 'tic-tac-toe-area-box') {
                if (this.#isGameContinues === true) {
                    const box = event.target;
                    const id = Number(box.getAttribute('data-id'));
                    if (this.#area.arr[id] === undefined) {
                        const isCross = this.#moveNumber % 2 === 1;
                        box.innerHTML = (isCross) ? 'X' : 'O';
                        this.#area.arr[id] = (isCross) ? 'X' : 'O';
                        this.#moveNumber += 1;
                        const winner = this.#checkForWinner();
                        if (winner) {
                            this.#messageBox.textContent = `${winner}${this.#messageBox.textContent}`;
                        }
                    }
                }
            }
        });
    }
}