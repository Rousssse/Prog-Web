<template>
  <div class="pastmatches">
    <div
      v-if="
        thePastGame &&
        thePastGame.games &&
        thePastGame.games[0] &&
        thePastGame.games[0].winner
      "
    >
      <h2 class="pastmatches-title">{{ thePastGame.name }}</h2>
      <div class="pastmatches-info">
        <div class="pastmatches-winner">
          <img
            v-if="
              thePastGame.games[0].winner.id ===
              thePastGame.opponents[0].opponent.id
            "
            v-bind:src="thePastGame.opponents[0].opponent.image_url"
          />
          <img
            v-else
            v-bind:src="thePastGame.opponents[1].opponent.image_url"
          />
          <p
            v-if="
              thePastGame.games[0].winner.id ===
              thePastGame.opponents[0].opponent.id
            "
          >
            {{ thePastGame.opponents[0].opponent.name }}
          </p>
          <p v-else>{{ thePastGame.opponents[1].opponent.name }}</p>
        </div>
        <div class="pastmatches-user-data">
          <p>Votre choix :</p>
          <p class="pastmatches-user-text">{{ thePastGame.userChoice }}</p>
        </div>
        <div class="pastmatches-user-data">
          <p>Gain :</p>
          <p class="pastmatches-user-text">{{ thePastGame.userGain }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PastMatches",
  props: {
    thePastGame: {},
  },
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .pastmatches {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 80%;
    margin: 10px auto;
    background: linear-gradient(
      to right,
      rgb(92, 238, 180),
      rgb(213, 244, 121)
    );
    box-shadow: 0px 1px 0px 2px rgb(252, 252, 252);
  }

  .pastmatches p {
    margin: 10px 0;
    font-size: 1.5vw;
  }

  .pastmatches-title {
    font-size: 1.7vw;
  }

  .pastmatches-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5vw;
    box-sizing: border-box;
  }

  .pastmatches-info img {
    width: 6vw;
    height: 6vw;
    margin-right: 20px;
  }

  .pastmatches-info p {
    margin: 0;
  }

  .pastmatches-winner,
  .pastmatches-user-data {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .pastmatches-winner p {
    font-weight: bold;
  }

  .pastmatches-user-data p {
    margin-left: 2vw;
  }
  .pastmatches-user-text {
    font-weight: bold;
  }
}
@media only screen and (max-width: 1023px) {
  .pastmatches {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    width: 80%;
    margin: 10px auto;
    background: linear-gradient(
      to right,
      rgb(92, 238, 180),
      rgb(213, 244, 121)
    );
    box-shadow: 0px 1px 0px 2px rgb(252, 252, 252);
  }

  .pastmatches p {
    margin: 10px 0;
    font-size: 1.9vw;
  }

  .pastmatches-title {
    font-size: 2.5vw;
  }

  .pastmatches-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3vw;
    box-sizing: border-box;
  }

  .pastmatches-info img {
    width: 6vw;
    height: 6vw;
    margin-right: 10px;
  }

  .pastmatches-info p {
    margin: 0;
  }

  .pastmatches-winner,
  .pastmatches-user-data {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .pastmatches-winner p {
    font-weight: bold;
  }

  .pastmatches-user-data p {
    margin-left: 1.5vw;
  }

  .pastmatches-user-text {
    font-weight: bold;
  }
}
</style>
