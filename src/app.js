import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { AudioModule } from './modules/module-audio';
import { VideoModule } from './modules/module-video';
import { ShapeModule } from './modules/shape.module';
import { MessageModule } from './modules/message/message.module';
import { TimerModule } from './modules/timer/timer.module';
import { PrintModule } from './modules/print.module';

const menu = new ContextMenu('.menu', {
  modules: [BackgroundModule, AudioModule, VideoModule, ShapeModule, MessageModule, TimerModule, PrintModule],
});

menu.start();
