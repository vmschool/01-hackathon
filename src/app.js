import "./styles.css";

import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";

const contextMenu = new ContextMenu();
contextMenu.add(ShapeModule);

// добавляем свои модули тут через contextMenu.add(moduleName)

contextMenu.el.addEventListener("click", (ev) => {
  const { target: item } = ev;
  if (!item.dataset?.type) return;
  switch (
    item.dataset.type
    // вызываем тригер по типу, например
    // case moduleName.type:
    //   moduleName.trigger();
    //   break;
  ) {
  }
  contextMenu.close();
});
