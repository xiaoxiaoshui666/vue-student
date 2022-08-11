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
/*    
  1. 传递query参数  字符串形式和对象形式
     ①.<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">跳转</router-link>
     ①.<!-- <router-link :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            }
            }">
            跳转
            </router-link>
  2. 接收参数：$route.query.id 
  3. 命名路由
    (1)在router/index.js文件 路由规则里 {
                            name：'details'  // 给此路由命名
                            path: "detail",
                            component: Detail,
                        }
    (2)<router-link :to="{
          name：'details',   不用写繁琐的路径
          query: {
            id: m.id,
            title: m.title,
          }
        }">  跳转
        </router-link> 
  4. 编程式路由  this.$router.push(...) 不借助<router-link>实现路由的跳转，让路由跳转 更灵活
      .push() 有痕   .replace() 无痕    .forward() 前进   .back() 后退     .go() 指定页数
  */
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>