import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { TimerModule } from "./modules/timer.module";
import { ShapeModule } from "./modules/shape.module";
import { SoundModule } from "./modules/sound.module";

import * as settings from "./constants/settings";

let contextMenu = new ContextMenu(settings.selector);
contextMenu.add(new BackgroundModule("BackgroundModule", "Изменить цвет фона"));
contextMenu.add(new ClicksModule("ClicksModule", "Статистика кликов"));
contextMenu.add(new TimerModule("TimerModule", "Cоздать таймер"));
contextMenu.add(new ShapeModule("ShapeModule", "Cоздать фигуру"));
contextMenu.add(new SoundModule("SoundModule", "Издать случайный звук"));
