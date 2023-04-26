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
    const choices = JSON.parse(localStorage.getItem('choices'));
    console.log(choices);
    this.compareChoicesWithPastMatches();
  },
  data() {
    return {
      PastMatches: [], 
      totalScore: 0,
    };
  },

  methods: {
    getPastMatches() {
      getPreviousMatches()
          .then((data) => {
            console.log(data);
            let today = new Date();
            let yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
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
          })
          .catch((error) => {
            console.error(error);
          });
    },
    compareChoicesWithPastMatches() {
    // Récupérer le tableau choices à partir de localStorage
    const choices = JSON.parse(localStorage.getItem('choices'));
    console.log("compareChoicesWithPastMatches is called ! ")

    // Parcourir les matchs passés
    this.PastMatches.forEach((thePastGame) => {
      // Trouver le choix de l'utilisateur pour le match en cours
      const userChoice = choices.find((choice) => choice.matchId === thePastGame.id);

      // Si l'utilisateur a fait un choix pour le match en cours
      if (userChoice) {
        // Mettre à jour la propriété userChoice dans l'objet thePastGame
        thePastGame.userChoice = userChoice.choice;

        // Vérifier si le choix de l'utilisateur est correct
        if (thePastGame.games[0].winner && thePastGame.games[0].winner.id === userChoice.choiceId) {
          // Ajouter 3 points à la propriété userGain dans l'objet thePastGame
          thePastGame.userGain += 3;
          this.totalScore +=3;
        } else {
          // Enlever 5 points à la propriété userGain dans l'objet thePastGame
          thePastGame.userGain -= 5;
          this.totalScore -=5;
        }
      }
    });
    this.$emit('score-updated', this.totalScore);
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
