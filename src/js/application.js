export default class Application {
  constructor(moduleFactory, moduleNames, menu) {
    this.moduleFactory = moduleFactory;
    this.moduleNames = moduleNames;
    this.menu = menu;
    this.el = document.querySelector('body');
  }

  run() {
    this.fiilAndRenderMenu();
    this.setEventListeners();
  }

  fiilAndRenderMenu() {
    this.moduleNames.forEach((moduleName) => {
      this.menu.add(this.moduleFactory.createModule(moduleName));
    });

    this.menu.render(this.el);
    this.menu.close(this.el);
  }

  setEventListeners() {
    this.el.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const { clientY: top, clientX: left } = event;

      this.menu.setPosition(top, left);
      this.menu.open();
    });
  }
}
