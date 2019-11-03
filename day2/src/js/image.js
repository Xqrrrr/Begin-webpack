import image from './image.png'
import '../index.scss'
var Images = function () {
  var root = document.getElementById("root");
  var img = new Image();
  img.src = image;
  img.classList.add('image')
  root.append(img);
}

export default Images;
