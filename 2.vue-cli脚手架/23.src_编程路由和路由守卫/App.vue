<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
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
/*    
  1. replace模式 可取消历史记录，改变push模式，变为replace替换模式
  2. <keep-alive> 缓存路由组件 切组件时保持挂载不销毁
      <keep-alive include="Message">   include 只缓存此组件 只能写组件名
        <router-view></router-view>
      </keep-alive>
  3. 路由组件独有的生命周期钩子
      activated     路由组件被激活时触发
      deactivated   路由组件被失活时触发
  4. 路由守卫
   (1).全局路由守卫
       ①.前置路由守卫
          在路由器实例上     router.beforeEach((to, from, next) => { }
              执行时机： 初始化时和路由执行跳转前触发函数
              to ：     准备去个路由即去往的路由$route
              from ：   从哪个路由去的即当前路由$route
              next ：   不执行此函数路由无法跳转
       ②.后置路由守卫
          在路由器实例上     router.afterEach((to, from) => { }
              执行时机： 初始化时和路由执行跳转后触发函数
              没有next参数
   (2).独享路由守卫
      在此路由规则配置上     beforeEnter(to, from, next)  { }
          没有后置独享路由守卫
   (3).组件内守卫
        ①.通过路由规则进入该组件被调用
           在此路由组件上与生命钩子同级    beforeRouteEnter(to, from, next) { }
        ①.通过路由规则离开该组件被调用
           在此路由组件上与生命钩子同级    beforeRouteLeave(to, from, next) { }
    注意：守卫优先级
         先当前组价内离开守卫       beforeRouteLeave   -->
         然后优先全局守卫           beforeEach   -->  afterEach  -->
         在独享路由守卫             beforeEnter   -->
         最后是要进入的组件内守卫    beforeRouteEnter
  */
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>