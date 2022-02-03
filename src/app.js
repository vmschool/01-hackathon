import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';

const menu = new ContextMenu('.menu', {
  modules: [BackgroundModule],
});

menu.start();
