<template>
  <div class="App">
    <h1>学生</h1>
    <button @click="btn">学生数据</button>
    <button @click="btn2">汽车数据</button>
  </div>
</template>

<script>
/* 
  1. 同源策略：协议 ， 域名 ， 端口号
  2. 跨域： 
        1.cors： 后端发送携带特殊的响应头，这种会得到了浏览器的认可 （需要前后端配合）
        2.jsonp： 借用script标签的src属性，引入外部资源的时候不受同源策略的影响 （也需要前后端配合，且只能解决get跨域post不能解决 ）
        3.代理服务器： 请求数据时，先请求代理服务器，要求本机和代理服务器是同源策略，然后代理服务器请求后端服务器，再响应数据给代理服务器，代理服务器再把数据给本机，因为代理服务器和后端服务器都是属于后端服务器不属于ajax则不存在跨域问题，代理服务器起到了中介的作用
  3.代理服务器
      借用vue-cli：通过 vue.config.js 中的 devServer.proxy 选项来配置。
          方式1. module.exports = {
                  devServer: {
                  // 端口号要和访问的后端服务器端口号一致，告诉代理服务器一会要把请求转发给谁，后面不要加斜杠等后缀
                    proxy: 'http://localhost:5001' 
                  }
                }
          方式1.缺点：
            1.当 需要请求的资源 本身在public文件夹里面 就直接请求这个文件夹的资源，就不会再请求后端服务器了，不走代理，所以不能灵活的控制走不走代理
            2. 代理服务器只能配置一个代理不能配置多个

          方式2. module.exports = {
                  devServer: {
                    proxy: {   
                      '/api': {   // 匹配以'api'开头的路径
                        target: 'http://localhost:5001',  // 代理目标的基础路径
                        pathRewrite: { '^/api': '' },  // pathRewrite重写路径 正则
                        ws: true,
                        changeOrigin: true
                      },...
                }
*/
import axios from "axios";
export default {
  name: "App",
  methods: {
    btn() {
      // 方法1. 请求的是代理服务器所以是8080
      // axios.get("http://localhost:8080/student").then(
      // 方法2.
      axios.get("http://localhost:8080/demostudent/student").then(
        // 成功的回调
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败的回调
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    btn2() {
      axios.get("http://localhost:8080/democars/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>