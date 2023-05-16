<template>
  <div class="teamcard">
    <img v-if="image" :src="image" />
    <img
      v-else
      src="https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png"
      :alt="team"
    />
    <div class="teambody">
      <h2 class="name" @click="onClick">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    name: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png",
    },
    team: { type: Object, required: true },
    teamId: { type: Number, required: true },
  },
  emits: ["selected-team"],
  data() {
    return {
      players: [],
    };
  },
  methods: {
    onClick() {
      console.log("Click on the name");
      this.$emit("selected-team", this.teamId);
    },
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .teamcard {
    display: flex;
    width: 100%;
    margin: 10px auto;
    background: linear-gradient(to right, rgb(112, 88, 136), rgb(61, 15, 93));
    box-shadow: 0px 5px 5px #db71fb;
    border-radius: 10px;
    text-align: center;
  }

  .teamcard img {
    width: 6vw;
    height: 6vw;
    margin-right: 12vw; /* espace entre l'image et le texte */
    margin-left: 4vw;
  }

  .teambody {
    display: flex;
    flex-direction: column; /* mettre le texte en colonne */
    justify-content: center; /* centrage vertical */
  }

  .teambody h2 {
    font-size: 0px;
    color: whitesmoke;
    margin-bottom: 10px;
    align-items: center;
  }

  .teambody p {
    font-size: 24px; /* réduire la taille de la police */
    color: whitesmoke;
    align-items: center;
    margin: 0; /* enlever les marges par défaut */
  }
}

@media only screen and (max-width: 1023px) {
  .teamcard {
    display: flex;
    width: 58vw;
    margin: 10px auto;
    background: linear-gradient(to right, rgb(112, 88, 136), rgb(84, 28, 125));
    box-shadow: 0px 4px 4px #b082be;
    border-radius: 10px;
    text-align: center;
  }

  .teamcard img {
    width: 10vw;
    height: 10vw;
    margin-right: 10vw; /* espace entre l'image et le texte */
    margin-left: 5vw;
  }

  .teambody {
    display: flex;
    flex-direction: column; /* mettre le texte en colonne */
    justify-content: center; /* centrage vertical */
  }

  .teambody h2 {
    font-size: 36px; /* réduire la taille de la police */
    color: #fff;
    margin-bottom: 10px;
    align-items: center; /* espace entre le nom et le score */
  }

  .teambody p {
    font-size: 24px; /* réduire la taille de la police */
    color: whitesmoke;
    align-items: center;
    margin: 0; /* enlever les marges par défaut */
  }
}
</style>
