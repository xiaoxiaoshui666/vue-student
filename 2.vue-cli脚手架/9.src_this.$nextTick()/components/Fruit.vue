<template>
  <div class="Fruit">
    <li>
      <span>{{ item.id }}</span>
      <span class="thespan" v-show="!item.edit">{{ item.uname }}</span>
      <input
        class="thespan"
        v-show="item.edit"
        type="text"
        :value="item.uname"
        @blur="blurspan($event, item)"
        ref="theinput"
      />
      <span>{{ item.color }}</span>
      <button v-show="!item.edit" @click="show(item)">改变水果</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Fruit",
  props: ["item"],
  methods: {
    show(item) {
      if (item.hasOwnProperty("edit")) {
        item.edit = true;
      } else {
        this.$set(item, "edit", true);
      }
      // 想让input一出现就获取焦点
      // Vue一般函数会在函数体执行完毕之后再渲染到页面所以不能直接获取焦点
      // nextTick的回调函数会在DOM节点更新后执行  数据更新 ——>渲染页面——>执行nextTick里的函数
      this.$nextTick(() => this.$refs.theinput.focus());
    },
    blurspan(e, item) {
      item.edit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("theemit", item.id, e.target.value);
    },
  },
};
</script>

<style>
li {
  list-style-type: none;
  background-color: #bbb;
  font-size: 20px;
  line-height: 40px;
  width: 400px;
}
button {
  float: right;
  display: none;
  margin-top: 8px;
}
li:hover button {
  display: block;
}
span {
  padding: 0 20px;
}
</style>