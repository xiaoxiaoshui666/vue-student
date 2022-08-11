<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由携带query参数，to的字符串写法  :to="`/路径?key=value&key2=value2`" -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
          {{ m.title }}
        </router-link> -->

        <!-- 跳转路由携带query参数，to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <!-- 编程式路由导航  作用：不借助<router-link>实现路由的跳转，让路由跳转 更灵活 -->
        <!-- this.$router.push() 有痕  this.$router.replace() 无痕 -->
        <!-- this.$router.forward() 前进  this.$router.replace() 后退    go() 指定页数 -->
        <button @click="pushShow(m)">跳转</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "01", title: "消息1" },
        { id: "02", title: "消息2" },
        { id: "03", title: "消息3" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        path: "/home/message/detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>