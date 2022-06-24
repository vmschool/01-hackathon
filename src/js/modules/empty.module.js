import Module from '../core/module';

export default class EmptyModule extends Module {
  constructor(text) {
    super('empty', text);
  }

  trigger() {
    console.log('empty module work!!');
  }
}
