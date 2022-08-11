<template>
  <div class="App">
    <h1>我的水果</h1>
    <Apple />
    <Orange />
  </div>
</template>

<script>
/* 
  1.一种组件间通信的方式，适用于任意组件间通信。
  2.使用步骤:
    1.安装pubsub: npm i pubsub-js
    2.引入:import pubsub from 'pubsub-js '
    3.接收数据:A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身。
      methods(){
        demo(msgName, data){......}}   第二个参数才是数据
        ......  
        mounted() {
          this.pid = pubsub. subscribe( 'xxx ' ,this.demo)//订阅消息
        }
    4.提供数据:pubsub.publish( 'xxx',数据)
    5.最好在beforeDestroy钩子中，用PubSub.unsubscribe(pid)去取消订阅
*/
import Apple from "./components/Apple.vue";
import Orange from "./components/Orange.vue";
export default {
  name: "App",
  components: { Apple, Orange },
};
</script>

<style>
.App {
  background-color: green;
}
</style>