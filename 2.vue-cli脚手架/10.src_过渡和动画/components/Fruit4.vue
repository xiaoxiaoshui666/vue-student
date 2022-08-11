<template>
  <div>
    <button @click="theshow = !theshow">点击4</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!theshow" key="1">看我变化</h1>
      <h1 v-show="theshow" key="2">变变变</h1>
    </transition-group>
  </div>
</template>

<script>
/* 
  官网： http://animate.style/
    animate动画库：
  1. 安装 npm i animate.css
  2. 引入css文件 ，因为是样式直接 import "animate.css";
  3. 改 name=""animate__animated animate__bounce""
  4. 添加样式 enter-active-class="..." leave-active-class="..."
*/
import "animate.css";
export default {
  name: "Fruit4",
  data() {
    return {
      theshow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: yellow;
}
</style>