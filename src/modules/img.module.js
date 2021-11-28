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
      randomDiv.classList.add('randomDiv');
      const img = document.createElement("img");
      img.src = url;  
      document.body.append(randomDiv);
      randomDiv.append(img);
    
      return randomDiv;
    }

    this.imgArray.forEach(smile => {
      const block = createSmile(smile);
      const imgg = document.querySelector('img')
      block.style.top = `${random(0, document.body.scrollHeight)}px`;
      block.style.left = `${random(0, document.body.scrollWidth)}px`;
      imgg.style.width = `${random(0, 30)}px`;


      document.body.append(block);
    });
    
    

  }
}