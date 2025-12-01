<script setup>
import { ref, computed } from 'vue';
import ProductDisplay from "@/components/ProductDisplay.vue";

const cart = ref(0)

const premium = ref(true)

</script>
  
<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart }})</div>
  <product-display :premium="premium"></product-display>
  <product-display></product-display>
  <product-display></product-display>

</template>