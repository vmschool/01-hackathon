export default class ModuleFactory {
  constructor(moduleClasses, moduleTexts) {
    this.moduleClasses = moduleClasses;
    this.moduleTexts = moduleTexts;
  }

  createModule(name) {
    console.log(this.moduleClasses);

    if (!(name in this.moduleClasses)) {
      throw new Error(`not found ${name} module class`);
    }

    if (!(name in this.moduleTexts)) {
      throw new Error(`not found ${name} module text`);
    }

    const text = this.moduleTexts[name];
    return new this.moduleClasses[name](text);
  }
}
