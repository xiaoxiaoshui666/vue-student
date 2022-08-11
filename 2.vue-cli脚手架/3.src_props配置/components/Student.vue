<template>
  <div class="color">
    <h1>{{ msg }}</h1>
    <h2>学生的名字：{{ name }}</h2>
    <h2>学生的性别：{{ sex }}</h2>
    <h2>学生的年龄：{{ uage }}</h2>
    <button @click="show">点击</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一名三好学生",
      uage: this.age, // 如果想要修改不能直接修改，可以新定义一个 数据来接收，
    };
  },
  // 2. props:[ ] 接收数据 必须是数组形式的
  props: ["name", "age", "sex"],
  // props的数据会优先渲染，然后再渲染data上的数据
  // 如果与data上的数据重名为报错
  methods: {
    show() {
      console.log(this.name, this.age, this.sex); // vc实例上就直接挂了这三个数据。
      this.uage++;
    },
  },
};
</script>

<style>
.color {
  background-color: yellow;
}
</style>