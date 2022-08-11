<template>
  <div class="App">
    <h1>我的水果</h1>
    <Apple />
    <Orange />
  </div>
</template>

<script>
/* 
  谁想接收数据就绑定事件,谁想发送谁就触发事件
  1.一种组件间通信的方式，适用于任意组件间通信。条件：①vc们都能访问他，②他有$emit，$on等等
  2.安装全局事件总线:
    new Vue(
      beforeCreate() {
        Vue.prototype.$bus = this//安装全局事件总线，$bus就是当前应用的vm
      },
    })
  3.使用事件总线:
    1.接收数据:A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
      methods(){
        demo(data){......}}
      ...
      mounted() {
        this.$bus.$on( 'xxxx',this.demo)
        // (this.demo)这个函数里面的this指向该事件的调用组件，所以如果写成函数就用箭头函数指向外层这个组件实例
      }
    2.提供数据:this.$bus.$emit( 'xx×x',数据)
  4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
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