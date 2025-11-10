<script setup>
import { ref } from 'vue'
import socksGreenImage from './assets/images/socks_green.jpeg'

const product = ref('Socks')
const image = ref(socksGreenImage)
const detail = { coton : '50%', laine : '30%', polyester : '20%'}
// propriété variants contenant les ids et les couleurs
const variants = [
  {id:2234, color :'green'},
  {id:2235, color : 'blue'}
]
const sizes = ['S', 'M', 'L', 'XL'];
// v-for la directive pour la gestion des boucles et :key= pour la gestion des performances des listes
</script>
  
<template>
  <div class="nav-bar"></div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">    
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <ul>
          <li v-for = "size in sizes" :key="size"> {{size}} </li>
        </ul>
        <ul>
          <li> Coton : {{detail.coton}} </li>
          <li> Laine : {{detail.laine}} </li>
          <li> Polyester : {{detail.polyester}} </li>
        </ul>
      </div>
    </div>
  </div>
</template>