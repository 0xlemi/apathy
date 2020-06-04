<template>
  <div class="home">
    <photo image="item1.jpg" title="image1"/>
  </div>
</template>

<script>
import Carousel from '@/components/elements/Carousel.vue'
import Photo from '@/components/elements/Photo.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Photo
  }
}
</script>
