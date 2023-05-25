<template>
  <div>
    <h1>Find here the results of yesterday's games</h1>
    <div
      class="past-match"
      v-for="(match, index) in filteredPastMatches"
      :key="index"
    >
      <PastMatches :thePastGame="match" />
    </div>
  </div>
</template>

<script>
import PastMatches from "./PastMatches.vue";
import { getPreviousMatches } from "@/services/api/E-SportAPI.js";

export default {
  name: "PreviousMatches",
  components: {
    PastMatches,
  },
  created: function () {
    this.getPastMatches();
  },
  data() {
    return {
      PastMatches: [],
      totalScore: 0,
      globalScore: parseInt(localStorage.getItem("globalScore") || 0),
    };
  },

  methods: {
    getPastMatches() {
      getPreviousMatches()
        .then((data) => {
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
          this.PastMatches = data.filter(
            (games) =>
              games.begin_at &&
              games.begin_at.startsWith(year + "-" + month + "-" + day)
          );
          console.log(year + "-" + month + "-" + day);
          console.log(this.PastMatches);
          this.compareChoicesWithPastMatches();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    compareChoicesWithPastMatches() {
      // Recovering the choices array from localStorage
      const choices = JSON.parse(localStorage.getItem("choices"));
      const currentDate = new Date().toLocaleDateString();
      console.log("le fameux tableau :", choices);
      console.log("compareChoicesWithPastMatches is called ! ");

      // Browse past matches
      const previousMatches = this.PastMatches;

      previousMatches.forEach((thePastGame) => {
        // Browse user choices
        choices.forEach((choice) => {
          // Check if the id of the choice is the same as that of a past match
          if (choice.matchId === thePastGame.id) {
            thePastGame.userChoice = choice.selectedTeamName;
            // Check that user selection is correct
            if (choice.TeamId[0].opponent.name === choice.selectedTeamName) {
              if (
                choice.TeamId[0].opponent.id === thePastGame.games[0].winner.id
              ) {
                thePastGame.userGain = 3;
                this.totalScore += 3;
              } else {
                thePastGame.userGain = -5;
                this.totalScore -= 5;
              }
            } else {
              if (
                choice.TeamId[1].opponent.id == thePastGame.games[0].winner.id
              ) {
                thePastGame.userGain = 3;
                this.totalScore += 3;
              } else {
                thePastGame.userGain = -5;
                this.totalScore -= 5;
              }
            }
          }
        });
      });
      // Check if the global score has already been updated for the current day
      if (localStorage.getItem(currentDate) !== "updated") {
        this.updateGlobalScore().then(() => {
          localStorage.setItem(currentDate, "updated");
        });
      } else {
        console.log("already done");
      }
    },
    updateGlobalScore() {
      return new Promise((resolve) => {
        this.globalScore += this.totalScore;
        localStorage.setItem("globalScore", this.globalScore);
        resolve();
      });
    },
  },
  watch: {
    globalScore: function (newScore) {
      console.log("New global score = ", newScore);
    },
  },

  computed: {
    filteredPastMatches() {
      return this.PastMatches;
    },
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  h1 {
    color: rgb(0, 0, 0);
    padding-top: 100px;
  }
}

@media only screen and (max-width: 1023px) {
  h1 {
    color: rgb(0, 0, 0);
    padding-top: 50px;
  }
}
</style>
