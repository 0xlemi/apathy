<template>
  <div class="home">
    <div class="flex justify-center py-6">
      <h1 class="text-3xl text-blue-900">Carousel</h1>
    </div>
    <div class="flex justify-center py-6 mt-5">
      <carousel/>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/elements/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
