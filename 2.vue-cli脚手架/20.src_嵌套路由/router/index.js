import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'

export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            // 通过children配置子路由规则
            children: [
                {
                    // 子路由不用写斜杠
                    path: "message",
                    component: Message,
                },
                {
                    path: "news",
                    component: News,
                }
            ]
        },
    ]
})
