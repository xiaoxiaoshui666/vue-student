import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            // name:"ThisMessage",   命名路由
                            // 1. 要提供一个占位符申明接收
                            path: "detail/:id/:title",
                            component: Detail,

                            // (1) props让路由组件更加方便的收到参数
                            // ①. 对象形式，但容易把数据写死
                            // props:{id:'100',title:"xiaoxi"}

                            // ②. 布尔值形式，会把路由组件收到的所有params参数，以props形式传给Detail组件
                            // props:true

                            // ③. 函数形式 可传入$route，可以使用结构赋值 相当于 id: $route.params.id
                            props({ params }) {
                                return {
                                    id: params.id,
                                    title: params.title
                                }
                            }
                        }
                    ]
                },
                {
                    path: "news",
                    component: News,

                }
            ]
        },
    ]
})
