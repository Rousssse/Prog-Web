<template>
  <div class="classement">
    <div class="title_team"> TEAMS </div>
    <div>
      <div>
        <TeamCard
          v-for="team in filteredTeams"
          :key="team.id"
          :name="team.name"
          :image="team.image_url"
          :team="team"
          :teamId="team.id"
          @selected-team="displayPlayersInTeam(team.id)">
        </TeamCard>
      </div>
    </div>
    <div v-for="(player,index) in filteredPlayers" :key="index">
  <PlayersCard
      :teamId="player.id"
      :teamname="player.name"
      v-for="(playerInfo, playerIndex) in player.players" :key="playerIndex"
      :firstname="playerInfo.first_name"
      :name="playerInfo.last_name"
      :nationality="playerInfo.nationality"
      :selectedTeamId = "selectedTeamId"
      :role = "playerInfo.role"
      :image="playerInfo.image_url">
  </PlayersCard>
</div>
  </div>
</template>
  
<script>
import { getTeamInLeague, getPlayersInTeam } from '../services/api/E-SportAPI.js';
import TeamCard from './TeamCard.vue'
import PlayersCard from './PlayersCard.vue'

export default {
  name: 'DisplayTeam',
  components: {
    TeamCard,
    PlayersCard
  },
  data() {
    return {
      teams: [],
      result: [],
      selectedTeamId: null,
      team:{},
      filteredPlayers : [],
    }
  },
  props : {
    seriesid : {
      required :true,
    },
    teamId : {
      required :true,
    },

  },
 
  
  created() {
    this.getClassement();
    this.displayPlayersInTeam();
  },
  methods: {
    getClassement(seriesid) {
      if(seriesid) {
        getTeamInLeague(seriesid)
          .then((data) => {
            this.teams = data.sort((a, b) => a.name.localeCompare(b.name));
            
          })
          .catch((error) => {
            console.error(error);
          });
    }
  },
  displayPlayersInTeam(teamId) {
      console.log("displayplayersinteam is called !", "teamiD", teamId);
      this.selectedTeamId = teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      if (selectedTeam) {
    getPlayersInTeam(selectedTeam.id)
      .then((data) => {
        this.result = data.sort((a, b) => a.name.localeCompare(b.name));
        this.filteredPlayers = this.result.filter(team => team.id === this.selectedTeamId);
        // this.filteredPlayers = this.filteredPlayers.players;
        console.log(this.filteredPlayers);
      })
      .catch((error) => {
        console.error(error);
      });
  }
},
  
},
  computed: {
    filteredTeams() {
      return this.teams;
    },
    },
  
  
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
