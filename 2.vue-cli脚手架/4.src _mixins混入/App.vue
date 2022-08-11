<template>
  <div>
    <Ball />
    <WeGame />
  </div>
</template>

<script>
/* 
  功能: 可以把多个组件共用的配置提取成一个混入对象，提高代码的复用
  使用方式:
    第一步定义混合，例如:
    {
      data(){....},
      methods:{....}
      ...
    }
    第二步使用混入，例如:
      (1).全局混入:Vue.mixin(xxx)
      (2).局部混入: mixins: [ ' xxx ']
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