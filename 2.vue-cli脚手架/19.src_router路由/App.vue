<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 安装vue-router，命令 npm i vue-rputer
// 2. 应用插件: Vue.use(VueRouter)
// 3. 编写router配置项
/* import VueRouter from "vue-router"
    // 引用组件
    import About from '../components/About'
    import Home from '../components/Home'
    // 路由规则
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
    }) */
// 4. 实现切换 (active-class可配置高亮样式)
/* <router-link class="list-group-item" to="/about">About</router-link> */
// 5. 指定展示位置
/* <router-view></router-view> */

/* 注意：
 ①.路由组件一般存放在pages文件夹内 
 ②.通过切换，隐藏的路由组件默认被销毁
 ③.每个路由组件都有一个自己的$route,存放自己的信息, 和公有的路由器$router，存放路由器信息
 */
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>