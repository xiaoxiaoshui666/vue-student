<template>
  <!-- 
    1.一种组件间通信的方式，适用于:子组件=>父组件
    2.使用场景:A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中)。
    3.绑定自定义事件:
      1.第一种方式，在父组件中:<Student @getStudentAge="getAge"/>
      2.第二种方式，在父组件中:
          <Student ref="demo" / >
          mounted(){
            this.$refs.demo.$on( 'getStudentAge',this.test)
            // (this.test)这个函数里面的this指向该事件的调用组件，所以如果写成函数就用箭头函数指向外层这个组件实例
          }
      3.若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。
    4.触发自定义事件:this.$emit( 'getStudentAge ',数据)
    5.解绑自定义事件this.$off( 'getStudentAge ')
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符。
    7.注意:通过this.$refs.xxx.$on( 'atguigu ',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题
   -->
  <div class="App">
    <h1>{{ msg }}</h1>
    <!--  通过 父组件给子组件传递 函数类型的props 实现子给父数据 -->
    <School :getSchollCity="getSchollCity" />

    <!-- 通过 父组件给子组件绑定自定义事件 也可以实现子给父数据 -->
    <!-- 1. v-on 在Student个组件标签上 所以就是给Student组件的实例vc上绑定事件 -->
    <!-- 给谁绑定的事件就找谁触发 -->

    <!-- ①通过v-on绑定自定义事件 -->
    <!-- <Student @getStudentAge="getAge" /> -->

    <!-- ②通过ref可以得到该组件实例vc来绑定事件 -->
    <Student ref="getStudent" />

    <!-- <Student @getStudentAge="getAge" @click.native="show" />想在组件上用原生事件需要加.native -->
    <h2>学生的名字是：{{ studentage }}</h2>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  data() {
    return {
      msg: "来看看我的学校",
      studentage: "",
    };
  },
  components: { School, Student },
  methods: {
    getSchollCity(city) {
      console.log("App接收到了school城市:" + city);
    },
    // 2. 要执行的自定义事件函数
    getAge(age, ...params) {
      console.log("App接收到了student年纪" + age, "___________" + params);
      this.studentage = age;
    },
    show() {
      console.log(111);
    },
  },
  mounted() {
    // console.log(this.$refs.getAge); 1. 通过ref拿到Student组件实例vc
    // 注意加this
    this.$refs.getStudent.$on("getStudentAge", this.getAge);
    /*  注意点：this.$refs.getStudent.$on("getStudentAge",(age, ...params) => {
      // 若是普通函数则此this是哪个组件定义的自定义事件 this就是谁的实例vc  写成箭头函数就指向外层的this则是App的vc
      console.log("App接收到了student年纪" + age, "___________" + params);
      this.studentage = age;
    });  */
  },
};
</script>
<style>
.App {
  background-color: #bbb;
}
</style>