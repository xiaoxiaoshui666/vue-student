// 求和功能相关的配置
export default {
    namespaced: true, // 命名空间，为true时，countAbout才能被mapState里面的值读取
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        subject: '数学',
        students: '小明',
    },
    getters: {
        bigSum(state) {
            return state.sum * 9
        }
    },
}