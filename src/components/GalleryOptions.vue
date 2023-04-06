<template>
    <div class="gallery-options">
      <input type="text" name="search" placeholder="Search a name team">
      <button v-if="search" @click="cleanSearch">X</button>
      <label for="team-sort"> Trier par :</label>
      <select :value="TeamsSortType" @input="onTeamsSortTypeChanged" id="team-sort">
        <option value="AZName"> Noms de A à Z</option>
        <option value="ZAName"> Noms de Z à A</option>
        <option value="AZLigue"> Ligues de A à Z</option>
        <option value="ZALigue"> Ligues de Z à A</option>
      </select>
    </div>
</template>

<script>

export default{
  name : 'GalleryOptions',
  props : {
    search : String,
    TeamsSortType: String,
  },
  emits: ["update:search", "update:TeamsSortType"],
  watch: {
    search: function(newSearch){
      localStorage.setItem("search", newSearch)
    },
    TeamsSortType: function(newTeamsSortType){
      localStorage.setItem("TeamsSortType", newTeamsSortType)
    },

  },

  methods: {
    cleanSearch: function(){
      this.$emit('update:search', "")
    },
    onSearchChanged(event) {
      this.$emit('update:search', event.target.value)
    },
    onTeamsSortTypeChanged(event) {
      this.$emit('update:TeamsSortType' , event.target.value)
    },
  }
  
}
</script>
