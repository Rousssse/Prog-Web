<template>
    <div class="ligue-card" v-if="image">
        <div>
            <img class="image" :src="image" :alt="ligue">
        </div>
        <div class="ligue-elt">
        <h1> {{ ligue }}</h1>
        </div>
      
    </div>
  </template>
  
  <script>
  export default{
    name : 'LigueCard',
    props : {
      ligue : {type : String, required: true},
      image : {type: String, default: "https://gamingnewz.fr/wp-content/uploads/2020/04/Logo-lfl.png"}
    } 
  }
  </script>
  
  <style scoped>

@media only screen and (min-width: 1024px){
    .ligue-card {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: #6b83a4;
    box-shadow: inset 20px 20px 27px #636c7a,
            inset -20px -20px 27px #97aac2;
  }
    .image {
    height: 5vw;
    width: 5vw;
    margin-left: 2vw;
    margin-right: 4vw;
  }

  .ligue-elt h1 {
    font-size: 1.5vw;
    position: relative;
    color: #282A35;
    margin-top: -1vw;
  }
}

  @media only screen and (max-width: 767px){
    .ligue-card {
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: #6b83a4;
    box-shadow: inset 20px 20px 27px #636c7a,
            inset -20px -20px 27px #97aac2;
  }
    .image {
    height: 7vw;
    width: 7vw;
    margin-left: 3vw;
  }

  .ligue-elt h1 {
    font-size: 2.5vw;
    color: #282A35;
    margin-top: -4vw;
  }

  }

  @media only screen and (max-width: 1023px) and (min-width: 768px){
    .ligue-card {
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: #6b83a4;
    box-shadow: inset 20px 20px 27px #636c7a,
            inset -20px -20px 27px #97aac2;;
  }
    .image {
    height: 7vw;
    width: 7vw;
    margin-left: 3vw;
  }

  .ligue-elt h1 {
    font-size: 2.5vw;
    color: #282A35;
    margin-top: -2vw;
  }

  }

  </style>
  
  