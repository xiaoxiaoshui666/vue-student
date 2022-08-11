<template>
  <ul>
    <li>消息的id：{{ $route.query.id }}</li>
    <li>消息的内容：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  activated() {
    console.log("激活2");
  },
  deactivated() {
    console.log("失活2");
  },
};
</script>

<style>
</style>