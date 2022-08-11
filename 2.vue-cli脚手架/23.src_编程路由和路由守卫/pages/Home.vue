<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- replace 可取消历史记录，改变push模式，变为replace替换模式  无法后退前进-->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- keep-alive缓存路由组件，切组件时保持挂载不销毁  include 只缓存此组件 只能写组件名 -->
      <keep-alive include="Message">
        <router-view></router-view>
      </keep-alive>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>