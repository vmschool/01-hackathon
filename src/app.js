import "./styles.css";

// Для разработки и теста
import { MessageModule } from "./modules/message.modul";
const message = new MessageModule("a", "b");
message.trigger();
// --------------------------------
