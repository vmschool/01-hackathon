import { Popup } from '../components/popup';
import { Module } from '../core/module';

export class CocktailModule extends Module {
    #urls;
    #popup;

    constructor() {
        super('cocktailModule', 'Gey daily cocktail');
        this.#urls = {
            randomCocktail: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
        };
        this.#popup = new Popup();
    }

    #createLoader() {
        const loader = document.createElement('div');
        loader.className = 'lds-ripple';
        loader.innerHTML = '<div></div><div></div>';

        return loader;
    }

    #generateCard(data) {
        const { strDrinkThumb, strDrink, strInstructions } = data;

        const ingridients = [];
        const quantity = [];
        for (let i = 1; i <= 15; i++) {
            if (data[`strIngredient${i}`]) {
                ingridients.push(data[`strIngredient${i}`]);
                quantity.push(data[`strMeasure${i}`]);
            } else {
                break;
            }
        }

        const cocktailCard = document.createElement('div');
        cocktailCard.className = 'cocktail-box';

        const img = document.createElement('img');
        img.src = strDrinkThumb;
        img.alt = strDrink + ' image';
        img.className = 'cocktail-box__image';

        const cocktailInfo = document.createElement('div');
        cocktailInfo.className = 'cocktail-box__info';

        const cocktailName = document.createElement('p');
        cocktailName.textContent = `Coctail name: ${strDrink}`;

        const ingridientsElem = document.createElement('p');
        ingridientsElem.innerText = 'Ingridients:';

        cocktailInfo.append(cocktailName);
        ingridients.forEach((item, i) => {
            const ingridient = document.createElement('p');
            ingridient.textContent = `${item}: ${quantity[i]}`;
            cocktailInfo.append(ingridient);
        });
        const instructions = document.createElement('p');
        instructions.textContent = strInstructions;

        const generateButton = document.createElement('button');
        generateButton.className = 'cocktail-card__button';
        generateButton.type = 'button';
        generateButton.innerText = 'Generate new';

        cocktailInfo.append(instructions);
        cocktailCard.append(img, cocktailInfo, generateButton);

        return cocktailCard;
    }

    async #generateNew() {
        try {
            this.#popup.update(this.#createLoader().outerHTML);
            const cocktail = await this.#fetchRandomCocktail();
            const generatedHTML = this.#generateCard(cocktail).outerHTML;
            this.#popup.update(generatedHTML);
            const generateButton = document.querySelector('.cocktail-card__button');
            generateButton.addEventListener('click', this.#generateNew.bind(this));
        } catch (error) {
            console.log(error);
        }
    }

    async #fetchRandomCocktail() {
        try {
            const response = await fetch(this.#urls.randomCocktail);
            const data = await response.json();
            const cocktail = data.drinks[0];
            return cocktail;
        } catch (error) {
            console.log(error);
        }
    }

    async trigger() {
        try {
            this.#popup.setContent(this.#createLoader());
            this.#popup.open();
            const cocktail = await this.#fetchRandomCocktail();
            this.#popup.setHeader(`Today's cocktail for you`);
            this.#popup.setContent(this.#generateCard(cocktail).outerHTML);
            this.#popup.update();
            const generateButton = document.querySelector('.cocktail-card__button');
            generateButton.addEventListener('click', this.#generateNew.bind(this));
        } catch (error) {
            console.log(error);
        }
    }
}
