<template>
  <div
    class="league-card"
    v-if="image"
    :class="{ selected: index === currentIndex }"
    @click="handleClick"
  >
    <div>
      <img class="league-image" :src="image" :alt="league" />
    </div>
    <div class="league-element">
      <h1>{{ league }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeagueCard",
  props: {
    league: { type: String, required: true },
    image: {
      type: String,
      default: "https://gamingnewz.fr/wp-content/uploads/2020/04/Logo-lfl.png",
    },
    index: { type: Number, required: true },
    currentIndex: { type: Number, required: true },
  },

  methods: {
    handleClick() {
      this.$emit("update-current-index", this.index);
    },
  },
  computed: {
    isSelected() {
      return (
        typeof this.currentIndex !== "undefined" &&
        this.index === this.currentIndex
      );
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .league-card {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
  }
  .league-card:hover {
    transform: scale(1.05);
  }
  .league-image {
    height: 5vw;
    width: 5vw;
    margin-left: 2vw;
    margin-right: 4vw;
    margin-top: 1vw;
  }

  .league-element h1 {
    font-size: 1.5vw;
    position: relative;
    color: #282a35;
    margin-top: -1vw;
  }

  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}

@media only screen and (max-width: 767px) {
  .league-card {
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
    transition: transform 0.2s ease-in-out;
  }
  .league-card:hover {
    transform: scale(1.05);
  }
  .league-image {
    height: 6vw;
    width: 6vw;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 1vw;
  }

  .league-element h1 {
    font-size: 2.5vw;
    color: #282a35;
    margin-top: -4vw;
  }
  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .league-card {
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
    transition: transform 0.2s ease-in-out;
  }
  .league-card:hover {
    transform: scale(1.05);
  }
  .league-image {
    height: 6vw;
    width: 6vw;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 1vw;
  }

  .league-element h1 {
    font-size: 2.5vw;
    color: #282a35;
    margin-top: -2vw;
  }
  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}
</style>
