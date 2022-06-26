import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomSound } from "./modules/randomsound.module";
import { Countdown } from "./modules/countdown-module";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule());
contextMenu.add(new RandomSound());
contextMenu.add(new Countdown());
