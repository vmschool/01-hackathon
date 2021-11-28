import { Module } from '../core/module';
import { random } from '../utils';
import { Popup } from '../components/popup';
export class QuotesModule extends Module {
    constructor() {
        super('quotesModule', 'Random Quote');
    }
    async trigger() {
        try {
            const URL = require('../api/keys.json').quotesUrl;
            const request = await fetch(URL);
            const result = await request.json();
            const { text, author } = result[random(0, result.length)];
            const popup = new Popup(this.createQuote(text, author), 'Remember this!');
            popup.open();
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
