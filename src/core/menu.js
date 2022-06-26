export class Menu {
  constructor(selector, menuList) {
    this.selector = document.querySelector(selector);
    this.menuList = document.querySelector(menuList);
  }

  open() {
    this.selector.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const widthScreenWindow = window.screen.width;
      const heightScreenWindow = window.screen.height;
      if (widthScreenWindow - event.pageX < 100) {
        console.log(widthScreenWindow - event.pageX);
        this.menuList.classList.add("open");
        this.menuList.style.left = `${event.pageX - 160}px`;
      } else {
        this.menuList.classList.add("open");
        this.menuList.style.left = `${event.pageX}px`;
      }

      if (heightScreenWindow - event.pageY < 250) {
        console.log(event.pageY, heightScreenWindow);
        this.menuList.style.top = `${event.pageY - 300}px`;
      } else {
        this.menuList.style.top = `${event.pageY}px`;
      }
    });
  }

  close() {
    this.selector.addEventListener("click", (event) => {
      this.menuList.classList.remove("open");
    });
  }
}
