<template>
  <div>
    <h1>Find here the results of yesterday's games</h1>
    <div class="past-match" v-for="(match, index) in filteredPastMatches" :key="index">
      <PastMatches 
      :thePastGame="match" />
    </div>
  </div>
</template>


<script>
import PastMatches from './pastMatches.vue'
import { getPreviousMatches } from '@/services/api/E-SportAPI.js'

export default {
  name: 'PreviousMatches',
  components: {
    PastMatches,
  },
  created: function() {
    this.getPastMatches();
    this.compareChoicesWithPastMatches();
    this.updateGlobalScore();
  },
  data() {
    return {
      PastMatches: [], 
      totalScore: 0,
      globalScore: parseInt(localStorage.getItem('globalScore') || 0),
    };
  },

  methods: {
    getPastMatches() {
      getPreviousMatches()
          .then((data) => {
            // console.log(data);
            let today = new Date();
            let yesterday = new Date();
            yesterday.setDate(today.getDate() - 4 );
            let day = yesterday.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            let month = yesterday.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let year = yesterday.getFullYear();
            this.PastMatches = data.filter((games) => games.begin_at && games.begin_at.startsWith(year + "-" + month + "-" + day));
            console.log(year + "-" + month + "-" + day);
            console.log(this.PastMatches);
            this.compareChoicesWithPastMatches();
          })
          .catch((error) => {
            console.error(error);
          });
    },
    compareChoicesWithPastMatches() {
    // Récupérer le tableau choices à partir de localStorage
    const choices = JSON.parse(localStorage.getItem('choices'));
    console.log("le fameux tableau :", choices);
    console.log("compareChoicesWithPastMatches is called ! ")

      // Parcourir les matchs passés
      const previousMatches = this.PastMatches;
      console.log("je suis le tableau des matchs",previousMatches);
      // const scoreCalculated = localStorage.getItem('scoreCalculated');

      // if(choices && previousMatches && !scoreCalculated){
      previousMatches.forEach((thePastGame) => {
        console.log("normal");
      // Parcourir les choix de l'utilisateur
      choices.forEach((choice) => {
      console.log("parcours des choix");
      // Vérifier si l'id du choix est le même que celui d'un match passé
      if (choice.matchId === thePastGame.id) {
        thePastGame.userChoice = choice.selectedTeamName;
        console.log("correspondance de matchs");
        // Vérifier si le choix de l'utilisateur est correct
        if(choice.TeamId[0].opponent.name === choice.selectedTeamName){
          console.log("ok name correspond 1");
          if (choice.TeamId[0].opponent.id === thePastGame.games[0].winner.id) {
            // Ajouter 3 points à l'utilisateur
            console.log("big brain");
            thePastGame.userGain = 3;
            this.totalScore += 3;
          } else {
            // Enlever 5 points à l'utilisateur
            console.log("big loser 1");
            thePastGame.userGain = -5;
            this.totalScore -= 5;
          }
      }
      else {
        console.log("ok name correspond 2");
        if(choice.TeamId[1].opponent.id == thePastGame.games[0].winner.id){
            // Ajouter 3 points à l'utilisateur
            console.log("big brain");
            thePastGame.userGain = 3;
            this.totalScore += 3;
          } 
          else {
            // Enlever 5 points à l'utilisateur
            console.log("big loser 2");
            thePastGame.userGain = -5;
            this.totalScore -= 5;
          }
      }
      
      }
    });
  });
  console.log("le score total :", this.totalScore);
  // localStorage.setItem('scoreCalculated',true)
// }
  },
  updateGlobalScore() {
      this.globalScore += this.totalScore;
      console.log("global score = ", this.globalScore);
      localStorage.setItem('globalScore', this.globalScore);
    },

  },
  watch: {
    globalScore: function(newScore) {
      console.log("New global score = ", newScore);
    },
  },

  computed: {
    filteredPastMatches() {
      return this.PastMatches;
    }
  },
};
</script>

<style>
h1 {
  color: rgb(0, 0, 0);
  padding-top: 50px;
}
</style>
