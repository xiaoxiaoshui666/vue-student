<template>
  <div>
    <h3>这节课是:{{subject}}课</h3>
    <h3>今天值日的同学有:{{students}}</h3>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前和放大9倍:{{bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'    // 映射状态
export default {
  name: "Count",
  data() {
    return {
      n: 1
    };
  },
  computed:{
    // 借用mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({subject:'subject',students:'students',sum:'sum'}),

    // 借用mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['subject','students','sum']),
    // 借用mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    /* increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    }, */
    // mapMutations()函数调用后是对象，...会自动把他解析为上两个函数，
    // 同时注意参数 this.n 需要在模板中绑定事件时传递好参数，否则参数默认就为事件对象
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    // 也可以写成对象形式，但是调用的方法要和mutations里面的方法名一致
    // ...mapMutations(['JIA','JIAN']),

    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n); 
    } */
    
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}) // mapActions 同理
  }
}
</script>

<style scoped>
button,
select {
  margin-right: 10px;
}
</style>