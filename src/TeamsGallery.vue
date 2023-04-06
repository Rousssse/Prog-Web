<template>
  <div class="teams-gallery">
    <!-- <GalleryOptions v-model:search="search" v-model:TeamsSortType="TeamsSortType" />
      <div>
        
      </div>
      <div class="gallery">
        <TeamCard 
        v-for="team in teamsOrganizedData" 
        :key="team.id" 
        :name="team.name" 
        :ligue="team.ligue" 
        :image="team.image" />
      </div> -->
  </div>
</template>



<script>
// import TeamCard from './components/TeamCard.vue'
// import GalleryOptions from './components/GalleryOptions.vue'
// import {getTeamsData} from '@/services/api/esportRepository.js'

export default {
  // name: 'TeamGallery',
  // components: {
  //   TeamCard,
  //   GalleryOptions
  // },
  // created: function(){
  //   this.retrieveTeamsData()
  // },
  // computed: {
  //   teamsOrganizedData : function(){
  //     const field = ["AZName", "ZAName"].includes(this.TeamsSortType) ? "name" : "ligue"
  //     const reversed = ["ZAName", "ZALigue"].includes(this.TeamsSortType)
  //     const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
  //     const comparator = (a,b) => a[field].localeCompare(b[field])
  //     let data = this.TeamsData.filter(filterFunc)
  //     data = data.sort(comparator)
  //     if (reversed) data = data.reverse()
  //     return data
  //   }
  // },
  // data(){
  //   return {
  //     TeamsData: [],
  //     search: localStorage.getItem("search") || "",
  //     TeamsSortType : localStorage.getItem("TeamsSortType") || "AZName"
  //   }
  // },
  
  // methods: {
  //   async retrieveTeamsData(){
  //     this.TeamsData = await getTeamsData()
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
