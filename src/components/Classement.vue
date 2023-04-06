<template>
    <div class="classem">
      <h3>Find the teams of the different leagues !</h3>
      <ListeLigue @clique-sur-div="afficherclassement"/>
      <DisplayClass :seriesid="LigueAffichage" ref="DisplayClass"/>
    </div>
    
  </template>
  
  <script>
  import ListeLigue from './ListeLigue.vue'
  import DisplayClass from './DisplayClass.vue';
  export default {
    name: 'ClassementP',
  
    components: {
      ListeLigue,
      DisplayClass
  },
  data() {
    return {
    LigueAffichage : 5497,
    };
  },

    methods : {

    afficherclassement(name){
      
      this.LigueAffichage = name;
      this.$refs.DisplayClass.getClassement(this.LigueAffichage);
    },
    }
}
  </script>
  
  <style>
  .classement {
    margin-top: 50px;
  }
  h3 {
    margin-top: 100px;
  }
  </style>