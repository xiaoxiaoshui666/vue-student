<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <!-- slot>默认值，没传递结构时出现该文字</slot> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category.",
  props: ["title"],
};
</script>

<style scoped>
.category {
  background-color: green;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: greenyellow;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>