import {Module} from '../core/module'
export class customcmsModule extends Module {
    trigger() {
      document.querySelector('body').style.background = '#111418'

      const notifElem = document.querySelector('.notification')
      const btn = document.querySelector('.btns')
      const fact = document.querySelector('.fact')
      
      const randomFacts = ['Мужчины, у которых есть коты, считаются более счастливыми в любви.', 'Пчёл и ос можно научить искать взрывчатые вещества и наркотики, как собак.', 'Галапагосские черепахи могут жить до 150 лет и на протяжении целого года обходиться без пищи и воды.', 'В Гамбурге есть детский сад для мужчин.', 'Путешествовать полезно для умственного здоровья, а также это снижает риск сердечного приступа и депрессии.', 'По данным исследования, средний IQ человека вырос примерно на 20% с 1950-х годов.', 'В Канаде озер больше, чем в любой другой стране.', 'Компания Google зарабатывает примерно 700 долларов в секунду.']
      
      const notif = {
         openNotif:() => notifElem.classList.add('go'),
         closeNotif: () => notifElem.classList.remove('go')
      }
      
      setTimeout(() => {
         notif.openNotif()
         setTimeout(() => {
            notif.closeNotif()
         },7000)
      },1000)
      
      btn.addEventListener('click', event => {
         event.preventDefault()
      
         setTimeout(() => {
            notif.closeNotif()
         },100)
      
        setTimeout(() => {
         let rand = Math.floor(Math.random() * randomFacts.length)
         fact.innerHTML =`А вот тебе и интересный факт  -  ${randomFacts[rand]}`
        }, 1000)
      })
      
      btn.removeEventListener
    }
 }

