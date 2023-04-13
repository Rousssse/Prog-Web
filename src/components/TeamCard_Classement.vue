<template>
  <div class="teamcard">
    <img v-if="image" :src="image" :alt="team">
    <img v-else src="https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png" :alt="team">
    <div class="teambody">
      <h2 class="name">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard_Classement',
  props: {
    name: { type: String, required: true },
    image: { type: String, default: "https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png" }
  } 
}
</script>

<style>
.teamcard {
  display: flex;
  width: 100%;
  margin: 10px auto;
  background: linear-gradient(to right, rgb(61, 15, 93), rgb(77, 63, 91));
  box-shadow: 0px 5px 5px #db71fb;
  border-radius: 10px;
  text-align: center;
}

.teamcard img {
  width: 150px; /* réduire la taille de l'image */
  height: 150px; /* ajuster la hauteur proportionnellement */
  margin-right: 200px; /* espace entre l'image et le texte */
  margin-left: 20px;
}

.teambody {
  display: flex;
  flex-direction: column; /* mettre le texte en colonne */
  justify-content: center; /* centrage vertical */
}

.teambody h2 {
  font-size: 36px; /* réduire la taille de la police */
  color: whitesmoke;
  margin-bottom: 10px;
  align-items: center; /* espace entre le nom et le score */
}

.teambody p {
  font-size: 24px; /* réduire la taille de la police */
  color: whitesmoke;
  align-items: center;
  margin: 0; /* enlever les marges par défaut */

}
</style>