<template>
  <div class="color">
    <h2>{{ name }}</h2>
    <h2>{{ city }}</h2>
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
};
</script>

<style>
.color {
  background-color: green;
}
</style>