<template>
  <div class="color">
    <h2 @click="show">爱好的球类：{{ name }}</h2>
    <h2>编号：{{ id }}</h2>
    <h2>玩家：{{ player }}</h2>
    <h2>年纪：{{ age }}</h2>
  </div>
</template>

<script>
// 2. 接收mixin文件
import { mixture, Thedata } from "../mixin";
export default {
  name: "Ball",
  data() {
    return {
      name: "篮球",
      id: 24,
      player: "小欣", // 在混合中，没有的数据就整合，重名的数据就替换
    };
  },
  // 3.可以使用mixin文件下的方法和数据，把数据和方法 不是替换 是整合在一起
  mixins: [mixture, Thedata],
  mounted() {
    // 但是 如生命周期中的钩子是合并在一起都用
    console.log("在Ball组件中mounted被调用了");
  },
};
</script>

<style>
.color {
  background-color: yellowgreen;
}
</style>