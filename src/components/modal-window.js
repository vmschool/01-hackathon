export default class ModalWindow {
  constructor(content) {
    this.modal = document.createElement('div');
    this.modal.className = 'modal-window';
    document.body.append(this.modal);
    this.content = content;
  }

  open() {
    this.modal.classList.add('open');
  }
}
