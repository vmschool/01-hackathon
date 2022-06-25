export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function renderMenu(modules, positionX, positionY) {
  const menuHTML = document.createElement('ul') // создаем контейнер меню
    menuHTML.className = 'menu'
    menuHTML.classList.add('open')
    menuHTML.style.transform = 'scale(0)'

  modules.forEach((el) => { // создаем элементы меню
    const modulesHTML = document.createElement('li')
      modulesHTML.textContent = el.text
      modulesHTML.className = 'menu-item'

    menuHTML.append(modulesHTML)
  })

  menuHTML.style.top = `${positionY}px` // позиция появления по вертикали
  menuHTML.style.left = `${positionX}px` // позиция появления по горизонтали
  menuHTML.style.transformOrigin = 'top left'

  document.body.append(menuHTML)

  /*Расчет позиции появления при наложении*/

  setTimeout(() => {

    menuHTML.style.transform = 'scale(1)'
    menuHTML.style.transition = 'transform 180ms ease-in-out' //добавляем плавность появления

    const menuHeight = menuHTML.clientHeight
    const menuWidth = menuHTML.clientWidth
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if ((menuHeight + positionY) > windowHeight && (menuWidth + positionX) > windowWidth) {
        menuHTML.style.top = `${positionY - menuHeight}px`
        menuHTML.style.left = `${positionX - menuWidth}px`
        menuHTML.style.transformOrigin = 'bottom right'

    } else if ((menuHeight + positionY) > windowHeight) {
        menuHTML.style.top = `${positionY - menuHeight}px`
        menuHTML.style.transformOrigin = 'bottom left'

    } else if ((menuWidth + positionX) > windowWidth) {
        menuHTML.style.left = `${positionX - menuWidth}px`
        menuHTML.style.transformOrigin = 'top right'
    }
  },0)
}