<template>
  <div class="color">
    <h2>游戏名：{{ name }}</h2>
    <h2>出品年份：{{ year }}</h2>
  </div>
</template>

<script>
export default {
  name: "WeGame",
  data() {
    return {
      name: "LOL",
      year: 2005,
    };
  },
};
</script>

<style>
.color {
  background-color: yellow;
}
</style>