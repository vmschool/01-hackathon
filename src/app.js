import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomFigure } from "./modules/randome.figure";
import { MessageModule} from "./modules/message.module";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule());
contextMenu.add(new RandomFigure());
contextMenu.add(new MessageModule());