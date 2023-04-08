<template>
  <div class="pastmatches">
    <div v-if="thePastGame && thePastGame.games && thePastGame.games[0] && thePastGame.games[0].winner">  
      <p> {{thePastGame.name }} </p>
      <div class="match-info">
        <div class="winner-info">
          <img v-if="thePastGame.games[0].winner.id === thePastGame.opponents[0].opponent.id" v-bind:src="thePastGame.opponents[0].opponent.image_url"/>
          <img v-else v-bind:src="thePastGame.opponents[1].opponent.image_url"/>
          <p v-if="thePastGame.games[0].winner.id === thePastGame.opponents[0].opponent.id">{{ thePastGame.opponents[0].opponent.name }}</p>
          <p v-else>{{ thePastGame.opponents[1].opponent.name }}</p>
        </div>
        <div class="user-choice">
          <p>Votre choix :</p>
          <p>{{ thePastGame.userChoice }}</p>
        </div>
        <div class="user-gain">
          <p>Gain :</p>
          <p>{{ thePastGame.userGain }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name : 'PastMatches',
  props : {
    thePastGame : {},
  },
}
</script>

<style>
.pastmatches {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 80%; 
  margin: 10px auto; 
  background: linear-gradient(to right, rgb(92, 238, 180), rgb(253, 67, 67));
  box-shadow: 0px 1px 0px 2px rgb(252, 252, 252); 
}

.pastmatches p {
  margin: 10px 0;
}

.match-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.match-info img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.match-info p {
  margin: 0;
}

.winner-info, .user-choice, .user-gain {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.winner-info p {
  font-weight: bold;
}

.user-choice p, .user-gain p {
  margin-left: 20px;
}
</style>
