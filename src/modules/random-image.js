import { Module } from "../core/module";
import { promisesImages } from "../api/api";
import { random } from "../utils";

export class RandomModule {
  toggleLoader() {
    if (document.querySelector(".parent-loader")) {
      document.querySelector(".parent-loader").remove();
    } else {
      const parentLoader = document.createElement("div");
      parentLoader.className = "parent parent-loader";
      const childLoader = document.createElement("div");
      childLoader.className = "child child-loader lds-dual-ring";
      parentLoader.append(childLoader);
      document.body.prepend(parentLoader);
    }
  }

  trigger() {
    this.toggleLoader();
    if (document.querySelector(".random-image")) {
      document.querySelector(".random-image").remove();
    }
    const imagesPromise = promisesImages();
    imagesPromise
      .then((images) => {
        const randomNumber = random(0, images.length);
        const imageHTML = document.createElement("img");
        imageHTML.className = "random-image";
        imageHTML.src = images[randomNumber].url;
        imageHTML.style.position = 'absolute'
        imageHTML.style.zIndex = '-1'
        document.body.prepend(imageHTML);
        document.body.insertAdjacentHTML("afterbegin", `
        <i class="ic_close close_img"></i>
        `
        )
        const closer = document.querySelector('.close_img')
        closer.style.cursor = 'pointer'
        closer.addEventListener('click', () => {
          imageHTML.remove()
          closer.remove()
        }

        )
      })
      .finally(() => {
        this.toggleLoader();
      });
  }
}
