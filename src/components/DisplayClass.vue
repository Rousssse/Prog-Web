<template>
  <div class="classement">
    <div class="title_team"> TEAMS </div>
    <div>
      <div>
        <TeamCardClassement
            v-for="team in filteredTeams"
            :key="team.id"
            :name ="team.name"
            :image="team.image_url">
          </TeamCardClassement>
      </div>
    </div>
  </div>
</template>
  
<script>
import { getTeamInLeague } from '../services/api/E-SportAPI.js';
import TeamCardClassement from './TeamCard_Classement.vue'

export default {
  name: 'DisplayClassement',
  components: {
    TeamCardClassement
  },
  data() {
    return {
      teams: [],
      // teamsinLFL: ['Aegis', 'Vitality.Bee', 'BDS Academy' , 'Karmine Corp'],
      // teamsinsLEC : ['G2','Fnatic']
    }
  },
  props : {
    seriesid : {
      required :true,
    }
  },
 
  
  created() {
    this.getClassement();
  },
  methods: {
    getClassement(seriesid) {
      getTeamInLeague(seriesid)
        .then((data) => {
          this.teams = data.sort((a, b) => a.name.localeCompare(b.name));
          
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    filteredTeams() {
      return this.teams;
    }
  }
  
};
</script>
  
<style>

@media only screen and (max-width: 1023px){
  .classement {
  width: 58vw;
  float: right;
  background-color: #282A35;
  color: #fff;
}

.classement h2 {
  font-size: 2.5vw;
  margin-bottom: 0.5em;
  color: #fff;
}

.classement li {
  margin-bottom: 0.5em;
}

.title_team{
    margin-left: 20px;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 3vw;
}
}

@media only screen and (min-width: 1024px){
  .classement {
  width: 63vw;
  float: right;
  margin-right: 0%;
  background-color: #282A35;
  color: #fff;
}

.classement h2 {
  font-size: 2vw;
  margin-bottom: 0.5em;
  color: #fff;
}

.classement li {
  margin-bottom: 0.5em;
}

.title_team{
    margin-left: 20px;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 3vw;
}
}

</style>
