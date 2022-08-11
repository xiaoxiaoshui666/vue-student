<template>
  <ul>
    <li>消息的id：{{ $route.query.id }}</li>
    <li>消息的内容：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>