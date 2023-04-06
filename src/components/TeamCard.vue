<template>
  <div class="team-card">
    <img v-bind:src="image"/>
    <div class="team-body">
      <h2 class="name">{{ name }}</h2>
      <p class="ligue"> {{ ligue }}</p>
    </div>
  </div>
</template>

<script>
export default{
  name : 'TeamCard',
  props : {
    name : {type : String, required: true},
    ligue : String,
    image : {type: String, default: "https://lollfl.com/assets/logo-intro-home.svg?3d72643"}
  } 
}
</script>

<style>
.team-card {
  display: flex;
  width: 400px; 
  margin: 10px auto; 
  background-color: rgb(250, 83, 102); 
  box-shadow: 0px 5px 10px #ff3636; 
  text-align: right;
}
.team-card img { 
  width: 40%;
}


.team-body {
  display: inline;
  text-align: right;
  padding: 40px 60px;
  box-sizing: border-box;
}

.team-body h2 {
  font-size: 100 px;
  color:black;
  text-align:right;
}

.team-body p {
  font-size: 50 px;
  color:rgb(0, 0, 0);
  text-align:right;
  padding-right: 20px;
  
}

</style>

