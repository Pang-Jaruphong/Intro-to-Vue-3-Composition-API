<script setup>
import {computed, ref} from 'vue'
import socksGreenImage from './assets/images/socks_green.jpeg'
import socksBlueImage from './assets/images/socks_blue.jpeg'

// Variable pour utiliser pour calculer
const product = ref('Socks')
const brand = ref('CPNV')

// Définir la propriété calculée
const title = computed(() =>{
  // Concaténation de la marque et du nom du produit
  return brand.value + '' + product.value
})

const image = ref(socksGreenImage)
const inStock = ref(true)
  
const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity : 10},
  { id: 2235, color: 'blue', image: socksBlueImage, quantity :0},
])

const cart = ref(0)

const addToCart = () => cart.value += 1

const updateImage = (variantImage) => image.value = variantImage

methods : {
  updatevariant : fonction (index){
    this.selectedVariant =index
    this.variants[index].variantSoldOut = this.variants[index].quantity === 0;
  }
}
</script>
  
<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart }})</div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">    
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1> {{title}} </h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants"
          :key="variant.variantid"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
        </div>
        <button
          class="button" 
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>