<template>
  <div class="container">
    <Category title="美食">
      <!-- 这些插槽用的标签都是vue在解析完之后再传入组件的 -->
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
  </div>
</template>

<script>
/* 
  作用：让父组件可以向子组件指定位置插入htm结构，也是一种组件间通信的方式，适用于父组件 ==> 子组件
*/
import Category from "./src/components/Category.vue";
export default {
  name: "App",
  data() {
    return {
      foods: ["烧烤", "麻辣香锅", "过桥米线", "兰州拉面"],
    };
  },
  components: { Category },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>