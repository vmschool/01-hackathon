import './styles.css';
import ContextMenu from './menu';
import BackgroundModule from './modules/background.module';
import ClicksModule from './modules/clicks.module';
import ShapeModule from './modules/shape.module';
import SoundModule from './modules/sound.module';
import TimerModule from './modules/timer.module';
import MessageModule from './modules/message.module';
import AboutDevsModule from './modules/about-devs.module';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const contextMenu = new ContextMenu('#menu');

const contextMenuModules = [
	new ClicksModule('Аналитика кликов за 3 секунды'),
	new BackgroundModule('Поменять фон'),
	new ShapeModule('Создать фигуру'),
	new SoundModule('Воспроизвести звук'),
	new TimerModule('Запустить таймер'),
	new MessageModule('Создать сообщение'),
	new AboutDevsModule('О разработчиках')
];

contextMenuModules.forEach(contextMenuModule => {
	const contextMenuItemHtml = contextMenuModule.toHTML();
	contextMenu.add(contextMenuItemHtml);
});

document.body.addEventListener('contextmenu', (event) => {
	contextMenu.open(event);
});

document.body.addEventListener('click', (event) => {
	contextMenu.close();
	if (event.target.classList.contains('menu-item')) {
		contextMenuModules.forEach(contextMenuModule => {
			if (contextMenuModule.type === event.target.dataset.type) {
				contextMenuModule.trigger();
			}
		});
	}
});
