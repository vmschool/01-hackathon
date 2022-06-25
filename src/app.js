import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomSound } from "./modules/randomsound.module";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule());
contextMenu.add(new RandomSound());
