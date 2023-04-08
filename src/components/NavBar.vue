<template>
  <div class="navbar">
    <nav class="navigation-bar">
      <ul>
        <li :class="{ active: $route.path === '/' }"><router-link to="/">PRESENTATION</router-link></li>
        <li :class="{ active: $route.path === '/page3' }"><router-link to="/page3">DAY BET</router-link></li>
        <li :class="{ active: $route.path === '/page2' }"><router-link to="/page2">LEAGUE</router-link></li>
        <li :class="{ active: $route.path === '/page4' }"><router-link to="/page4">HISTORICAL</router-link></li>
        <li><p class="score">SCORE :</p></li>
        <li><p>0</p></li>
        <li><Vue3Lottie :animationData="coinJSON" :height="60" :width="60"/></li>
      </ul>
    </nav>
  </div>
</template>


<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import coinJSON from '../assets/coin.json'
export default {
  name: 'NavBar',
  components: {
    Vue3Lottie,
  },
  data (){
    return {
      coinJSON,
    }
  },
}
</script>


<style>
.navbar {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  background-color: #282A35;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #282A35;
}

nav li {
  padding: 10px;
  
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  transition: 0.3s;
  padding: 10px;
  border-radius: 5px;
}

nav a:hover {
  background-color: #0449aa;
}

nav li.active a {
  background-color: #0449aa;
}

nav p.score {
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  margin-right: 10px;
}

</style>
