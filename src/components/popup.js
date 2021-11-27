import './popup.css';

export class Popup {
    #header;
    #content;

    constructor(content = null, header = '') {
        this.#content = content;
        this.#header = header;
    }

    setContent(content) {
        this.#content = content;
    }

    setHeader(header) {
        this.#header = header;
    }

    close() {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    open() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const popup = document.createElement('div');
        popup.className = 'popup';

        const header = document.createElement('div');
        header.className = 'popup__header';

        const h2 = document.createElement('h2');
        h2.className = 'popup__header-text';
        h2.textContent = this.#header;

        const closeBtn = document.createElement('a');
        closeBtn.className = 'popup__close';
        closeBtn.href = '#';
        closeBtn.innerHTML = '&times;';

        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.close();
        });

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                this.close();
            }
        });

        const contentElem = document.createElement('div');
        contentElem.className = 'popup__content';
        contentElem.append(this.#content);

        header.append(h2, closeBtn);
        popup.append(header, contentElem);
        overlay.append(popup);

        document.body.append(overlay);
        return;
    }
}
