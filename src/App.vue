<template>
  <div class="app">
    <NavBar />
    <InformationData></InformationData>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import InformationData from "./components/InformationData.vue";

export default {
  name: "App",
  components: {
    NavBar,
    InformationData,
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
