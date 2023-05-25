<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
.app {
  height: 100%;
}

body {
  background-color: hsla(0, 0%, 100%, 0.974);
  margin: 0;
  padding: 0;
}
</style>
