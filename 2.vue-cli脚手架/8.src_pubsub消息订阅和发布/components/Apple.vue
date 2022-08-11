<template>
  <div class="Apple">
    <h2>苹果的名字:{{ name }}</h2>
    <h2>苹果的颜色:{{ color }}</h2>
    <h2>数量:{{ num }}</h2>
    <button @click="sendData">发送苹果颜色给桔子</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Apple",
  data() {
    return {
      name: "苹果",
      color: "红色",
      num: 2,
    };
  },
  methods: {
    // 发送数据的组件来
    sendData() {
      // this.$bus.$emit("getdata", this.color);
      // 发布消息
      pubsub.publish("getcolor", this.color);
    },
  },
};
</script>

<style>
.Apple {
  background-color: red;
}
</style>