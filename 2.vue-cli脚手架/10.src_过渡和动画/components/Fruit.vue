<template>
  <div>
    <button @click="theshow = !theshow">点击1</button>
    <!-- <transition></transition>实现动画必须要包裹的标签名 -->
    <!-- name可以给样式自定义名 名- 默认是v-  初始播放一次动画appear相当于 :appear="true" -->
    <transition name="haha" appear>
      <h1 v-show="theshow">我的动画片1</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Fruit",
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

/* 进入的时候要激活的动画 */
.haha-enter-active {
  animation: upMove 0.6s linear;
}
/* 离开的时候要激活的动画 */
.haha-leave-active {
  /* reverse 翻转 */
  animation: upMove 0.6s linear reverse;
}
@keyframes upMove {
  /* 定义动画关键帧 */
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>