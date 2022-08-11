import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 最开始的钩子，模板没解析数据没代理，this指向vm实例
    Vue.prototype.$bus = this           // 这样全局的vc和vm都能得到他
  },
}).$mount('#app')
// 当vc和vc的调用$bus 就想当于调用了Vue的原型
//  因为Vue的原型有$emit,$on 而vc和vm都能用Vue的原型，所有他们都能调用的到
/* function App() { }          ————Vue
const ap = new App()           ap————vm和vc
App.prototype.c = 789          c————$emit
App.prototype.x = ap           x————$bus 安装事件总线
console.log(ap.x.c) //789      实例的$bus的$emit               */