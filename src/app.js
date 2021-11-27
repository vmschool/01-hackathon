import "./styles.css";

// Для разработки и теста
import { BackgroundModule } from "./modules/background.module";
const background = new BackgroundModule("a", "b");
background.trigger();
// --------------------------------
