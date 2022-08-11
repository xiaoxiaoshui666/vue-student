<template>
  <div class="color">
    <!-- 插件中的全局过滤器 -->
    <h2>爱好的球类：{{ name | mySlice }}</h2>
    <h2>编号：{{ id }}</h2>
    <!-- 插件中的全局自定义指令 -->
    <input type="text" v-fbind:value="id" />
    <!-- 插件中的全局混入 -->
    <span>{{ height }}</span>
    <!-- 插件中在Vue构造函数的原型对象中定义的hello，在vm和vc中都能找到 -->
    <button @click="test">点击</button>
  </div>
</template>

<script>
export default {
  name: "Ball",
  data() {
    return {
      name: "篮球足球兵乓球",
      id: 24,
    };
  },
  methods: {
    test() {
      this.hi();
    },
  },
};
</script>

<style>
.color {
  background-color: yellowgreen;
}
</style>