<template>
  <div>
    <h3>Find the teams of the different leagues !</h3>
    <LeagueList @clique-sur-div="DisplayRanking" />
    <DisplayTeam :seriesid="leagueDisplay" ref="DisplayTeam" />
  </div>
</template>

<script>
import LeagueList from "./DisplayLeague.vue";
import DisplayTeam from "./DisplayTeam.vue";
export default {
  name: "RankingP",

  components: {
    LeagueList,
    DisplayTeam,
  },
  data() {
    return {
      leagueDisplay: 5497,
    };
  },
  methods: {
    DisplayRanking(name) {
      this.leagueDisplay = name;
      this.$refs.DisplayTeam.getClassement(this.leagueDisplay);
    },
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  h3 {
    margin-top: 8vw;
    font-size: 2vw;
  }
}
@media only screen and (max-width: 1023px) {
  h3 {
    margin-top: 13vw;
    font-size: 2.5vw;
  }
}
</style>
