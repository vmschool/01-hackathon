import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomFigure } from "./modules/randome.figure";
import { RandomSound } from "./modules/randomsound.module";
import { BackgroundModule } from "./modules/background.module";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule());
contextMenu.add(new RandomFigure());
contextMenu.add(new RandomSound());
contextMenu.add(new BackgroundModule());
