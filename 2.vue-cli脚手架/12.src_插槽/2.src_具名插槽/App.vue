<template>
  <div class="container">
    <Category title="美食">
      <!-- 标签要用一个 slot属性 来表示对应的插槽 name名 ，坑的名 -->
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">百度官网</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(gamesItem, index) in games" :key="index">
          {{ gamesItem }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.4399.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">视频</a>
        <a href="http://www.baidu.com">电影</a>
        <a href="http://www.baidu.com">电视剧</a>
      </div>
      <h4 slot="footer">更多...</h4>
      <!-- 如果这里用<template></template>标签使用插槽时，里面就要用v-slot:footer -->
      <!-- <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">视频</a>
          <a href="http://www.baidu.com">电影</a>
          <a href="http://www.baidu.com">电视剧</a>
        </div>
        <h4>更多...</h4>
      </template> -->
    </Category>
  </div>
</template>

<script>
import Category from "./components/Count.vue";
export default {
  name: "App",
  data() {
    return {
      foods: ["烧烤", "麻辣香锅", "过桥米线", "兰州拉面"],
      games: ["王者", "英雄联盟", "穿越火线", "QQ飞车"],
      films: ["《龙族1》", "《龙族2》", "《龙族3》", "《龙族4》"],
    };
  },
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>