<template>
  <div class="orange">
    <h2>桔子的名字:{{ name }}</h2>
    <h2>桔子的形状:{{ style }}</h2>
    <h2>桔子:{{ taste }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Orange",
  data() {
    return {
      name: "桔子",
      style: "big",
      taste: "酸",
    };
  },
  // 收数据的组件来订阅数据
  mounted() {
    /* this.$bus.$on("getdata", (color) => {
      console.log("我是桔子" + color);
    }); */
    // 订阅消息
    const pubId = pubsub.subscribe("getcolor", (msgName, color) => {
      // 此普通函数的this是undefind  所以需要写成箭头函数
      // 函数的参数msgName第一个是消息名，第二个color才是参数
      console.log(msgName + "  我是桔子——" + color);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId); // 在组件销毁前取消订阅
  },
};
</script>

<style>
.orange {
  background-color: orange;
}
</style>