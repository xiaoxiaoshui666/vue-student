/* 
  该文件是整个项目的入口文件
*/

import Vue from 'vue'    // 引用Vue.runtime.xxx.js  （此vue是精简版的，为了打包后体积小）
import App from './App.vue'   // 引用App组件，他是所有组件的父组件

Vue.config.productionTip = false   // 关闭生产提示

new Vue({   // 创建Vue实例对象 -- vm
  // 用vue内置的render函数 调用 createElement函数 去指定具体内容。
  render: h => h(App),
  /* template: `<App></App>`,
  components:{APP}
  因为引用的是精简版的vue，是没有模板解析器的vue 所以这个template模板配置项解析不出来 */
}).$mount('#app')  // 相当于 el: '#app'
