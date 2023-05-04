<template>
  <div class="info-icon-container">
    <span class="info-icon" @mouseenter="isHovered = true" @mouseleave="isHovered = false" @click="showPopup = true" :class="{ 'is-hovered': isHovered }">ℹ️</span>
    <div class="popup" v-if="showPopup">
      <button class="close-button" @click="showPopup = false">X</button>
      <p>This application makes it possible to make bets on League of legends esport matches and get the highest score, as well as to browse the leagues and the teams of league of legends.</p>
      <p>The DAY BET page is to select your bets by clicking on the team name </p>
      <p>The LEAGUE page is to browse the different leagues and teams </p>
      <p>The HISTORICAL is to see the results of yesterday’s matches as well as the points won by the choice </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      isHovered: false,
    };
  },
};
</script>

<style>
.info-icon-container {
  position: fixed;
  right : 20px;
  bottom: 1%;
  
}

.info-icon {
  display: block;
  font-size: 2rem;
  margin-right: 10px;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
}

.info-icon.is-hovered {
  opacity: 1;
  cursor: pointer;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #282A35;
  padding: 10px;
  /* z-index: 100000000; */
  border-radius: 15px;
}

.popup  p{
  color: #fefefe;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  align-self: flex-end;
  font-size: 2vw;
  font-weight: bold;
  color: #fefefe;
  border: none;
  transition: color 0.2s ease-in-out;
  background-color:#282A35;
  border-radius: 15px;

}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
