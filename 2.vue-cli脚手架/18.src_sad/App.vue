<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
/*  1. 如果写成这种模块样式的配置store可以方便更好的维护
  const countAbout = { 
    namespaced: true,   // 5. 开启命名空间 使其成为带命名空间的模块 可以读取
    actions: {},
    mutations: {},
    state: {sum:1},
    getters: {},
  }
 2. 暴露 export default new Vuex.Store({ modules: {countAbout: countAbout} })  
 3. 此时的sum数据在 this.$store.state.countAbout.sum  因为已经指定了数据在countAbout模块里
    而 actions和mutations 里面的方法也指定哪个命名空间包裹，需要在 /前面在相同的分类， 而 / 后面才是需要调用的函数名
 4. 如果用mapState() 时，需要指定哪个命名空间 ...mapState('countAbout',['sum'])
    同理用mapActions()和 mapMutations() 需要指定命名空间 ...mapActions('countAbout', {})
*/
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Count, Person },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
</style>