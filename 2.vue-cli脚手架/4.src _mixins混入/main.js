import Vue from 'vue'
import App from './App'

// 全局混合
// import { mixture, Thedata } from './mixin'

Vue.config.productionTip = false

// Vue.mixin(mixture);
// Vue.mixin(Thedata);
// 所有的 vc 和 vm 都可以使用 mixture 和 Thedata

new Vue({
    render: h => h(App)
}).$mount('#app')