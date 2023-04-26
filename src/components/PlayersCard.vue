<template>
  <div v-if="showModal && selectedTeamId" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div class="team-card">
        <p>{{teamname}}</p>
      </div>
      <div v-for="(player, index) in players" :key="index" class="players-list">
        <p class="player-name">{{ player.first_name }} {{ player.last_name }}</p>
        <div class="player-image">
          <img v-if="player.image_url" :src="player.image_url">
          <img v-else src="https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png">
        </div>
        <div class="player-info">
          <p>{{ player.nationality }} | {{ player.role }}</p>
        </div> 
      </div>
    </div>
  </div>  
</template>
  
  <script>

  export default {
    name: 'PlayersCard',
    props: {
      teamname: { type: String, required: true },
      players: Array,
      selectedTeamId: {},
    },
    data() {
    return {
      showModal: true,
    };
  },
  methods: {
    closeModal(){
      console.log("click on the cross");
      this.showModal = false;
      this.$emit('close', null);
      this.showModal = true;
      
    }
  },
  };
  </script>
<style scoped>

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: black;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  overflow: auto;
  max-height: calc(100% - 80px);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.team-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.team-image {
  width: 200px;
  height: 150px;
}

.players-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.player-image {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}

.player-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-name {
  font-size: 1.2rem;
  margin: 0;
}

.player-info {
  margin: 0;
}
</style>
  