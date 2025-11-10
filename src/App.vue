<script setup>
import { ref } from 'vue'

// const product = ref('Socks');
const image = '/src/assets/images/socks_blue.jpeg';
// const inStock =ref(false)
// Dàclarer de produit en utilisant inventaire
const product =ref ({
  name: 'Socks',
  inventory: 5  // utiliser de quantité en stock
})
const onSale = ref (true)
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" alt="Chausettes">
      </div>
      <div class="product-info">
        <h1> {{product.name}} </h1>

        <p v-if="product.inventory > 10"> En stock </p>
        <p v-else-if ="product.inventory > 0 && product.inventory <= 10"> Faible stock </p>
        <p v-else> En rupture </p>

        <p v-if="onSale"> En solde </p>
        <p v-else> </p>

        <p v-show = "inStock">En stock</p>
        <p v-show = "!inStock">Rupture de stock</p>
        <p v-if = "inStock">En stock</p>
        <p v-else> En rupture de stock</p>
      </div>
    </div>
  </div>
</template>