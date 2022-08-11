<template>
  <div>
    <h1>这节课是:{{ subject }}课</h1>
    <h1>今天值日的同学有:{{ students }}</h1>
    <h3 style="color: red">Person组件中同学总人数是:{{ personList.length }}</h3>
    <h3>当前求和为:{{ sum }}</h3>
    <h3>当前和放大9倍:{{ bigSum }}</h3>
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // namespaced: true  需要开启命名空间指定map所指定的模块
    ...mapState("countAbout", ["subject", "students", "sum"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style scoped>
button,
select {
  margin-right: 10px;
}
</style>