<template>
  <div class="listeligue">
    <div class="ligue">
      <div class="name" @click="toggleList">
        <img src="https://img.icons8.com/nolan/12x/riot-games.png" class="image-riot">
        <div class="title"> CHOOSE A LEAGUE </div>
        <div class="arrow" :class="{'open': showList}">
          <img src="../assets/fleche.png" class="icon">
        </div>
      </div>
      <input class="search" type="text" v-model="searchTerm" placeholder="Search" />
      <ul :class="{'show': showList}">
          <LigueCard
            size="large"
            v-for="(ligue,index) in filteredLigues"
            @click="$emit('clique-sur-div',ligue.series[ligue.series.length-1].id)"
            :key="ligue.id"
            :ligue="ligue.name"
            :image="ligue.image_url"
            :index="index"
            :currentIndex="currentIndex"
        @update-current-index="currentIndex = $event">
          </LigueCard>
      </ul>
    </div>
  </div>
</template>

<script>
import LigueCard from './LigueCard.vue';
import { getLeague } from '../services/api/E-SportAPI.js';

export default {
  name: 'ListeLigue',
  components: {
    LigueCard,
  },
  data() {
    return {
      showList: false,
      ligues: [],
      searchTerm: '',

      popularLeagues: ['LEC','LFL','LPLOL'],
      currentIndex : -1,
      
      
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    filterLigues() {
      return this.ligues.filter((ligue) =>
        ligue.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
 

  },
  computed: {
    filteredLigues() {
      if (this.searchTerm) {
        return this.filterLigues();
      } else {
        // Filter by popular league
        return this.ligues.filter((ligue) => ligue.series[ligue.series.length-1].begin_at.startsWith("2023") );
        
      }
    },
  },
  created() {
    getLeague()
      .then((data) => {
        this.ligues = data.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.ligues); // ORDER A -> Z
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

  
<style>

@media only screen and (min-width: 1024px){
  .listeligue {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background-color: #282A35;
    width: 36vw;
  }

  .ligue {
    display: flex;
    align-items: center;
  }
  
  .image {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    margin-left: 40px;
    margin-top: 25px;
  }

  .image-riot {
    height: 60px;
    width: 60px;
  }
  
  .name {
    display: flex;
    align-items: center;
  }
  
  .title {
    margin-left: 20px;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 1.3vw;
  }
  
  .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .arrow.open {
    transform: translateY(-50%) rotate(180deg);
  }
  
  .icon {
    width: 2vw;
    height: 2vw;
  }

  .search {
    margin-left: 40px;
    background-color: rgb(30, 25, 36);
    width: 8vw;
    height: auto;
    font-size: 1.2vw;
  
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
    font-family:Impact, 'Arial Narrow Bold', sans-serif;
    cursor: pointer;
  }
}

  @media only screen and (max-width: 1023px){
    .listeligue {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background-color: #282A35;
    width: 40vw;
  }

  .ligue {
    display: flex;
    align-items: center;
  }
  
  .image {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    margin-left: 40px;
    margin-top: 25px;
  }

  .image-riot {
    height: 6vw;
    width: 6vw;
  }
  
  .name {
    display: flex;
    align-items: center;
  }
  
  .title {
    margin-left: 10px;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 1.8vw;
  }
  
  .arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .arrow.open {
    transform: translateY(-50%) rotate(180deg);
  }
  
  .icon {
    width: 2.5vw;
    height: 2.5vw;
  }

  .search {
    margin-left: 3vw;
    background-color: rgb(30, 25, 36);
    width: 8vw;
    height: auto;
    font-size: 1.8vw;
  
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
    font-family:Impact, 'Arial Narrow Bold', sans-serif;
    cursor: pointer;
  }
  }
  </style>
  