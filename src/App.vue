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
  return brand.value + ' ' + product.value
})

const image = computed(() => {
  // Retourne l'URL de l'image de la variante sélectionée
  return variants.value[selectedVariant.value].image
    })
const inStock = computed(() => {
  // Ajouter la condition s'il y a dans le stock
  return variants.value[selectedVariant.value].quantity > 0
})
  
const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity : 10},
  { id: 2235, color: 'blue', image: socksBlueImage, quantity : 3},
])

const cart = ref(0)

const addToCart = () => {
  // Incrémenter dans le panier global
  cart.value += 1

  // Décrémenter la quantité de la variante actuellement sélectionnée
  variants.value[selectedVariant.value].quantity -= 1
}

const selectedVariant = ref(0)

const updateVariant = (index) => {
  selectedVariant.value = index
      console.log ('Selected Variant index : '  + index)
}

const onSale = ref(true)

// si les deux conditions sont True, onSale && inStock
const sale = computed(() => {
  if (onSale.value) {
    return ' est en action'
  }
  return ' '
})

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
        <h1> {{title}} {{sale}}</h1>
        <p v-if="onSale && inStock"> En Solde</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
       <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
        </div>
        <button
          class="button"
          :disabled="!inStock"
          v-on:click="addToCart"
          :class="{ disabledButton: !inStock }"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>