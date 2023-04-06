<template>
  <div class="classement">
    <h2 class="title"> TEAMS </h2>
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
.classement {
  width: 66%;
  float: right;
  margin-right: 0%;
  background-color: rgb(28, 21, 37);
  color: rgb(255, 249, 242);
}

.classement h2 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: white;
}

.classement ol {
  list-style-type: decimal-leading-zero;
}

.classement li {
  margin-bottom: 0.5em;
}


</style>
