<template>
  <div class="Apple">
    <h2>苹果的名字:{{ name }}</h2>
    <h2>苹果的颜色:{{ color }}</h2>
    <h2>数量:{{ num }}</h2>
    <button @click="sendData">发送苹果颜色给桔子</button>
  </div>
</template>

<script>
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
    sendData() {
      // 谁发送数据谁就触发事件
      this.$bus.$emit("sendColor", this.color);
    },
  },
};
</script>

<style>
.Apple {
  background-color: red;
}
</style>