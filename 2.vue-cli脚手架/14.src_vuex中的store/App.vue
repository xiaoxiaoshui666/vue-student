<template>
  <div>
    <Count />
  </div>
</template>

<script>
/* 
  1. 什么是vuex？
   在Vue中实现集中式状态（数据)管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读写)，也是一种组件间通信的方式，目适用于任意组件间通信。
  2. 何时使用
   多个组件需要共享数据时
  3. 搭建环境
    1. 安装vuex      npm i vuex
    2. 创建一个store文件夹里面的一个index.js文件
    3. 在index.js中
          ① Vue.use(Vuex) 
          ② 创建actions，mutations，state三个对象
          ③ 创建并暴露store对象  export default new Vuex.Store({actions, mutations, state})
        在main.js中
          ① import store from './store/index'
          ② 在vm中传入 store 配置项
    4.注意：Actions对象， Mutations对象，State对象(数据)都由store所管理的，使得所有的vc都能使用store
*/
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>