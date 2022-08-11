<template>
  <div class="container">
    <Category title="游戏">
      <!-- 数据在组件的自身，但根据数据生成的结结构需要组件的使用者来决定。 -->
      <!-- 作用域插槽 想要接受子作用域的数据 必须用 template标签 -->
      <!-- 旧API写法 scope  slot-scope 新API写法  v-slot  -->
      <!-- 具名插槽用作用域传值 v-slot:center="datas"  可简写为 #center="datas" -->
      <!-- 用v-slot接收一个对象datas，里面包含了插槽传过来的games和hello    datas == {games: ["王者", "英雄联盟", "穿越火线", "QQ飞车"], hello: "未满18岁禁止游戏"}-->
      <template v-slot="datas">
        <ol>
          <li v-for="(gamesItem, index) in datas.games" :key="index">
            {{ gamesItem }}
          </li>
        </ol>
        <h2>{{ datas.hello }}</h2>
      </template>
    </Category>

    <Category title="游戏">
      <!-- ES6的解构赋值，只用对象里面的games属性，可以把games解构出来 -->
      <template v-slot="{ games }">
        <ol>
          <li v-for="(gamesItem, index) in games" :key="index">
            {{ gamesItem }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template v-slot="{ games }">
        <h4 v-for="(gamesItem, index) in games" :key="index">
          {{ gamesItem }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>