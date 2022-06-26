import "./styles.css";

import { ContextMenu } from "./menu";
import { RandomFigure } from "./modules/randome.figure";
import { MessageModule } from "./modules/message.module";
import { RandomSound } from "./modules/randomsound.module";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { Countdown } from "./modules/countdown.module";

const contextMenu = new ContextMenu();

contextMenu.add(new RandomFigure());
contextMenu.add(new MessageModule());
contextMenu.add(new RandomSound());
contextMenu.add(new Countdown());
contextMenu.add(new BackgroundModule());
contextMenu.add(new ClicksModule());
