<template>
    <div class="ligue-card" v-if="image">
        <div>
            <img class="image" :src="image" :alt="ligue">
        </div>
        <div class="ligue-elt">
        <h1 class="ligue"> {{ ligue }}</h1>
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
  
  <style>
    .ligue-card {
    position: relative;
    list-style: none;
    color: #ffffff;
    display: flex;
    cursor: pointer;
    background: #6b83a4;
    box-shadow: inset 20px 20px 27px #556782,
            inset -20px -20px 27px #819fc6;;
  }
    .image {
    height: 60px;
    width: 60px;
    margin-right: 30px;
    margin-left: 20px;
  }

  .ligue {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }
  
  </style>
  
  