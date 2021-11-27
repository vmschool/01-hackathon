import { createInitialGeneration, createNextGen } from "../utils";
import { Module } from "../core/module";
const initialGeneration = createInitialGeneration();

export class GameOfLife extends Module {
  constructor(type, text) {
    super(type, text);
    this.currGen = initialGeneration;
    this.world = document.createElement("div");
    this.world.className = "world";
    this.container = document.querySelector(".module-container");
  }

  createWorld() {
    this.world.innerHTML = "";
    const tblHTML = document.createElement("table");
    tblHTML.setAttribute("id", "worldgrid");
    const currGen = this.currGen;
    currGen.forEach((row, roi) => {
      let tr = document.createElement("tr");
      tr.className = "world__table";
      row.forEach((col, coi) => {
        let cell = document.createElement("td");
        cell.className = "cell";
        if (col.isAlive) {
          cell.setAttribute("id", `${roi}_${coi}`);
          cell.classList.add("alive");
        } else {
          cell.setAttribute("id", `${roi}_${coi}`);
          cell.classList.add("dead");
        }
        tr.append(cell);
      });
      tblHTML.append(tr);
    });
    this.world.append(tblHTML);
    this.container.append(this.world);
    return this.world;
  }

  trigger() {
    this.createWorld();
    this.startWorld();
    setInterval(() => {
      this.updateWorld();
    }, 1000);
  }

  startWorld() {
    this.world.addEventListener("mouseover", (event) => {
      const { target } = event;
      const makeAlive = (cell) => {
        if (target.classList.contains("dead")) {
          cell.classList.remove("dead");
          cell.classList.add("alive");
          const id = cell.id.split("_");
          const row = Number(id[0]);
          const col = Number(id[1]);
          this.currGen[row][col].isAlive = true;
        } else if (target.classList.contains("alive")) {
          cell.classList.remove("alive");
          cell.classList.add("dead");
          const id = cell.id.split("_");
          const row = Number(id[0]);
          const col = Number(id[1]);
          this.currGen[row][col].isAlive = false;
        }
      };
      if (target.classList.contains("cell")) {
        makeAlive(target);
      }
    });
  }
  updateWorld() {
    const blankGen = initialGeneration;
    const nextGen = createNextGen(this.currGen, blankGen);
    this.currGen = nextGen;
    nextGen.forEach((row, roi) => {
      row.forEach((col, coi) => {
        let cell = document.getElementById(`${roi}_${coi}`);
        cell.classList.remove("dead", "alive");
        if (col.isAlive) {
          cell.classList.add("alive");
        } else {
          cell.classList.add("dead");
        }
      });
    });
  }
}
