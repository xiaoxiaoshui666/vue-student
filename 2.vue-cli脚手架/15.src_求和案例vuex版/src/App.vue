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
  4. 业务逻辑
    1. 组件中读取vuex中的数据 :  $store.state.sum
    2. 组件中修改vuex中的数据: this.$store.dispatch('action中的方法名', 数据) 或 this.$store.commit( 'mutations中的方法名', 数据)
       注意：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit
  5. getters
    当state中的数据需要经过加工后再使用时，可以使用getters加工。相当于compuyed计算属性
    在store/index.js中 追加一个 const getters = { bigSum(state) {return state.sum *9} }
    组件中读取数据 $store.getters.bigSum
  
  
  执行过程：
    1. 在组件中用事件触发dispatch函数调用，并传入jia和2这两个参数时，
    2. 会引起 Actions对象里的jia这个函数的调用，
    3. 在这个函数里面继续调用commit函数，并传入JIA和2两个参数时
    4. 会引起 Mutations对象里的JIA这个函数的调用
    5. 这个JIA函数参数有State数据，所以在这个函数里面完成业务逻辑
    6. 此时State数据会变化，然后重新解析组件，页面也会自动渲染
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