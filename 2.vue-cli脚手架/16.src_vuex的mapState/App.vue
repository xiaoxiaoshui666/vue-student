<template>
  <div>
    <Count />
  </div>
</template>

<script>
/* 
  mapState方法:用于帮助我们映射state中的数据为计算属性
  computed:{
    借用mapState生成计算属性：sum，school，subject(对象写法)
    ...mapState({sum:'sum', school:'school', subject:'subject'})
    // 当计算属性的函数名和数值名一样时可以用数组写法
    借用mapState生成计算属性：sum，school，subject(数组写法)
    ...mapState(['sum','school','subject'])
  }

  mapGetters方法:用于帮助我们映射getters中的数据为计算属性
  同理
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