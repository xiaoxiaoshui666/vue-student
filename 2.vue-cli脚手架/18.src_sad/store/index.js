// store文件用于创建vuex中的最核心的store  ————相当于新开的了一家饭店
import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './countAbout'
import personAbout from './personAbout'

// 在vue里面use一下vuex  要写在new Vuex.Store() 的前面
Vue.use(Vuex)

export default new Vuex.Store({  // 将store暴露出去
    modules: {   // 注意要用modules模块包裹包裹
        countAbout,
        personAbout
    }
})