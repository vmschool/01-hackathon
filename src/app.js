import "./styles.css";

// Для разработки и теста
import { ClicksModule } from "./modules/clicks.module.js";
const clic = new ClicksModule("a", "b");
clic.trigger();
// --------------------------------
