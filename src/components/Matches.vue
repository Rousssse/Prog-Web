<template>
  <div class="div-content">
    <div v-if="selected" class="winner-choice">
      <p class="text-win"> Selected Team : </p>
      <img v-bind:src="selectedTeam.image_url"/>
      <p class="text-win">{{ selectedTeam.name }}</p>
    </div>
  <div class="matches" :class="{ 'selected': selected }">
    <div class="event-time">
      <p> {{ theGame.scheduled_at.slice(11,16) }}</p>
    </div>
    <img v-bind:src="theGame.opponents[0].opponent.image_url"/>
    <div class="matches-body1" @click="onLeftClick" >
      <h2 class="name1">{{ theGame.opponents[0].opponent.name }}</h2>
    </div>
    <div class="mid-items">
      <Vue3Lottie :animationData="versusJSON" :height="100" :width="100"/>
      <p class="league-name"> {{ theGame.league.name }}</p>
    </div>
    <div class="matches-body2" @click="onRightClick">
      <h2 class="name2">{{ theGame.opponents[1].opponent.name }}</h2> 
    </div>
    <img v-bind:src="theGame.opponents[1].opponent.image_url"/>
  </div>
  
  </div>

</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import versusJSON from '../assets/versus.json'

export default{
  name : 'MatchesX',
  components: {
    Vue3Lottie,
  },
  props : {
    theGame : {},

  },
  data (){
    return {
      versusJSON,
      selected: false,
      selectedTeam: null,
      matchId : null,
    }
  },
  methods: {
    onLeftClick() {
      console.log('Click on the left side');
      this.selected = true;
      this.selectedTeam = this.theGame.opponents[0].opponent;
      this.$emit('SelectedTeam', this.selectedTeam.name);
      this.$emit("LeftClick");
    },
    onRightClick() {
      console.log('Click on the right side');
      this.selected = true;
      this.selectedTeam = this.theGame.opponents[1].opponent;
      this.$emit('SelectedTeam', this.selectedTeam.name);
      this.$emit('RightClick');
    },
  },
}
</script>
  
  <style scoped >
 
 .div-content {
  display: flex;
  align-items: center;
  flex-direction: row;
 }
  
  .matches {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 80%; 
    margin: 10px auto; 
    background: linear-gradient(to right, rgb(92, 170, 238), rgb(253, 67, 67));
    box-shadow: 0px 1px 0px 2px rgb(252, 252, 252); 
    
  }
  
  .matches > * {
    flex-basis: 33.33%; 
    flex-grow: 1; 
    box-sizing: border-box;
    text-align: center;
    padding-right: 150px;
  }
  
  .matches img {
  width: 150px;
  height: 150px;
  object-fit: contain; 
}
  
  
  .matches-body1 h2 {
    font-size: 24px;
    color: white;
    margin-left: 10px;
  }
  
  .matches-body1 p {
    font-size: 30px;
    color: whitesmoke;
    margin-top: 10px;
  }

  .matches-body2 h2 {
    font-size: 24px;
    color: white;
    margin-left: 10px;
  }
  
  .matches-body2 p {
    font-size: 30px;
    color: whitesmoke;
    margin-top: 10px;
  }

  .matches-body2 p {
    font-size: 30px;
    color: whitesmoke;
    margin-top: 10px;
  }

  h2:hover {
    color: #8551da;
  }
  
  
  .event-time {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-size: 16px;
    color: whitesmoke;
    padding: 30px;
  }
  
  .mid-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

  
  .mid-items p {
    font-size: 20px;
    color: whitesmoke;
    margin-top: 10px;
  }
  
  .league-name {
    color: whitesmoke;
  }

  .winner-choice {
    color :whitesmoke;
    background: linear-gradient(to right, rgb(133, 96, 192),rgb(183, 137, 197));
    border-radius: 10px;
    height: 160px;
    width: 300px;
  }
  .winner-choice img {
    width: 80px;
    height: 80px;
    margin-bottom: -20px;
    margin-top: -15px;

  }

  .text-win{
    font-size: 20px;
  }

</style>


  
  