<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <!-- 3. 通过点击触发事件 -->
    <button @click="sendStudentAge">点击给APP学生的年龄</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="age++">年纪增加</button>
    <button @click="deach">此组件vc生命周期销毁</button>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      name: "小明",
      age: 18,
    };
  },
  methods: {
    sendStudentAge() {
      // this是student组件的vc上有绑定的getAge事件事件
      // 4. 通过this.$emit("自定义事件名", 参数) 触发了 App上的getAge事件
      this.$emit("getStudentAge", this.age, 100, 99);
    },
    unbind() {
      this.$off("getStudentAge"); // 解绑指定的自定义事件
      // this.$off(["getStudentAge", "demo"]); // 解绑多个的自定义事件 用数组
      // this.$off(); // 解绑此vc实例上的所有自定义事件
    },
    deach() {
      this.$destroy(); // 销毁vc组件生命周期vc实例，自定义事件也会自动销毁
    },
  },
};
</script>

<style>
.student {
  background-color: yellow;
}
</style>