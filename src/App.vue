<script setup>
import { ref } from 'vue'

const product = ref('Socks');
const image = '/src/assets/images/socks_blue.jpeg';
const inStock =ref(false)
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" alt="Chausettes">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-show = "inStock">En stock</p>
        <p v-show = "!inStock">Rupture de stock</p>
        <p v-if = "inStock">En stock</p>
        <p v-else> En rupture de stock</p>
      </div>
    </div>
  </div>
</template>