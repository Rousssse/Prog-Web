<template>
  <div class="div-content">
  <div class="matches" :class="{ 'selected': selected }">
    <div class="event-time">
      <p> {{ theGame.scheduled_at.slice(11,16) }}</p>
    </div>
    <img class="image_opponent0" v-bind:src="theGame.opponents[0].opponent.image_url"/>
    <div class="matches-body1" @click="onLeftClick" >
      <h2 class="name1">{{ theGame.opponents[0].opponent.name }}</h2>
    </div>
    <div class="mid-items">
      <Vue3Lottie class="image_vs" :animationData="versusJSON" :height="100" :width="100"/>
      <p class="league-name"> {{ theGame.league.name }}</p>
    </div>
    <div class="matches-body2" @click="onRightClick">
      <h2 class="name2">{{ theGame.opponents[1].opponent.name }}</h2> 
    </div>
    <img class="image_opponent1" v-bind:src="theGame.opponents[1].opponent.image_url"/>
    
  </div>
  <div v-if="selected" class="winner-choice">
      <p class="text-win"> Selected Team : </p>
      <img v-bind:src="selectedTeam.image_url"/>
      <p class="text-win">{{ selectedTeam.name }}</p>
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
 
 @media only screen and (min-width: 1024px) {
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
    margin-right: 5px;
  }
  
  .matches img {
  width: 10vw;
  height: 10vw;
  object-fit: contain; 
}

.image_opponent1 {
  margin-right: 50px;
  margin-left: 20px;
}

.image_opponent0 {
  margin-left: -100px;
  margin-right: -20px;
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
    z-index: 1;
  }
  
  .mid-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  z-index: 0;
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
    background: linear-gradient(to right,  rgb(195, 148, 210),rgb(133, 96, 192));
    border-radius: 10px;
    height: 12vw;
    width: 16vw;
  }
  .winner-choice img {
    width: 6vw;
    height: 6vw;
    margin-bottom: -20px;
    margin-top: -15px;

  }

  .text-win{
    font-size: 1.2vw;
  }
}

  @media only screen and (max-width: 1023px) {
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
    margin-right: 5px;
  }
  
  .matches img {
  width: 8vw;

}
  
  
  .matches-body1 h2 {
    font-size: 3vw;
    color: white;
    margin-left: 10px;
  }
  
  .matches-body1 p {
    font-size: 4vw;
    color: whitesmoke;
  }

  .matches-body2 h2 {
    font-size: 3vw;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .matches-body2 p {
    font-size: 4vw;
    color: whitesmoke;
  }

  h2:hover {
    color: #8551da;
  }
  
  
  .event-time {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-size: 2vw;
    color: whitesmoke;
    padding-left: 10px;
    padding-top: 5px;
    padding-right: 0;
    z-index: 1;

  }
  
  .mid-items {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    z-index: 0;
  }

  
  .mid-items p {
    font-size: 2vw;
    color: whitesmoke;
    margin-top: 10px;
  }

  .image_vs {
    height: 8vw;
    width: 8vw;
  }

  .image_opponent1 {
  margin-right: 4vw;
  margin-left: 1vw;
}
  
  .league-name {
    color: whitesmoke;
  }

  .winner-choice {
    color :whitesmoke;
    background: linear-gradient(to right, rgb(195, 148, 210),rgb(133, 96, 192));
    border-radius: 10px;
    height: 14vw;
    width: 14vw;
  }
  .winner-choice img {
    width: 4vw;
    height: 4vw;
    margin-bottom: -5px;

  }

  .text-win{
    font-size: 1.5vw;
  }

} 
 
</style>


  
  