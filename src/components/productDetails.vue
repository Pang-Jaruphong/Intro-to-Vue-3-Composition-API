<script setup>
const props = defineProps({
  details: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for = "detail in props.details" :key="detail"> {{detail}} </li>
  </ul>
</template>