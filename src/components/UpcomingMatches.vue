<template>
  <div>
    <h1>Upcoming games !</h1>
    <div class="match">
      <MatchesX
        v-for="(match, index) in filteredMatches.slice(0, maxItemsPerPage)"
        :key="index"
        :theGame="match"
        :selected-team="selectedTeam"
        @selected-team="onSelectedTeamChanged(match, $event)"
        @LeftClick=" lastClicked = 'left'"
        @RightClick = "lastClicked = 'right'"
      />
    </div>
  </div>
</template>
<script>
import MatchesX from './Matches.vue'
import { getNextMatches } from '@/services/api/E-SportAPI.js'

export default {
  name: 'UpcomingMatches',
  components: {
    MatchesX,
  },
  created: function(){
    this.getMatches();

    const choices = JSON.parse(localStorage.getItem('choices'));
    console.log(choices);
    
    if (choices) {
      this.choice = choices;
    }
 
  },
  data(){
    return {
      NextMatches: [],
      maxItemsPerPage: 60, // max matches per page
      choice : [],
      selectedTeam: [],
      lastClicked : null,
    };
  },
  methods: {
    getMatches(){
      getNextMatches()
          .then((data) => {
            console.log(data);
            let today = new Date();
            let tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            let day = tomorrow.getDate();
            if(day <10){
                day = "0"+day;
            }
            let month = tomorrow.getMonth() + 1;
            if(month <10){
                month="0"+month;
            }
            let year = tomorrow.getFullYear();
            this.NextMatches = data.filter((games) => games.original_scheduled_at.startsWith(year+"-"+month+"-"+day)  && games.opponents.length === 2 );
            console.log(year+"-"+month+"-"+day);
            console.log(this.NextMatches);
          })
          .catch((error) => {
            console.error(error);
          });
    },
    // findSelectedTeam(index) {
    //     let choice = this.choices.find((a) => a.matchId == index)
    //     return 
    // },
    onSelectedTeamChanged(match, team) {
      console.log("onSelectedTeamChanged is called !", "team", team, "id of the match",match.id);
      this.lastSelectedTeam = team;
      if(match.opponents) {
       this.retrieveChoice(match);
  }
      
    },
    retrieveChoice(match) {
      console.log("retrieveChoice is called !");

      // verify if a choice on the match is already done
      const index = this.choice.findIndex(c => c.matchId === match.id);

      if (this.lastSelectedTeam) {
        const newChoice = { matchId: match.id, selectedTeamName: this.lastSelectedTeam };
        if (index === -1) {
          // if the team of the match has never been chosen, add a new data in the table 
          this.choice.push(newChoice);
        } else {
          // if the team of the match already chosen, change the data
          this.choice.splice(index, 1, newChoice);
        }

        this.lastChoiceIndex = this.choice.length - 1;
        console.log(this.choice);

        // save the choices in the local storage 
        localStorage.setItem("choices", JSON.stringify(this.choice));
       }
    }
  },
  computed : {
    filteredMatches() {
      return this.NextMatches;
    }
  },
}
</script>

<style>

@media only screen and (min-width: 1024px){
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: rgb(0, 0, 0);
  padding-top: 25px;
}
}
@media only screen and (max-width: 1023px){
  h1 {
  color: rgb(0, 0, 0);
  font-size: 3vw;
  }

  #app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6vw;
}
}

</style>
