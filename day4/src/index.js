import _ from "lodash";
import $ from "jquery";
import { ui } from './jquery-ui.js'
console.log(_.join(["hello", "world222222223333"], "-----"))
$("body").append("hallo world")
ui()
/*
optimization: {
  splitChunks: {
    chunks: 'all', //有3个配置，all表示不管是同步引入还是异步引入的代码都进行分割，async表示只对异步的代码进行代码分割,同步同理
    cacheGroups: {
      vendors: false,
      default: false
    }
  }
}
*/
// function getComponent () {
//   return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
//     // 异步引入模块
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['hello', 'world'], '-');
//     return element;
//   })

// }

// 使用异步函数需要安装@babel/plugin-transform-runtime插件，同时在babelrc中加入plugins:["@babel/plugin-transform-runtime"]
//有@的使用
// async function getComponent () {
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */'lodash')
//   // 异步引入模块
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['hello', 'world'], '-');
//   return element;
// }
// document.addEventListener('click', function () {
//   //异步加载的可以实现懒加载
//   getComponent().then(element => {
//     document.body.appendChild(element)
//     console.log(_.join(["a", "b"]))
//   })
// })


//PWA技术 ，serveice-worker
//通过另类的一个缓存去进行页面的展示，若第一次加载成功，突然服务器挂掉了，第二次进入能够从缓存中读取页面
//这就是pwa技术
//需要安装workbox-webpack-plugin插件，
/*使用：new workboxPlugin({
  clientsClaim:true,
  skipWaiting:true
})

业务代码中还需要写一些
if('serviceWorker' in navigator){
  window.addEventListener('load',() => {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('111')//如果浏览器支持这种功能的话，就使用这种功能
    }).catch(error => {
      console.log('222')//如果不支持这种功能就不管
    })

  })
}

*/

