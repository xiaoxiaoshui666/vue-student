<template>
  <div>
    <h3>这节课是：{{ subject }}课</h3>
    <h3>今天值日的同学有：{{ students }}</h3>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前和放大9倍：{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"; // 映射状态
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    /* subject() {
      return this.$store.state.subject
    },
    students() {
      return this.$store.state.students
    },
    sum() {
      return this.$store.state.sum
    }, */
    // 生成的是一个对象，里面包裹的三个函数
    // ... ES6 扩展运算符 取出对象所有可遍历属性然后拷贝到当前对象里  也把对象的每一组key，value展开放入此对象中

    // 借用mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({subject:'subject',students:'students',sum:'sum'}),

    // 借用mapState生成计算属性，从state中读取数据（数组写法）
    // 数组里面的数据必须是store里面有的
    ...mapState(["subject", "students", "sum"]),
    /* *********************************************************************** */
    /* bigSum() {
      return this.$store.getters.bigSum
    } */
    // 借用mapGetters生成计算属性，从getters中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'})

    // 借用mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style scoped>
button,
select {
  margin-right: 10px;
}
</style>