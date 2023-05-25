<template>
  <div class="team-card">
    <img v-if="image" :src="image" />
    <img
      v-else
      src="https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png"
      :alt="team"
    />
    <div class="team-body">
      <h2 @click="onClick">{{ name }}</h2>
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
      this.$emit("selected-team", this.teamId);
    },
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .team-card {
    display: flex;
    width: 100%;
    margin: 10px auto;
    background: linear-gradient(to right, rgb(112, 88, 136), rgb(61, 15, 93));
    box-shadow: 0px 5px 5px #db71fb;
    border-radius: 10px;
    text-align: center;
  }

  .team-card img {
    width: 6vw;
    height: 6vw;
    margin-right: 12vw;
    margin-left: 4vw;
  }

  .team-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .team-body h2 {
    color: #fff;
    align-items: center;
    font-size: 2.3vw;
  }
}

@media only screen and (max-width: 1023px) {
  .team-card {
    display: flex;
    width: 58vw;
    margin: 10px auto;
    background: linear-gradient(to right, rgb(112, 88, 136), rgb(84, 28, 125));
    box-shadow: 0px 4px 4px #b082be;
    border-radius: 10px;
    text-align: center;
  }

  .team-card img {
    width: 7vw;
    height: 7vw;
    margin-right: 10vw;
    margin-left: 5vw;
  }

  .team-body h2 {
    color: #fff;
    font-size: 2vw;
  }
}
</style>
