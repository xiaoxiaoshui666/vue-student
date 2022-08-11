<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
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
        <input type="text" />
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
  // 路由组件生命周期钩子
  // 路由组件激活时触发
  activated() {
    console.log("激活4");
  },
  // 路由组件失活时触发
  deactivated() {
    console.log("失活4");
  },
};
</script>

<style>
</style>