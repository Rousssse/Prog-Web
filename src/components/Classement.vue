<template>
  <div>
    <h3>Find the teams of the different leagues !</h3>
    <ListeLigue @clique-sur-div="afficherclassement" />
    <DisplayTeam :seriesid="leagueDisplay" ref="DisplayTeam" />
  </div>
</template>

<script>
import ListeLigue from "./ListeLigue.vue";
import DisplayTeam from "./DisplayTeam.vue";
export default {
  name: "ClassementP",

  components: {
    ListeLigue,
    DisplayTeam,
  },
  data() {
    return {
      leagueDisplay: 5497,
    };
  },
  methods: {
    afficherclassement(name) {
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
