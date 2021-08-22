import {Module} from '../core/module'
import '../css/notepad.css'

export class NotepadModule extends Module {
  constructor(type, text) {
    super('notepad', 'Блокнот')
    this.num = 'note-72'
  }

  trigger() {
    this.#create(document.querySelector('body'))
  }

  #create(point) {
    if (document.querySelector('#ntp')) return
    const wrap$ = document.createElement('div')
    wrap$.id = 'ntp'
    wrap$.className = 'notepad-wrap '

    const top$ = document.createElement('div')
    top$.className = 'notepad-top'

    const title$ = document.createElement('h3')
    title$.className = 'notepad-title'
    title$.textContent = 'Блокнот'

    const closeBtn$ = document.createElement('button')
    closeBtn$.className = 'notepad-close-btn'
    closeBtn$.textContent = 'X'
    closeBtn$.addEventListener('click', () => {
      this.#close(wrap$)
    })

    const tarea$ = document.createElement('textarea')
    tarea$.id = 'tarea'
    tarea$.className = 'notepad-textarea'

    const footer$ = document.createElement('div')
    footer$.id = 'notepad-footer'
    footer$.className = 'notepad-top'

    const openBtn$ = document.createElement('button')
    openBtn$.className = 'notepad-footer-btn'
    openBtn$.textContent = 'Открыть'
    openBtn$.addEventListener('click', this.#open.bind(this, wrap$))

    const saveBtn$ = document.createElement('button')
    saveBtn$.className = 'notepad-footer-btn'
    saveBtn$.textContent = 'Сохранить'
    saveBtn$.addEventListener('click', () => {
      this.#save(tarea$)
    })

    footer$.append(openBtn$, saveBtn$)
    top$.append(title$, closeBtn$)
    wrap$.append(top$, tarea$, footer$)
    point.append(wrap$)
  }

  #close(el) {
    el.innerHTML = ''
    el.remove()
  }

  #save(tarea) {
    const note = tarea.value
    let txt
    if (note.trim()) {
      if (localStorage.getItem(this.num)) {
        txt = localStorage.getItem(this.num) + '@@' + note
      } else {
        txt = note
      }
      localStorage.setItem(this.num, txt)
    }
    document.querySelector('#tarea').value = ''
    document.querySelector('#tarea').focus()
  }

  #open(p) {
    if (document.querySelector('#nls')) return
    const noteList$ = document.createElement('div')
    noteList$.className = 'notepad-note-list'

    if (localStorage.getItem(this.num)) {
      document.querySelector('#notepad-footer').style.display = 'none'
      const notes = localStorage.getItem(this.num).split('@@')
      noteList$.id = 'nls'
      noteList$.textContent = ''
      if (notes.length > 0) {
        notes.forEach(n => {
          const p$ = document.createElement('p')
          p$.className = 'notepad-note-list-p'
          p$.textContent = n
          noteList$.append(p$)
        })
      } else {
        noteList$.textContent = 'Записей нет'
      }

      const listFooter$ = document.createElement('div')
      listFooter$.className = 'notepad-top'

      const closeListBtn$ = document.createElement('bottom')
      closeListBtn$.className = 'notepad-footer-btn'
      closeListBtn$.textContent = 'Закрыть список'
      closeListBtn$.addEventListener('click', () => {
        this.#close(noteList$)
        document.querySelector('#notepad-footer').style.display = 'flex'
      })

      const clearListBtn$ = document.createElement('bottom')
      clearListBtn$.className = 'notepad-footer-btn'
      clearListBtn$.textContent = 'Очистить список'
      clearListBtn$.addEventListener('click', () => {
        localStorage.clear()
        this.#close(noteList$)
        document.querySelector('#notepad-footer').style.display = 'flex'
      })

      listFooter$.append(closeListBtn$, clearListBtn$)
      noteList$.append(listFooter$)
      p.append(noteList$)
    } else {
      //alert('Записей пока нет')
      document.querySelector('#tarea').value = ''
      document.querySelector('#tarea').value = 'Записей пока нет'
    }
  }
}
