import { createCustomContainer, addHandleClick, listHandleClick } from '../utils'
export default class Message {
    constructor() {
        this.container = createCustomContainer()
        this.resourses = [
            {
                id: 1,
                name: 'MDN',
                ref: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Language_Resources',
                description: ' Бесплатный ресурс по WEB технологиям.',
                color: 'rgb(230,230,250)'
            },
            {
                id: 2,
                name: 'javascript.ru',
                ref: 'https://learn.javascript.ru/',
                description: 'Учебник современного JavaScript.',
                color: 'rgb(255,192,203)'
            },
            {
                id: 3,
                name: 'indigo',
                ref: 'https://idg.net.ua/blog/uchebnik-css',
                description: 'Учебник по HTML и CSS.',
                color: 'rgb(102,205,170)'
            },
            {
                id: 4,
                name: 'Владилен Минин',
                ref: 'https://www.youtube.com/c/VladilenMinin',
                description: 'Канал на тему изучения разработки.',
                color: 'rgb(255,160,122)'
            },
            {
                id: 5,
                name: 'icomoon',
                ref: 'https://icomoon.io/',
                description: 'Сервис для создания иконочных шрифтов.',
                color: 'rgb(255,239,213)'
            },
            {
                id: 6,
                name: 'Result.School',
                ref: 'https://www.vladilen.ru/',
                description: 'Школа по изучению WEB разработки.',
                color: 'rgb(176,196,222)'
            },
        ]
    }
    renderItem() {
        if (document.querySelector('.closer')) {
            addHandleClick(this.resourses, this.container)
        }

    }
    renderList() {
        if (document.querySelector('.closer')) {
            listHandleClick(this.resourses, this.container)
        }


    }
    render() {
        if (document.querySelector('.closer')) {
            document.querySelector('.closer').addEventListener('click', () => {
                this.container.remove()
                document.querySelector('.buttons-custom').remove()
            })
            this.renderItem()
            this.renderList()
            for (let i = 0; i < 6; i++) {
                document.querySelector('.add').click()
            }

        }

    }
}