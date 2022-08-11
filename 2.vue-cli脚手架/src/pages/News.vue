<template>
  <ul>
    <li>news001</li>
    <input type="text" />
    <li>news002</li>
    <input type="text" />
    <li>news003</li>
    <input type="text" />
  </ul>
</template>

<script>
export default {
  name: "News",
  activated() {
    console.log("激活5");
  },
  deactivated() {
    console.log("失活5");
  },
};
</script>

<style>
</style>