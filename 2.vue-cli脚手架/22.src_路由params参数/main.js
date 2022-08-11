import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'

// 应用路由
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')