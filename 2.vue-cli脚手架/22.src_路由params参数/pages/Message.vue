<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--2. 跳转路由携带params参数 字符串形式 或者 对象形式-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.title }
        </router-link> -->
        <router-link
          :to="{
            name: 'ThisMessage', // 如果用对象形式 路径必须用 name不然报错
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
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
};
</script>

<style>
</style>