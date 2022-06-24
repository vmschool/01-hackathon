export class Menu {
  constructor(selector, menuList) {
    this.selector = document.querySelector(selector);
    this.menuList = document.querySelector(menuList);

    // document.body.addEventListener('click', event => {
    //   if (event.target.offsetParent !== this.el) {
    //     this.close()
    //   }
    // })
  }

  open() {
    this.selector.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.menuList.classList.add("open");
      this.menuList.style.left = `${event.pageX}px`;
      this.menuList.style.top = `${event.pageY}px`;
    });
  }

  close() {
    this.selector.addEventListener("click", (event) => {
      this.menuList.classList.remove("open");
    });
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`);
  }
}
