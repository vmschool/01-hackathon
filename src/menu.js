import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = {};
    this.add = this.add.bind(this);
  }

  close() {
    document.getElementById("menu").style.display = "none";
  }

  open(e) {
    e.preventDefault();
    if (document.getElementById("menu").style.display != "block") {
      let newmenu = document.getElementById("menu");
      newmenu.style.display = "block";
      newmenu.style.left = e.pageX + "px";
      newmenu.style.top = e.pageY + "px";
    }
    let newmenu = document.getElementById("menu");
    newmenu.addEventListener("click", (e) => {
      let fn = e.target.dataset.type;
      this.modules[fn].trigger();
    });
  }

  add(menuItem) {
    this.modules = {
      ...this.modules,
      [menuItem.type]: menuItem.addItemInMenuList(),
    };
  }
  render() {
    const getMenu = document.getElementById("menu");
    getMenu.innerHTML = "";
    Object.keys(this.modules).forEach((el) =>
      getMenu.insertAdjacentHTML("afterbegin", this.modules[el].text())
    );

    document.onclick = this.close;
    document.oncontextmenu = this.open.bind(this);
  }
}
