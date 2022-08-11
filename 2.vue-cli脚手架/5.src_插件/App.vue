<template>
  <div>
    <Ball />
    <WeGame />
  </div>
</template>

<script>
/* 
  功能:用于增强Vue
  本质:包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
  定义插件:
    {
      install(vue, options) {}
    }
  使用插件：
  Vue.use()
*/
import Ball from "./components/Ball";
import WeGame from "./components/WeGame";
export default {
  name: "App",
  components: { Ball, WeGame },
  data() {
    return {};
  },
};
</script>