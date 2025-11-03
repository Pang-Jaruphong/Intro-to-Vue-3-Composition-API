<script setup>
import { ref } from 'vue'
const product = 'Chaussettes bleus';
const description = 'Les meilleures chaussettes de training jamais faites !';
const image = '/src/assets/images/socks_blue.jpeg';
const url ='http://localhost:5175/sockbleu';
</script>

<template>
  <div class="product-display">
    <div class="product-container">

      <div class="product-info">
        <h1> {{ product }} </h1>

        <img v-bind:src="image" alt = "Chausettes">
        <h2> {{ description }} </h2>
        <a :href="url" target="_blank">Voir ce produit</a>
      </div>
    </div>
  </div>
</template>