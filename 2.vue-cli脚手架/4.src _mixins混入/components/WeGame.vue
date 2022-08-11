<template>
  <div class="color">
    <h2 @click="show">游戏名：{{ name }}</h2>
    <h2>出品年份：{{ year }}</h2>
    <h2>玩家：{{ player }}</h2>
    <h2>年纪：{{ age }}</h2>
  </div>
</template>

<script>
import { mixture, Thedata } from "../mixin";
export default {
  name: "WeGame",
  data() {
    return {
      name: "LOL",
      year: 2005,
    };
  },
  mixins: [mixture, Thedata],
  mounted() {
    console.log("在WeGame组件中mounted被调用了");
  },
};
</script>

<style>
.color {
  background-color: yellow;
}
</style>