<template>
  <ul>
    <!-- 3.接收params参数 -->
    <!-- <li>消息的内容：{{ $route.params.id }}</li>
    <li>消息的内容：{{ $route.params.title }}</li> -->
    <!-- (3). props值使用 -->
    <li>消息的内容：{{ id }}</li>
    <li>消息的内容：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // (2). 申明接收这个props值
  props: ["id", "title"],
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>