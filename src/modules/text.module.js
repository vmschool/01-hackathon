
import {Module} from "../core/module";
import { getRandomColor, random } from "../utils";


export class RandomWords extends Module {
	constructor(type, text) {
        super(type, text);
    }

	trigger() {
		const words = [
			{
				text:
					"Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.",
				name: "Mosher’s Law of Software Engineering"
			},
			{
				text:
					"Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода.",
				name: "Christopher Thompson"
			},
			{
				text:
					"Иногда лучшие программы создаются на бумажке. Запрограммировать их — второстепенная вещь.",
				name: "Max Kanat-Alexander"
			},
			{
				text:
					"Программирование — это разбиение чего-то большого и невозможного на что-то маленькое и вполне реальное.",
				name: "Jazzwant"
			},
			{
				text: "Простота — залог надежности.",
				name: "Edsger W. Dijkstra"
			},
			{
				text: "Работает? Не трогай.",
				name: "Любой программист"
			},
			{
				text:
					"Молодые специалисты не умеют работать, а опытные специалисты умеют не работать.",
				name: "Alexander Golov"
			},
			{
				text: "Преждевременная оптимизация — корень всех зол.",
				name: "Donald Knuth"
			},
			{
				text:
					"Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.",
				name: "Robert Martin"
			},
			{
				text:
					"Для каждой сложной задачи существует решение, которое является быстрым, простым и неправильным.",
				name: "H. L. Mencken"
			},
			{
				text:
					"Тестирование не позволяет обнаружить такие ошибки, как создание не того приложения.",
				name: "Steve McConnell"
			},
			{
				text:
					"Ходить по воде и разрабатывать программы, следуя спецификации, очень просто… если они заморожены.",
				name: "Edward V Berard"
			},
			{
				text: "Нельзя доверять коду, который вы не написали полностью сами.",
				name: "Ken Thompson"
			},
			{
				text:
					"Модульность — фундаментальный аспект всех успешно работающих крупных систем.",
				name: "Bjarne Stroustrup"
			},
			{
				text: "Программирование — это не наука, а ремесло.",
				name: "Richard Stallman"
			}
		];

        const randomNumber = random(0, words.length);

		const element = document.createElement("div");
		element.className = "words-container";
		element.style.cssText = `
            position: fixed;
            width: 200px;
            height: auto;
            border: 1px solid black;
            border-radius: 5px;
            box-shadow: -7px -7px ${getRandomColor()};
            left: ${random(20, 1250)}px;
            top: ${random(20, 400)}px;
        `;

        element.innerHTML = `
            <blockquote>
                <p style='padding: 10px'>${words[randomNumber].text}</p>
                <cite 
                    style = '
                            display: block; 
                            text-align: right; 
                            margin-top: 10px; 
                            margin-left: auto; 
                            margin-right: 15px; 
                            margin-bottom: 5px;
                        '> ${words[randomNumber].name}</cite>
            </blockquote>    
        `;

		document.body.append(element);
		const deleteElement = document.querySelector(".words-container");
		if (deleteElement) {
			const timerId = setInterval(() => {
				deleteElement.remove();
				clearInterval(timerId);
			}, 2500);		
		}

		
			
	}
}
