<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "小明",
      age: 18,
    };
  },
};
</script>

<style>
.school {
  background-color: greenyellow;
}
</style>