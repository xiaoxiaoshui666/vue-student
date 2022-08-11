<template>
  <div class="School">
    <h2>{{ name }}</h2>
    <h2>{{ city }}</h2>
    <button @click="sendSchoolcity(city)">点击给APP学校的城市</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "第三中学",
      city: "hubei",
    };
  },
  props: ["getSchollCity"],
  methods: {
    sendSchoolcity(city) {
      // 子传父数据先让父传子一个方法
      this.getSchollCity(city);
    },
  },
};
</script>

<style>
.School {
  background-color: green;
}
</style>