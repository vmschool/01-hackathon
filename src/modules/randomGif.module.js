import {Module} from '../core/module'

export class RandomGifModule extends Module {
    constructor(type = 'randomGifModule', text = 'Случайная гифка', stackable = false) {
        super(type,text);
    }
    
    #toggleLoader( location ) {
        const loaderSpan = document.querySelector("span#loader")
        if ( loaderSpan === null ){
            const loader = document.createElement("span")
            loader.id = "loader"
            loader.textContent = "Загрузка.."
            location.append( loader )
        } else {
            loaderSpan.setAttribute('hidden', '')
        }
    }

    async #getGif(holderStr) {
        const loaderNode = document.querySelector(holderStr)
        this.#toggleLoader(loaderNode)
        const giphy  = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            apiKey: "b8XotZjP2DgGNvh8lGZ5Id7JFPcBcwjF",
            tag: "fail",
            type: "random",
            rating: "pg-13"
        };
        
        const URL = encodeURI(
            giphy.baseURL +
                giphy.type +
                "?api_key=" +
                giphy.apiKey +
                "&tag=" +
                giphy.tag +
                "&rating=" +
                giphy.rating
        );

        try{
            const response = await fetch(URL)
            const result = await response.json()
            return result.data.images.original.url
            
        } catch(error) {
            console.log('error', error)
        } finally {
            this.#toggleLoader(loaderNode)
        }
    }

    async #renderMessage(){
        if ( document.querySelector('.gif-wrapper') ){
            const gifWrapper = document.querySelector('.gif-wrapper')
            gifWrapper.innerHTML = ''
        } else {
            const gifWrapper = document.createElement('div')
            gifWrapper.style.bottom = '0px'
            gifWrapper.style.left = '0px'
            gifWrapper.className = 'gif-wrapper'
            document.body.append( gifWrapper )
        }

        const gifWrapper = document.querySelector('.gif-wrapper')
        const gif = document.createElement('img')
        gif.src = await this.#getGif('.gif-wrapper')
        gifWrapper.append( gif )
    }

    trigger() {
        this.#renderMessage()
    }
}