<script setup>
import {ref} from 'vue';

const review = ref({
  name: '',
  content :'',
  rating: null
})

const props = defineProps({
  reviews : {
    type : Array,
    required :true
  }
})

const emit =defineEmits(['review-submitted'])

const addReview = {
  name: review.value.name,
  content: review.value.content,
  rating: review.value.rating
}

emit('review-submitted', productReview)

const onSubmit = () => {
  if (review.value.name === '' || review.value.content === '' || review.value.rating === null){
    alert('Veuillez remplir tous les champs');
  return;
}
console.log('Avis soumis : ', review.value);

review.value.name = '';
review.value.content = '';
review.value.rating = null
};

</script>
<template>
  <form class="review-form" @submit.prevent = "onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="review.name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review.content"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="review.rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>
  <div class="review-container">
    <h3> Reviews : </h3>
      <ul>
        <li v-for = "(review, index) in reviews" :key="index">
          {{review.name}} give this {{review.rating}} stars
          <br/>
          "{{ review.content}}"
        </li>
      </ul>
  </div>
</template>