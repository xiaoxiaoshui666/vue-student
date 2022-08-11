<template>
  <div>
    <Count />
  </div>
</template>

<script>
/* 
  mapActions方法:用于帮助我们生成与actions对话的方法，即:包含 $store.dispatch(xxx)的函数
  mapMutations:用于帮助我们生成与mutations对话的方法，即:包含 $store.commit(xxx)的函数
  注意：mapActions，mapMutations是store里的对象名，不要写成里面的函数名
*/
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>