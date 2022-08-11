<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 具名插槽就是要在插槽上加个name，来指定将来用solt属性的该名字的标签使用这个插槽 -->
    <slot name="center">欢迎使用插槽1</slot>
    <slot name="footer">欢迎使用插槽2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
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