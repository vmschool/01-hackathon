import "./styles.css";

import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { RandomSound } from "./modules/randomsound.module";
import { ClicksModule } from "./modules/clicks.module";
import { MessageModule} from "./modules/message.module";

const contextMenu = new ContextMenu();

contextMenu.add(new TestModule());
contextMenu.add(new RandomSound());
contextMenu.add(new ClicksModule());
contextMenu.add(new MessageModule());
