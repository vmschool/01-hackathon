import { Module } from "../core/module";
import { getArea } from "../utils";

export default class BeLikeBillModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const area = getArea();
        const image = document.createElement('img');
        image.classList.add('img__bill')
        image.src = "https://belikebill.ga/billgen-API.php?default=1&name=Bill&sex=m";
        area.append(image);


        let timeOutId;

        image.addEventListener("mouseover", () => {
            clearTimeout(timeOutId);
        });

        image.addEventListener("mouseleave", () => {
            timeOutId = setTimeout(() => {
                image.remove();
                window.location.reload(false);
            }, 2500);
        });
    }
}
