import {Module} from '../core/module'
import {random} from '../utils'

const backgroundImages = [
  'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_960_720.jpg',
  'https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/02/13/21/57/lake-2063957_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/06/28/12/20/water-824418_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/06/16/13/00/rain-stoppers-1461288_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_960_720.jpg',
  'https://cdn.pixabay.com/photo/2012/02/27/17/03/background-17520_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/08/09/18/23/underwater-2615376_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/11/07/11/48/water-1031502_960_720.jpg'
]

export class BackgroundImageModule extends Module {
  constructor(type = 'background-color', text = 'Поменять фон') {
    super(type, text)
  }

  trigger() {
    const imageUrl = backgroundImages[random(0, backgroundImages.length - 1)]

    document.body.style.background = `url("${imageUrl}") no-repeat`
    document.body.style.backgroundSize = 'cover'
  }
}
