<template>
  <div class="App">
    <h1>我的水果</h1>
    <Fruit v-for="item in fruits" :key="item.id" :item="item" />
  </div>
</template>

<script>
/* 
  nextTick
    1.语法:this.$nextTick(回调函数)
    2.作用:在下一次DOM更新结束后执行其指定的回调。
    3.什么时候用:当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
*/
import Fruit from "./components/Fruit.vue";
export default {
  name: "App",
  data() {
    return {
      fruits: [
        { id: 1, uname: "西瓜", color: "green" },
        { id: 2, uname: "苹果", color: "red" },
        { id: 3, uname: "桔子", color: "orange" },
      ],
    };
  },
  components: { Fruit },
  mounted() {
    this.$bus.$on("theemit", (id, data) => {
      this.fruits.forEach((value) => {
        if (value.id === id) value.uname = data;
      });
    });
  },
};
</script>

<style>
</style>