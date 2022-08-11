// 人员列表相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADDLIST', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADDLIST(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '小明' },
            { id: '002', name: '小刚' },
        ]
    },
    getters: {},
}