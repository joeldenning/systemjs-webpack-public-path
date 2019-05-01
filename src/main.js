import './set-public-path'
import imgUrl from './yoshi.jpg'

const imgEl = document.createElement('img')
imgEl.src = imgUrl

document.body.appendChild(imgEl)
console.log('webpack bundle finished executing')