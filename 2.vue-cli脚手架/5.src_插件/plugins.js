// 1. 向外暴露一个插件的对象，对象里面必须有 install这个方法
export default {
    // 第一个参数为Vue构造函数
    install(Vue, a, b) {
        console.log(Vue, a, b);
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局自定义指令
        Vue.directive('fbind', {
            bind(el, binding) {  // 指令与元素成功绑定时(一上来)
                el.value = binding.value
            },
            inserted(el, binding) {  // 指令所在元素被插入页面时
                el.focus() // 自动获取焦点
            },
            update(el, binding) {   // 指令所在的模板被重新解析时
                el.value = binding.value
            },
        })
        // 全局混入
        Vue.mixin({
            data() {
                return {
                    height: '179cm'
                }
            }
        });
        // 在Vue构造函数的原型对象上添加方法
        Vue.prototype.hi = () => { alert('hi') }
    }
}