import { Module } from "../core/module";
import { random } from "../utils";

// массив сообщений
const messages = [
	"Хуже всего приходится программистам из Microsoft. Им, бедолагам, в случае чего и обругать-то некого.",
	"Почему программисты не живут отдельно от родителей? Не хотят чтобы отключилась функция авто заполнения холодильника.",
	"Из жизни программистов: Премия в 12000$ была выплачена вчера хакеру, научившемуся сохраняться в «Сапере».",
	"Страдает программист: - Эх, никто меня кроме Google с полуслова не понимает.",
	"Я программист простой: если задача простая, то мне скучно, а если сложная — трудно и страшно, что не получится сделать.",
	" Жил-был программист и было у него два сына: Антон и Неантон.",
	"Чем отличается программист от политика? Программисту платят деньги за работающие программы.",
	"- Доктор, я себя чувствую, как C++. - Это как? - Меня никто не понимает, все боятся, и говорят, что я больше не нужен...",
	"Когда появятся беспилотные самолеты, первыми в них откажутся летать программисты.",
	"Закрой трех программистов в одной комнате и они создадут какой-нибудь проект. Закрой трех бухгалтеров - и они в 18:00 уйдут домой.",
	"Почему кошки очень любят программистов? Потому что у них руки мышами пахнут."
];

export default class MessageModule extends Module {
	constructor(text) {
    super('Message', text);
		this.container = document.createElement("div");
		this.container.className = "container-messages";
		document.body.append(this.container);
	}

	trigger() {
		//случайный выбор сообщения из массива
    const randomMessage =  messages[random(0, messages.length - 1)];
    
		//верстка блока с сообщением
		const messageBlock = document.createElement("div");
		messageBlock.textContent = randomMessage;
		messageBlock.className = "message";
		this.container.append(messageBlock);

		// Удаление блока через некоторое время
		setTimeout(function () {
			if (messageBlock) {
			messageBlock.remove();
			}
		}, 5000);
	}
}
