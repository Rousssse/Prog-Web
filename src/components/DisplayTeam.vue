<template>
  <div class="team">
    <div class="team-title">TEAMS</div>
    <div>
      <div>
        <TeamCard
          v-for="team in filteredTeams"
          :key="team.id"
          :name="team.name"
          :image="team.image_url"
          :team="team"
          :teamId="team.id"
          @selected-team="displayPlayersInTeam(team.id)"
        >
        </TeamCard>
      </div>
    </div>
    <div v-for="(player, index) in filteredPlayers" :key="index">
      <PlayersCard
        :teamId="player.id"
        :teamname="player.name"
        :players="player.players"
        :selectedTeamId="selectedTeamId"
        @close="selectedTeamId = $event"
      >
      </PlayersCard>
    </div>
  </div>
</template>

<script>
import {
  getTeamInLeague,
  getPlayersInTeam,
} from "../services/api/E-SportAPI.js";
import TeamCard from "./TeamCard.vue";
import PlayersCard from "./PlayersCard.vue";

export default {
  name: "DisplayTeam",
  components: {
    TeamCard,
    PlayersCard,
  },
  data() {
    return {
      teams: [],
      result: [],
      selectedTeamId: null,
      team: {},
      filteredPlayers: [],
    };
  },
  props: {
    seriesId: {
      required: true,
    },
    teamId: {
      required: true,
    },
  },

  created() {
    this.getRanking();
    this.displayPlayersInTeam();
  },
  methods: {
    getRanking(seriesId) {
      if (seriesId) {
        getTeamInLeague(seriesId)
          .then((data) => {
            this.teams = data.sort((a, b) => a.name.localeCompare(b.name));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    displayPlayersInTeam(teamId) {
      this.selectedTeamId = teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      if (selectedTeam) {
        getPlayersInTeam(selectedTeam.id)
          .then((data) => {
            this.result = data.sort((a, b) => a.name.localeCompare(b.name));
            this.filteredPlayers = this.result.filter(
              (team) => team.id === this.selectedTeamId
            );
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
@media only screen and (max-width: 1023px) {
  .team {
    width: 58vw;
    float: right;
    background-color: #282a35;
    color: #fff;
  }

  .team li {
    margin-bottom: 0.5em;
  }

  .team-title {
    margin-left: 20px;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    font-size: 3vw;
  }
}

@media only screen and (min-width: 1024px) {
  .team {
    width: 62vw;
    float: right;
    margin-right: 0%;
    background-color: #282a35;
    color: #fff;
  }

  .team li {
    margin-bottom: 0.5em;
  }

  .team-title {
    margin-left: 20px;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    font-size: 2.5vw;
  }
}
</style>
