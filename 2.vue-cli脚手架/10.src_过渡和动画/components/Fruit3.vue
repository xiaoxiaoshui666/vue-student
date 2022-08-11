<template>
  <div>
    <!-- <transition> 只能使用一个元素， -->
    <!-- <transition-group > 能使用多个元素，且每个元素要指定唯一的key值 -->
    <button @click="theshow = !theshow">点击3</button>
    <transition-group name="haha" appear>
      <h1 v-show="!theshow" key="1">你来啦3~</h1>
      <h1 v-show="theshow" key="2">嘿嘿嘿3~</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Fruit3",
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
  /* 过渡的时间和过渡的状态 */
  /*   transition: 0.6s linear; */
}

/* 进入的起点，离开的终点 */
.haha-enter,
.haha-leave-to {
  transform: translateX(-100%);
}
/* 离开和进入的动作 也可以直接写在标签里面  */
.haha-enter-active,
.haha-leave-active {
  transition: 0.6s linear;
}
/* 进入的终点，离开的起点 */
.haha-enter-to,
.haha-leave {
  transform: translateX(0);
}
</style>