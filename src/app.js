import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { MessageModule } from './modules/message.module';
import * as settings from './constants/settings';

const contextMenu = new ContextMenu(settings.selector);
contextMenu.add(new BackgroundModule('BackgroundModule', 'Изменить цвет фона'));
contextMenu.add(new ClicksModule('ClicksModule', 'Статистика кликов'));
contextMenu.add(new MessageModule('MessageModule', 'Вызвать сообщение'));
