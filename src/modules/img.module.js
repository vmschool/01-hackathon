import { Module } from "../core/module";
import { random } from "../utils";

export class ImgModule extends Module {

  imgArray = ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/340px-Smiley_icon.svg.png',
  'https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635463__340.png',
  ];

  constructor(type, text) {
    super(type, text);

  }

  trigger() {

    const createSmile = (url) => {

      const randomDiv = document.createElement('div');
      randomDiv.style.top = `${random(0, document.body.scrollHeight)}px`;
      randomDiv.style.left = `${random(0, document.body.scrollWidth)}px`;
      randomDiv.style.position = "absolute";
      document.body.append(randomDiv);

      const img = document.createElement('img');
      img.src = url;
      img.style.width = `${random(15, 40)}px`;
      randomDiv.append(img);
    
      return randomDiv;
    }

    this.imgArray.forEach(smile => {

      setInterval(() => {
        const smileInHTML = createSmile(smile);
        document.body.append(smileInHTML);
      }, 100);
    });
  }
}