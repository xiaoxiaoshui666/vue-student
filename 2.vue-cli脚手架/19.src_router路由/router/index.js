import VueRouter from "vue-router"
// 引用路由组件
import About from '../pages/About'
import Home from '../pages/Home'

// 创建并暴露路由规则
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home
        },
    ]
})
