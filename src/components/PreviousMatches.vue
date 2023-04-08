<template>
  <div>
    <h1>Find here the results of yesterday's games</h1>
    <div class="past-match" v-for="(match, index) in filteredPastMatches" :key="index">
      <PastMatches 
      :thePastGame="match" />
    </div>
  </div>
</template>


<script>
import PastMatches from './pastMatches.vue'
import { getPreviousMatches } from '@/services/api/E-SportAPI.js'

export default {
  name: 'PreviousMatches',
  components: {
    PastMatches,
  },
  created: function() {
    this.getPastMatches();
  },
  data() {
    return {
      PastMatches: [], 
    };
  },

  methods: {
    getPastMatches() {
      getPreviousMatches()
          .then((data) => {
            console.log(data);
            let today = new Date();
            let yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            let day = yesterday.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            let month = yesterday.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let year = yesterday.getFullYear();
            this.PastMatches = data.filter((games) => games.begin_at.startsWith(year + "-" + month + "-" + day));
            console.log(year + "-" + month + "-" + day);
            console.log(this.PastMatches);
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },

  computed: {
    filteredPastMatches() {
      return this.PastMatches;
    }
  },
};
</script>

<style>
h1 {
  color: rgb(0, 0, 0);
  padding-top: 50px;
}
</style>
