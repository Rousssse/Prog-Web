<template>
    <div class="classem">
      <h3>Find the teams of the different leagues !</h3>
      <ListeLigue @clique-sur-div="afficherclassement"/>
      <DisplayTeam :seriesid="LigueAffichage" ref="DisplayTeam"/>
    </div>
    
  </template>
  
  <script>
  import ListeLigue from './ListeLigue.vue'
  import DisplayTeam from './DisplayTeam.vue';
  export default {
    name: 'ClassementP',
  
    components: {
      ListeLigue,
      DisplayTeam
  },
  data() {
    return {
    LigueAffichage : 5497,
    };
  },

    methods : {

    afficherclassement(name){
      
      this.LigueAffichage = name;
      this.$refs.DisplayTeam.getClassement(this.LigueAffichage);
    },
    }
}
  </script>
  
  <style>
  h3 {
    margin-top: 100px;
  }
  </style>