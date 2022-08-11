<template>
  <div class="orange">
    <h2>桔子的名字:{{ name }}</h2>
    <h2>桔子的形状:{{ style }}</h2>
    <h2>桔子:{{ taste }}</h2>
  </div>
</template>

<script>
export default {
  name: "Orange",
  data() {
    return {
      name: "桔子",
      style: "big",
      taste: "酸",
    };
  },
  mounted() {
    console.log(this.$bus);
    // 谁收到数据谁就绑定事件
    this.$bus.$on("sendColor", (applecolor) => {
      console.log("orange收到了" + applecolor);
    });
  },
  beforeDestroy() {
    // 记得在组件销毁前清除绑定的全局事件
    this.$bus.$off("sendColor");
  },
};
</script>

<style>
.orange {
  background-color: orange;
}
</style>