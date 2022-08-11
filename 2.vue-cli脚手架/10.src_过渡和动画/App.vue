<template>
  <div class="App">
    <Fruit />
    <Fruit2 />
    <Fruit3 />
    <Fruit4 />
  </div>
</template>

<script>
import Fruit from "./components/Fruit.vue";
import Fruit2 from "./components/Fruit2.vue";
import Fruit3 from "./components/Fruit3.vue";
import Fruit4 from "./components/Fruit4.vue";
export default {
  name: "App",
  components: { Fruit, Fruit2, Fruit3, Fruit4 },
};
</script>

<style>
</style>