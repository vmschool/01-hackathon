import { Module } from '../core/module'
import * as utils from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Поменять цвет')
    this.pict = [
      {
        id: 1,
        url:
          'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
      },
      {
        id: 2,
        url:
          'https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_960_720.jpg',
      },
      {
        id: 3,
        url:
          'https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_960_720.jpg',
      },
      {
        id: 4,
        url:
          'https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_960_720.jpg',
      },
      {
        id: 5,
        url:
          'https://cdn.pixabay.com/photo/2015/06/28/12/20/water-824418_960_720.jpg',
      },
      {
        id: 6,
        url:
          'https://cdn.pixabay.com/photo/2016/06/16/13/00/rain-stoppers-1461288_960_720.jpg',
      },
      {
        id: 7,
        url:
          'https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_960_720.jpg',
      },
      {
        id: 8,
        url:
          'https://cdn.pixabay.com/photo/2012/02/27/17/03/background-17520_960_720.jpg',
      },
      {
        id: 9,
        url:
          'https://cdn.pixabay.com/photo/2017/08/09/18/23/underwater-2615376_960_720.jpg',
      },
      {
        id: 10,
        url:
          'https://cdn.pixabay.com/photo/2015/11/07/11/48/water-1031502_960_720.jpg',
      },
    ]
  }
  trigger() {
    console.log('BackgroundModule')
  }
  changeBody() {
    return utils.random(1, 2) === 1
      ? this.changeBodyImg()
      : this.changeBodyColor()
  }
  changeBodyColor() {
    // меняем на случайный цвет
    const color = Math.floor(Math.random() * parseInt('ffffff', 16)).toString(
      16
    )
    const colorBg = `#${color}`
    document.body.style.background = ''
    document.body.style.backgroundColor = colorBg
  }

  changeBodyImg() {
    // меняем на случайную каритнку и растягиваем ее
    const pictNum = utils.random(1, 10)
    const pictUrl = this.pict.find((item) => item.id === pictNum).url

    document.body.style.background = `url("${pictUrl}") no-repeat`
    document.body.style.backgroundSize = 'cover'
  }
}
