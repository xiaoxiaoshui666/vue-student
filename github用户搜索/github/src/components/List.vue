<template>
  <div class="row">
    <h1 v-show="info.isFirst">欢迎光临</h1>
    <h1 v-show="info.isLoading">请稍后...</h1>
    <div
      v-show="info.users"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        users: [],
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      this.info = { ...this.info, ...dataObj }; // 通过字面量的形式合同对象，合并相同属性，把重名的属性以后面的为主
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
