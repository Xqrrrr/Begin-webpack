
import './style.css';
// import avator from './image.png'
import Count from './count.js'
import { add } from './math.js' /*这个js导出了2个方法，但是只引入了一个add，但是webpack打包的文件中，把另一个没有使用的模块也引入了
这不是我们想要的，我们想要实现的是引入什么，就只打包什么，而不是全部打包。
tree shaking这个概念，就是我们引入的就打包，没有引入的就剔除掉，不打包。这就是tree shaking的概念
通过工具"摇"我们的JS文件，将其中用不到的代码"摇"掉，是一个性能优化的范畴
tree shaking 只支持es module ,也就是import 模块的引入
config中 ：{ // 如果打包环境为mode:devloment ，则需要配置，如果打包环境为mode:production正式环境，则不需要配置,
  在开发环境，则打包后的文件还存在未引入使用的模块便于调试，如果在开发环境，就会剔除，摇掉
  optimization:{//开发环境不需要配置这个
    usedExports:true
  }
}

package.json 中 sideEffects设置["@babel/polly-fill"]就是说不需要对import "@babel/polly-fill" 进行tree-shaking，
也可以是其他模块，一般设置为false 

*/

// var img = document.createElement("img");
// img.src = avator;
// document.body.appendChild(img)
add(1, 2)
var div = document.createElement('div');
var button = document.createElement('button');
button.innerHTML = "点击"
document.body.appendChild(button);
document.body.appendChild(div);
button.onclick = function () {
  var p = document.createElement('p');
  p.innerHTML = "item";
  div.appendChild(p);

}



Count(0)

if (module.hot) {
  module.hot.accept('./count.js', () => {
    // 使用更新过的 library 模块执行某些操作...
    Count(0)
  })

}

const arr = [new Promise(() => { })]
const { name, type } = { name: '肖凤莉', type: 'girlfriend' }
console.log(name)
console.log(type)
arr.map(item => {
  console.log(item)
})
