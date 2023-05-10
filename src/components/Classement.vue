<template>
  <div>
    <h3>Find the teams of the different leagues !</h3>
    <ListLeague @clique-sur-div="DisplayRanking" />
    <DisplayTeam :seriesid="leagueDisplay" ref="DisplayTeam" />
  </div>
</template>

<script>
import ListLeague from "./ListeLigue.vue";
import DisplayTeam from "./DisplayTeam.vue";
export default {
  name: "RankingP",

  components: {
    ListLeague,
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
h3 {
  margin-top: 100px;
}
</style>
