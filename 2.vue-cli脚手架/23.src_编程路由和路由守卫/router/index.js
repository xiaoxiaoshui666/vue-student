import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
    // mode: 'history', 模默认是hash模式
    routes: [
        {
            name: 'thisAbout',
            path: "/about",
            component: About,
            meta: { title: "关于" },
            // 独享路由守卫         单独守卫此路由，只有前置没有后置 
            beforeEnter: (to, from, next) => { // 优先全局路由守卫，再独享路由守卫
                console.log(456);
                // alert(to.meta.title)
                next()
            }
        },
        {
            name: 'thisHome',
            path: "/home",
            component: Home,
            meta: { title: "主页" },
            children: [
                {
                    name: 'thisMessage',
                    path: "message",
                    component: Message,
                    meta: { isAuth: true, title: "消息" },  // 路由元信息（元：自定义的信息）需要全新的校验
                    children: [
                        {
                            name: 'thisDetail',
                            path: "detail",
                            component: Detail,
                            meta: { title: "详情" },
                        }
                    ]
                },
                {
                    name: 'thisName',
                    path: "news",
                    component: News,
                    meta: { isAuth: true, title: "新闻" },  // 路由元信息（元：自定义的信息）需要全新的校验
                }
            ]
        },
    ]
})
// 全局前置路由守卫————初始化的时候被调用，每次路由切换之前被调用 
router.beforeEach((to, from, next) => {    // 每次点击跳转前调用此函数
    // console.log(to);       // 准备去个路由即去往的路由$route
    // console.log(from);     // 从哪个路由去的即当前路由$route
    // console.log(next());   // 不执行此函数路由无法跳转
    if (to.name === 'thisAbout') {
        console.log(789);
    }
    next()
})
// 全局后置路由守卫————初始化的时候被调用，每次路由切换之后被调用 
router.afterEach((to, from) => {    // 每次点击跳转后调用此函数
    // 后置路由守卫没有next()
    document.title = to.meta.title || "案例"
})

export default router