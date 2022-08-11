<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--把games传给了插槽的使用者；插槽的目的是等着往里面塞结构，谁往里面塞结构，games就传给谁 -->
    <slot :games="games" hello="未满18岁禁止游戏"></slot>
  </div>
</template>

<script>
export default {
  name: "Category.",
  props: ["title", "type"],
  data() {
    return {
      games: ["王者", "英雄联盟", "穿越火线", "QQ飞车"],
    };
  },
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