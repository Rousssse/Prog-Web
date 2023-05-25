<template>
  <div
    v-if="showModal && selectedTeamId"
    class="modal"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div class="team-header">
        <p>{{ teamname }}</p>
      </div>
      <div class="players-list">
        <div
          v-for="(player, index) in players"
          :key="index"
          class="player-card"
        >
          <div class="player-name">
            <p>{{ player.first_name }}</p>
            <p>{{ player.last_name }}</p>
          </div>
          <div class="player-image">
            <img v-if="player.image_url" :src="player.image_url" />
            <img
              v-else
              src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
            />
          </div>
          <div class="player-info">
            <p>{{ player.name }}</p>
            <p>{{ player.nationality }} | {{ player.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayersCard",
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
    closeModal() {
      this.showModal = false;
      this.$emit("close", null);
      this.showModal = true;
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 1024px) {
  .modal {
    display: flex;
    position: fixed;
    margin-top: 5vw;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fefefe;
  }

  .modal-content {
    background-color: #282a35;
    margin: auto;
    padding: 10px;
    border: 1px solid #888;
    width: 80%;
    max-width: 1500px;
    border-radius: 15px;
    overflow: auto;
    max-height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close {
    color: #aaa;
    align-self: flex-end;
    font-size: 2vw;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .player-image img:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  .team-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 2.2vw;
  }

  .players-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 3vw;
  }

  .player-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12vw;
  }

  .player-image {
    width: 11w;
    height: 11vw;
    overflow: hidden;
    border-radius: 50%;
  }

  .player-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .player-name {
    font-size: 1.5vw;
    margin: 0;
    text-align: center;
  }

  .player-info {
    margin: 0;
    text-align: center;
    font-size: 1.5vw;
  }
}

@media only screen and (max-width: 1023px) {
  .modal {
    display: flex;
    position: fixed;
    margin-top: 10vw;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fefefe;
  }

  .modal-content {
    background-color: #282a35;
    margin: auto;
    padding: 10px;
    border: 1px solid #888;
    width: 90%;
    max-width: 80vw;
    border-radius: 15px;
    overflow: auto;
    max-height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close {
    color: #aaa;
    align-self: flex-end;
    font-weight: bold;
    font-size: 4vw;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .player-image img:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  .team-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 3vw;
  }

  .players-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3vw;
    width: 100%;
  }

  .player-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12vw;
  }

  .player-image {
    width: 14vw;
    height: 14vw;
    overflow: hidden;
    border-radius: 50%;
  }

  .player-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .player-name {
    font-size: 2.3vw;
    margin: 0;
    text-align: center;
  }

  .player-info {
    margin: 0;
    font-size: 2vw;
    text-align: center;
  }
}
</style>
