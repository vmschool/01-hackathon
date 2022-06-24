export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function renderMenu(modules, positionX, positionY) {
  const menuHTML = document.createElement('ul') // создаем контейнер меню
    menuHTML.className = 'menu'
    menuHTML.classList.add('open')
    menuHTML.style.transform = 'scale(0)'
    menuHTML.style.transformOrigin = 'top left'

  modules.forEach((el) => { // создаем элементы меню
    const modulesHTML = document.createElement('li')
      modulesHTML.textContent = el.text
      modulesHTML.className = 'menu-item'

    menuHTML.append(modulesHTML)
  })

  menuHTML.style.top = `${positionY}px` // позиция появления по вертикали
  menuHTML.style.left = `${positionX}px` // позиция появления по горизонтали

  document.body.append(menuHTML)

  console.log('menuHTML.clientHeight',menuHTML.clientHeight) // нужно доработать
  console.log('menuHTML.clientWidth',menuHTML.clientWidth)
  console.log('innerHeight',window.innerHeight)
  console.log('innerWidth',window.innerWidth)

  setTimeout(() => {
    menuHTML.style.transform = 'scale(1)'
    menuHTML.style.transition = 'transform 180ms ease-in-out' //добавляем плавность появления
  },0)
}

export function closeMenu() {
  const openMenu = document.body.getElementsByClassName('open')

  while (openMenu.length > 0) {
    openMenu[0].remove() // закрываем открытое меню, если было открыто ранее
  }
}