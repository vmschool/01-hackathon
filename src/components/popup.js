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

    update(content = this.#content, header = this.#header) {
        this.setHeader(header);
        this.setContent(content);

        const overlay = document.querySelector('.overlay');

        const popupHeader = overlay.querySelector('.popup__header-text');
        popupHeader.textContent = this.#header;

        const popupContent = overlay.querySelector('.popup__content');
        popupContent.innerHTML = this.#content;
    }

    close(event) {
        let popup = event.target.closest('.popup');
        popup.remove();
        popup = document.querySelector('.popup');
        if (!popup) {
            const overlay = document.querySelector('.overlay');
            overlay.remove();
        }
    }

    open() {
        const checkContextMenuOpen = document.querySelector('.open');
        checkContextMenuOpen?.classList.remove('open');

        let overlay = document.querySelector('.overlay');

        const popup = document.createElement('div');
        popup.className = 'popup mx-auto mb-8 p-6 flex flex-col relative rounded bg-white md:w-1/3 w-full';

        const header = document.createElement('div');
        header.className = 'popup__header flex items-center justify-between mb-1';

        const h2 = document.createElement('h2');
        h2.className = 'popup__header-text text-xl';
        h2.textContent = this.#header;

        const closeBtn = document.createElement('a');
        closeBtn.className = 'popup__close text-gray-700 hover:text-blue-400 transition-all';
        closeBtn.href = '#';
        closeBtn.innerHTML = '&times;';

        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.close(event);
        });

        const contentElem = document.createElement('div');
        contentElem.className = 'popup__content leading-normal';
        contentElem.append(this.#content);

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'overlay px-10';
        }

        header.append(h2, closeBtn);
        popup.append(header, contentElem);
        overlay.append(popup);

        document.body.append(overlay);
        return;
    }
}
