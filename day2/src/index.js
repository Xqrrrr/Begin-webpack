import image from './js/image.png'
// import style from './index.scss' css模块化的写法
import './index.scss'
import images from './js/image.js'
import Iconfont from './js/iconfont.js'
images();
Iconfont();
var root = document.getElementById("root");
var img = new Image();
img.src = image;
img.classList.add('image')
root.append(img);
console.log(1232)




