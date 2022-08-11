# oneday

# 文件说明
|—— node_modules
|—— public
|   |—— favicon.ico   == >  页签图标
|   |__ index.html   == >  主页面
|—— src
|   |—— assets   == >  存放静态资源
|       |__ logo.png
|   |—— component   == >  存放一般组件
|       |__ HelloWorld.vue
|   |—— pages     == >    存放路由组件
|   |—— router    == >    路由文件
|       |__index.js
|   |—— store     == >    vuex文件
|       |__index.js
|   |—— App.vue   == >    汇总所有组件
|   |—— main.js   == >    入口文件
|—— .gitignore    == >  git版本管制忽略的配置
|—— babel.config.js   == >  babel的配置文件 如ES6转ES5
|—— package.json  == > npm包的说明书 用于配置包 采用的库，依赖等等
|—— package-lock.json  == > 包版本控制文件
|—— vue.config.js  == > 配置文件

# npm run serve 之后的执行顺序
1. npm run serve 然后就找到了main.js  引入了Vue文件， 引入了父组件App， new 了一个Vue实例vm
2, 父组件App 汇总了所有的组件
3. 在index.html展示






∟

