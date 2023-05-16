<template>
  <div class="navigation-container" v-on:score-updated="updateScore">
    <nav class="navigation-bar">
      <ul>
        <li :class="{ active: $route.path === '/' }">
          <router-link to="/">DAY BET</router-link>
        </li>
        <li :class="{ active: $route.path === '/page2' }">
          <router-link to="/page2">LEAGUE</router-link>
        </li>
        <li :class="{ active: $route.path === '/page3' }">
          <router-link to="/page3">HISTORICAL</router-link>
        </li>
        <li><p class="score">SCORE :</p></li>
        <li>
          <p class="score">{{ totalScore }}</p>
        </li>
        <li>
          <Vue3Lottie
            class="image_coin"
            :animationData="coinJSON"
            :height="60"
            :width="60"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import coinJSON from "../assets/coin.json";
export default {
  name: "NavBar",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      coinJSON,
      totalScore: 0,
    };
  },
  methods: {
    updateScore(score) {
      this.totalScore = score;
    },
  },
  mounted() {
    this.totalScore = localStorage.getItem("globalScore") || 0;
    //console.log("totalScore in navbar:", this.totalScore);
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .navigation-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }
  .navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    padding-left: 7px;
    width: 100%;
    list-style: none;
    background-color: #282a35;
    white-space: nowrap;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 5px;
    margin: 0;
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
  }

  nav li {
    font-size: 2.2vw;
    padding: 5px 10px;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
  }
}

@media only screen and (max-width: 1023px) {
  .navigation-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    padding-left: 7px;
    width: 100%;
    list-style: none;
    background-color: #282a35;
    white-space: nowrap;
    overflow-x: hidden;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 5px;
    margin: 0;
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
  }

  li {
    font-size: 3vw;
  }

  .image_coin {
    height: 8vw;
    width: 8vw;
  }
}
</style>
