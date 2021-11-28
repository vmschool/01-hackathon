export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

const tegHtml = document.createElement('h2')
tegHtml.style.color='green'
tegHtml.style.marginLeft = '500px'

export function updateDisplay(i) {
    
  tegHtml.innerHTML = `количество кликов = ${i}`
  return tegHtml
} 

export function resetCounter() {
  tegHtml.innerHTML = ''
return tegHtml
}