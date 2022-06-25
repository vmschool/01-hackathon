import {Module} from '../core/module'

export class TimeClickerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.trigger()
    }

    renderModal() {

        /*отрисовываем контейнер*/
        const modalBlock = document.createElement('div')
            modalBlock.style.position = 'absolute'
            modalBlock.style.top = '50%'
            modalBlock.style.left = '50%'
            modalBlock.style.marginRight = '-50%'
            modalBlock.style.transform = 'translate(-50%, -50%)'
            modalBlock.style.padding = '8%'
            modalBlock.style.borderRadius = '1em'
            modalBlock.style.background = 'rgb(236 236 239)'
            modalBlock.style.boxShadow = `
                            -15px -15px 2px -5px rgba(123,51,90,.5),
                            -15px 15px 2px -5px rgba(60,74,123,.5),
                            15px -15px 2px -5px rgba(255,0,0,.5),
                            15px 15px 2px -5px rgba(60,123,68,.5)`
            modalBlock.style.fontSize = '25px'
            modalBlock.style.userSelect = 'none'
            modalBlock.style.textAlign = 'center'

        /*блок со счетчиком кликов*/
        const clickCountBlock = document.createElement('p')
            clickCountBlock.dataset.id = 'clickCountBlock'
            clickCountBlock.style.marginTop = '10px'

        /*блок с информацией*/
        const textInfo = document.createElement('p')
            textInfo.dataset.id = 'textInfo'
            textInfo.style.fontSize = '22px'
            textInfo.style.marginTop = '12px'

        modalBlock.append(clickCountBlock)
        modalBlock.append(textInfo)

        document.body.append(modalBlock)

    }

    timeClicker() {
        const clickCountBlock = document.body.querySelector('[data-id="clickCountBlock"]')
        const textInfo = document.body.querySelector('[data-id="textInfo"]')

        /*проверка на рекорд через localStorage*/
        const checkRecord = (result) => {

            const storageGet = () => localStorage.getItem('clicks')
            const storageSet = () => localStorage.setItem('clicks', result)

                if (!storageGet()) {
                    storageSet()
                    return `Ваш результат: ${result}.`
            } else
                if (storageGet() < result) {
                    storageSet()
                    return `Новый рекорд: ${result}!`
            } else
                if (storageGet() > result) {
                    return `Ваш результат: ${result}. Текущий рекорд: ${storageGet()}.`
                }
        }

        /*изначальные условия*/
        let result = 0
        const countResult = () => result++
        window.addEventListener('click', countResult) //добавляем слушателя на кол-во кликов

        let secsToClicks = 14 //заданные секунды на клики
        let secsCountdown = 4 //обратный отсчет

        const timerCountdown = setInterval(timer, 1000) //интервал в секунду

        /*Основная логика таймера*/
        function timer() {

            --secsToClicks //уменьшаем раз в секунду
            --secsCountdown

            /*если идет обратный отсчет*/
            if (secsCountdown > 0) {
                    clickCountBlock.innerText = 'Приготовься!'
                    textInfo.innerText = `Старт через ${secsCountdown} сек.`
            //=========
            } else
            /*если обратный отсчет = 0 */
                if (secsCountdown === 0) {
                    result = 0 //обнуляем счетчик перед началом

                    clickCountBlock.innerText = `Количество кликов: ${result}`
                    textInfo.innerText = `Жми! Осталось ${secsToClicks} сек.`

                    window.addEventListener('click', event => { //добавляем обновление блока по клику
                        clickCountBlock.innerText = `Количество кликов: ${result}`
                    })
            //=========
            } else
            /*10-ти секундный отрезок на клики*/
                if (secsCountdown <= 0 && secsToClicks > 0) {
                    textInfo.innerText = `Жми! Осталось ${secsToClicks} сек.`
            //=========
            } else
            /*окончание*/
                if (secsToClicks <= 0) {
                    window.removeEventListener('click', countResult) // убираем слушателя на счетчик кликов
                    clearInterval(timerCountdown) // убираем интервал

                    clickCountBlock.innerText = `Количество кликов: ${result}`
                    textInfo.innerText = `${(checkRecord(result))}` // проверяем на рекорд
                }
        }
    }

    trigger() {

        this.renderModal()
        this.timeClicker()
    }
}