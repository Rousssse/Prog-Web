<template>
    <div>
      <div v-if="selectedTeamId" >
        <p>{{ teamname}}</p>
        <p> Player : </p>
        <p>{{ firstname}}</p>
        <p>{{ name}}</p>
        <img v-if="image" :src="image">
        <img v-else src="https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png">
        <p>{{ nationality }}</p>
        <p>{{ role }}</p>
        
        
        
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'PlayersCard',
    props: {
      teamname: { type: String, required: true },
      image: { type: String, default: "https://cdn.pandascore.co/images/player/image/489/220px-MAD_Breeze_2019_Split_1.png"},
      player: {type: String,required: true },
      firstname: {type: String, required: true },
      name: {type: String, required: true },
      teamId: {type: Number, required: true },
      role: {type: String, required: true },
      nationality: {type: String, required: true },
      selectedTeamId: {},
    },
  };
  </script>
  <style scoped>
img {
  width: 200px;
  height: 150px;
}

</style>
  