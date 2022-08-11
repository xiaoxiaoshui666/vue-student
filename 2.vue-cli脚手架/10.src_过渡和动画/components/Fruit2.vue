<template>
  <div>
    <!-- <transition></transition>实现动画必须要包裹的标签名 -->
    <!-- name可以给样式自定义名 名- 默认是v-  初始播放一次动画appear相当于 :appear="true" -->
    <button @click="theshow = !theshow">点击2</button>
    <transition name="haha" appear>
      <h1 v-show="theshow" key="2">我的过渡2</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Fruit2",
  data() {
    return {
      theshow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  color: greenyellow;
  /* 过渡的时间和过渡的状态 */
  transition: all 1s ease;
}

/* 进入的起点，离开的终点 */
.haha-enter,
.haha-leave-to {
  /* 让元素透明度为0 */
  opacity: 0;
  color: red;
  transform: translateX(200px);
}
/* 离开和进入的动作 也可以直接写在标签里面  */
/* .haha-enter-active,
.haha-leave-active {
  transition: all 0.6s ease;
} */
/* 进入的终点，离开的起点 */
.haha-enter-to,
.haha-leave {
  transform: translateX(0px);
}
</style>