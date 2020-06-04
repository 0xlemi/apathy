<template>
<div class="flex">

  <div class="flex -mr-4 z-20">
      <button  @click="leftButtonClick" class="shadow-md h-10 w-10 mt-24 bg-blue-700  focus:outline-none hover:bg-blue-700 rounded">
        <div class="flex justify-center p-3">
          <zondicon icon="arrow-left" class="fill-current text-white h-full w-full" />
        </div>
      </button>
  </div>
  <div class="flex -mr-6 mt-5">
    <photo :image="images[0]" :clickable="false" class="w-32" title="image1"/>
  </div>
  <div class="flex w-40 -mr-6 z-10">
    <photo :image="images[1]" :clickable="false" title="image1"/>
  </div>
  <div class="flex w-48 z-20 -mt-5">
    <div class="shadow-xl">
      <photo :image="images[2]" :clickable="true" title="image1"/>
    </div>
  </div>
  <div class="flex w-40 -ml-6 z-10">
    <photo :image="images[3]" :clickable="false" title="image1"/>
  </div>
  <div class="flex -ml-6 mt-5">
    <photo :image="images[4]" :clickable="false" class="w-32" title="image1"/>
  </div>
  <div class="flex -ml-4 z-20">
    <button @click="rightButtonClick" class="shadow-md h-10 w-10 mt-24 bg-blue-700 focus:outline-none hover:bg-blue-700 rounded">
      <div class="flex justify-center p-3">
        <zondicon icon="arrow-right" class="fill-current text-white h-full w-full" />
      </div>
    </button>
  </div>

</div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import Photo from '@/components/elements/Photo.vue'

export default {
  components: {
    Zondicon,
    Photo
  },
  methods: {
    rightButtonClick: function () {
      var element = this.images.pop();
      this.images.unshift(element);
    },
    leftButtonClick: function () {
      var element = this.images.shift();
      this.images.push(element);
    }
  },
  data() {
    return {
      images: [
        'item1.jpg',
        'item2.jpg',
        'item3.jpg',
        'item4.jpg',
        'item5.jpg',
      ]
    }
  }
}
</script>

<style scoped>
</style>
