import { Module } from '../core/module';
import { random } from '../utils';
import { Popup } from '../components/popup';
export class QuotesModule extends Module {
    #popup
    constructor() {
        super('quotesModule', 'Random Quote');
        this.#popup = new Popup(null, '');
    }
    async trigger() {
        try {
            const request = await fetch('http://type.fit/api/quotes');
            const result = await request.json();
            const { text, author } = result[random(0, result.length)];
            this.#popup.setHeader('Remember this');
            this.#popup.setContent(this.createQuote(text, author));
            this.#popup.open();
        } catch (error) {
            console.log(error);
        }
    }
    createQuote(text, author) {
        const blockQuote = document.createElement('blockquote');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const cite = document.createElement('cite');
        blockQuote.className = 'quote';
        cite.className = 'author';
        p.textContent = text;
        cite.textContent = author;
        span.append(cite);
        blockQuote.append(p, span);
        return blockQuote;
    }
}
