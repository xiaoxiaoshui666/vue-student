import Vue from 'vue'
import App from './App'

// 2. 引入这个插件文件夹
import plugins from './plugins'

Vue.config.productionTip = false

// 应用插件  实际就是Vue在调用install方法
Vue.use(plugins, 1, 2)

new Vue({
    render: h => h(App)
}).$mount('#app')