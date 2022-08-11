<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  /* 组件内守卫 */
  beforeRouteEnter(to, from, next) {
    console.log(123);
    next(); // 放行
  },
  beforeRouteLeave(to, from, next) {
    console.log(321);
    next();
  },
  activated() {
    console.log("激活1");
  },
  // 路由组件失活时触发
  deactivated() {
    console.log("失活1");
  },
};
</script>

<style>
</style>