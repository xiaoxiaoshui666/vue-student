// 1. 定义一个公共的资源可供各个组件使用
export const mixture = {
    methods: {
        show() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('在混合mixin中的mounted被掉用');
    },
}
export const Thedata = {
    data() {
        return {
            player: '小新',
            age: "未成年"
        };
    },
}

