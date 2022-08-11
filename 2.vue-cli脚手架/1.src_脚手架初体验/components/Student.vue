<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ city }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "第三中学",
      city: "湖北",
    };
  },
};
</script>

<style>
.student {
  background-color: yellow;
}
</style>