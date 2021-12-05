export class Hint {
  #hints;
  #titleHint;

  constructor() {
    this.#titleHint = 'After running the app, click right mouse button to open context menu';
    this.#hints = [
      'Background Switcher - changes background color',
      'Click Counter - counts clicks',
      'Shape Generator - generates random shapes',
      'Weather - shows weather in your city',
      'Quote Generator - load random quote',
      'Timer - set timer',
      'Guess Game - try to guess number',
      'Daily Cocktail - get random cocktail recipe',
    ];
  }

  show() {
    const hintContainer = document.createElement('div');
    hintContainer.className = 'fixed top-2 left-2 opacity-80 hover:opacity-100 transition-all max-w-xs';

    const icon = document.createElement('span');
    icon.className = 'rounded-full w-8 h-8 bg-transparent text-base text-white flex justify-center cursor-help items-center border-white border-4 font-bold';
    icon.textContent = 'i';

    const content = document.createElement('div');
    content.className = 'hidden rounded bg-white p-2 mt-2';

    const hintTitle = document.createElement('h5');
    hintTitle.className = 'pt-2 text-gray-700';
    hintTitle.textContent = this.#titleHint;

    const list = document.createElement('ul');
    list.className = 'border-b-2 border-gray-700 pb-2 text-gray-700'

    this.#hints.forEach((hint) => {
      const item = document.createElement('li');
      item.textContent = hint;
      item.className = '';

      list.append(item);
    });

    hintContainer.addEventListener('mouseenter', () => {
      content.classList.remove('hidden');
    });

    hintContainer.addEventListener('mouseleave', () => {
      content.classList.add('hidden');
    });

    content.append(list, hintTitle);

    hintContainer.append(icon, content);
    document.body.prepend(hintContainer);
  }
}
