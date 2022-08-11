<template>
  <div>
    <School ref="title2" />
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">输出校长</button>
  </div>
</template>

<script>
/* 
  1.被用来给元素或子组件注册引用信息（id的替代者)
  2.应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式:
      打标识: <h1 ref="xxx">.....</h1〉或<School ref="xxx"x</School>
      获取: this.$refs.xxx
*/
import School from "./components/School";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "我们的校长",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title); // <h1>我们的校长</h1>
      console.log(this.$refs.title2); // 子组件School的实例对象
      console.log(this); // 当前this是 父组件App的组件实例
    },
  },
};
</script>