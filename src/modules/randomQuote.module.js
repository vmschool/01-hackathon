import { Module } from "../core/module";

const phrases = [
    'Тото, у меня такое ощущение, что мы больше не в Канзасе',
    'Да пребудет с тобой Сила!',
    'Хьюстон, у нас проблема',
    'Carpe diem. Ловите момент, мальчики. Сделайте свою жизнь экстраординарной!',
    'Улыбаемся и машем!',
    'Всё будет хорошо, я узнавала'
]
export class RandomQuote extends Module {
  constructor(type, text) {
    super(type, text);
  }

  getRandomQuote(){
    let i = Math.floor(Math.random() * phrases.length);
    let quiteToShow = phrases[i];
    console.log(quiteToShow, 'quoteToShow');
    return quiteToShow;
  }

  showQuote(){
     this.getRandomQuote();
     let body = document.querySelector('body');
     let div = document.createElement('div');
     let q = document.createElement('q');
     q.innerHTML = this.getRandomQuote();
     q.style.paddingLeft = '30px';
     q.style.font = "italic bold 20px arial,serif"
     div.append(q);
     q.classList.add('quote');
     body.append(div);
  }

  removeQuote(){
    const Q = document.querySelector('.quote');
    const countQ = document.querySelectorAll('.quote');
    countQ.forEach((que) =>{
      setTimeout(() => { que.remove(); }, 3000);
    })
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.trigger.bind(this),
    };
  }

  trigger() {
    this.showQuote();
    this.removeQuote();
  }
}
