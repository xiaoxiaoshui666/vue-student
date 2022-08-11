<template>
  <div class="container">
    <Search />
    <list />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "APP",
  components: { Search, List },
};
</script>

<style>
</style>
