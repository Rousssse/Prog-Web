<template>
  <div class="app">
    <NavBar />
    <InformationData></InformationData>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import InformationData from './components/InformationData.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    InformationData
  },
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
}

.app {
  background-color: hsla(0, 0%, 100%, 0.974);
  height: 100%;
}

body {
  background-color: hsla(0, 0%, 100%, 0.974);
  margin: 0;
  padding: 0;
}


</style>
