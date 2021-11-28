
import { Module } from '../core/module'

export class RandomtextModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.quotes = [];
        this.quoteHtml = this.makeQuoteHtml();
        this.timerId = null;
    }

    trigger() {
        this.removeQuote();
        this.stopTimerOfQuote();
        this.showQuote(); 
    }

    async showQuote() {
        const q = await this.popQuote();
        this.setQuoteToHtml(q)
        document.body.append(this.quoteHtml);
        this.setTimerForQuote();
        this.fadeIn();
    }

    setTimerForQuote() {
        this.quoteHtml.childNodes[1].innerHTML = 8;
        this.timerId = setInterval(() => this.updateTimerForQuote(), 1000);
    }

    updateTimerForQuote() {
        const count = --this.quoteHtml.childNodes[1].innerHTML;
        if (!count) {
            this.fadeOut();
        } else if (count < 0) {
            this.stopTimerOfQuote();
            this.removeQuote();
        }
    }

    setQuoteToHtml(quote) {
        this.quoteHtml.firstChild.innerHTML = quote.body;
        this.quoteHtml.lastChild.innerHTML = `- ${quote.author}`;
    }

    stopTimerOfQuote() {
        clearInterval(this.timerId);
    }

    removeQuote() {
        if (this.quoteHtml.parentElement) {
            this.quoteHtml.remove();
        }
    }

    fadeOut() {
        this.quoteHtml.style.opacity = 0;
        this.quoteHtml.style.left = "-20em";
    }

    fadeIn() {
        setTimeout(() => {
            this.quoteHtml.style.opacity = 1;
            this.quoteHtml.style.left = "0"
        }, 100);
    }

    makeQuoteHtml() {
        const body = document.createElement("div");
        Object.assign(body.style, {
            textAlign: "center",
            padding: "1em",
            fontSize: "large",
            width: "20em",
            position: "absolute",
            left: "-20em",
            opacity: "0",
            top: "0",
            border: "1px solid black",
            margin: "1em",
            transition: "opacity 0.5s ease, left 0.5s ease" 
        });
        
        const p = document.createElement("p");

        const h3 = document.createElement("h3");
        Object.assign(h3.style, {
            marginTop: "0.5em",
            fontSize: "italic",
            float: "right" 
        });

        const h3Timer = document.createElement("h3");
        Object.assign(h3Timer.style, {
            marginTop: "0.5em",
            fontSize: "italic",
            float: "left"
        });

        body.append(p);
        body.append(h3Timer);
        body.append(h3);
        
        return body;
    }

    async popQuote() {
        if (!this.quotes.length) {
            this.quotes = await this.getQuotes();
        }

        return this.quotes.pop();
    }

    async getQuotes() {
        const URL = 'https://favqs.com/api/quotes/';
        try {
            const response = await fetch(URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token token="0bde6c397d6772b212d18cf15c368498"'
                }
            });
            const data = await response.json();
        
            return data.quotes.map((q) => {  
                return {
                    author: q.author,
                    body: q.body
                };
            });
        } catch(error) {
            return [{
                author: "Dmytro Lisnenko",
                body: "Server is down("
            }];
        }
    }   
}



    