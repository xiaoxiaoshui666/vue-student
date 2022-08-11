<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 1. 申明接收params参数  在route文件里 路由规则中
      {
        name:"ThisMessage",   命名路由
        path: "detail/:id/:title",    要提供一个占位符申明
        component: Detail,
      }
    2.  跳转路由携带params参数  to的字符串形式 或者 对象形式
      ①. <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
      ②. <router-link
          :to="{
            name: 'ThisMessage',  携带params参数用对象形式 路径必须用 name不然报错
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
    3. 使用 {{ $route.params.id }}
      */
/* 
     props 参见 ./route/index.js
*/
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>