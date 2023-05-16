<template>
  <div
    class="league-card"
    v-if="image"
    :class="{ selected: index === currentIndex }"
    @click="handleClick"
  >
    <img :src="image" :alt="league" />
    <div class="league-body">
      <h2>{{ league }}</h2>
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
    display: flex;
    color: #282a35;
    text-align: center;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
  }
  .league-card:hover {
    transform: scale(1.04);
  }
  .league-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .league-card img {
    height: 3vw;
    width: 3vw;
    margin-right: 6vw;
    margin-left: 4vw;
  }

  .league-body h2 {
    font-size: 1vw;
    margin-bottom: 10px;
    align-items: center;
  }
  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}

@media only screen and (max-width: 767px) {
  .league-card {
    display: flex;
    color: #282a35;
    text-align: center;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
  }
  .league-card:hover {
    transform: scale(1.04);
  }
  .league-card img {
    height: 4vw;
    width: 4vw;
    margin-right: 6vw;
    margin-left: 4vw;
  }
  .league-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .league-body h2 {
    font-size: 1.7vw;
    margin-bottom: 10px;
    align-items: center;
  }

  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .league-card {
    display: flex;
    color: #282a35;
    text-align: center;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(to right, rgb(95, 93, 191), rgb(125, 189, 226));
  }
  .league-card:hover {
    transform: scale(1.04);
  }
  .league-card img {
    height: 4vw;
    width: 4vw;
    margin-right: 6vw;
    margin-left: 4vw;
  }
  .league-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .league-body h2 {
    font-size: 1.7vw;
    margin-bottom: 10px;
    align-items: center;
  }

  .selected {
    background: linear-gradient(to right, #5359c6, #837ccf);
    box-shadow: inset 5px 5px 5px #344291, inset -3px -3px 3px #7685d9;
  }
}
</style>
