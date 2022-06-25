import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomFigure } from "./modules/random.figure";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule(), new RandomFigure());
