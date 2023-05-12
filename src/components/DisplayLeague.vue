<template>
  <div class="league-container">
    <div class="league-list">
      <div class="league-name" @click="toggleLeagueList">
        <img
          src="https://img.icons8.com/nolan/12x/riot-games.png"
          class="league-image-riot"
        />
        <div class="league-title">CHOOSE A LEAGUE</div>
        <div class="league-arrow" :class="{ open: showLeagueList }">
          <img src="../assets/fleche.png" class="league-icon" />
        </div>
      </div>
      <input type="text" v-model="searchTerm" placeholder="Search" />
      <ul :class="{ show: showLeagueList }">
        <LeagueCard
          size="large"
          v-for="(league, index) in filteredLeagues"
          @click="
            $emit('clique-sur-div', league.series[league.series.length - 1].id)
          "
          :key="league.id"
          :league="league.name"
          :image="league.image_url"
          :index="index"
          :currentIndex="currentIndex"
          @update-current-index="currentIndex = $event"
        >
        </LeagueCard>
      </ul>
    </div>
  </div>
</template>

<script>
import LeagueCard from "./LeagueCard.vue";
import { getLeague } from "../services/api/E-SportAPI.js";

export default {
  name: "LeagueList",
  components: {
    LeagueCard,
  },
  data() {
    return {
      showLeagueList: false,
      leagues: [],
      searchTerm: "",
      currentIndex: -1,
    };
  },
  methods: {
    toggleLeagueList() {
      this.showLeagueList = !this.showLeagueList;
    },
    getFilteredLeagues() {
      return this.leagues.filter((league) =>
        league.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  computed: {
    filteredLeagues() {
      if (this.searchTerm) {
        return this.getFilteredLeagues();
      } else {
        // Filter by popular league
        return this.leagues.filter((league) =>
          league.series[league.series.length - 1].begin_at.startsWith("2023")
        );
      }
    },
  },
  created() {
    getLeague()
      .then((leaguesData) => {
        this.leagues = leaguesData.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.leagues);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .league-container {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background-color: #282a35;
    width: 36vw;
  }

  .league-list {
    display: flex;
    align-items: center;
  }

  .league-name {
    display: flex;
    align-items: center;
  }

  .league-image-riot {
    height: 60px;
    width: 60px;
  }

  .league-title {
    margin-left: 20px;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    font-size: 1.3vw;
  }

  .league-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .league-arrow.open {
    transform: translateY(-50%) rotate(180deg);
  }

  .league-icon {
    width: 2vw;
    height: 2vw;
  }

  input {
    font-size: 1vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0.4vw rgba(194, 194, 194, 0.5), 0 0 0 0.15vw transparent;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    padding: 0.4vw;
    max-width: 10vw;
    margin-left: 3vw;
    transition: 0.4s;
  }

  input:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  input:focus {
    box-shadow: 0 0 0 0.15vw rgb(158, 72, 184);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }

  ul.show {
    display: block;
  }

  ul li {
    padding: 5px 10px;
    color: #fff;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1023px) {
  .league-container {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background-color: #282a35;
    width: 40vw;
  }

  .league-list {
    display: flex;
    align-items: center;
  }

  .league-name {
    display: flex;
    align-items: center;
  }

  .league-image-riot {
    height: 6vw;
    width: 6vw;
  }

  .league-title {
    margin-left: 10px;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    font-size: 1.8vw;
  }

  .league-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .league-arrow.open {
    transform: translateY(-50%) rotate(180deg);
  }

  .league-icon {
    width: 2.5vw;
    height: 2.5vw;
  }

  input {
    font-size: 1.5vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0.4vw rgba(194, 194, 194, 0.5), 0 0 0 0.15vw transparent;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    padding: 0.4vw;
    max-width: 10vw;
    margin-left: 3vw;
    transition: 0.4s;
  }

  input:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  input:focus {
    box-shadow: 0 0 0 0.15vw rgb(158, 72, 184);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }

  ul.show {
    display: block;
  }

  ul li {
    padding: 5px 10px;
    color: #fff;
    font-family: Impact, "Arial Narrow Bold", sans-serif;
    cursor: pointer;
  }
}
</style>
