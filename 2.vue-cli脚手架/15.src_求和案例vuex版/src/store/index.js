// store文件用于创建vuex中的最核心的store  ————相当于新开的了一家饭店
import Vue from 'vue'
import Vuex from 'vuex'

// 在vue里面use一下vuex  要写在new Vuex.Store() 的前面
Vue.use(Vuex)  //一旦安装并且use了vuex，那么当创建了vm的时候就可以传入store配置项r然后vm和vc就能找到 该配置项的 $store

// 准备 actions 用于响应组件中打的动作  ————相当于服务员
const actions = {
    // context 相当于简洁版的store里面有我们需要的dispatch，commit函数
    /* jia(context, value) {  
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    }, */
    jiaOdd(context, value) {
        console.log(context);
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    }
}
// 准备 mutations 用于操作数据(state)  ————相当于厨师
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
// 准备 state 用于存储数据             ————相当于菜
const state = {
    sum: 0
}

// getters 用于将state中的数据进行加工  ————相当于computed计算属性
// 在组件中展示用{{ $store.getters.bugSum }}
const getters = {
    bigSum(state) {
        return state.sum * 9
    }
}
// 创建并暴露store配置项，并管理这里对象
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})