<template>
<div class="flex">

  <div class="flex -mr-4 z-20">
      <button  @click="moveLeft(1, false)" class="shadow-md h-10 w-10 mt-24 bg-blue-700  focus:outline-none hover:bg-blue-700 rounded">
        <div class="flex justify-center p-3">
          <zondicon icon="arrow-left" class="fill-current text-white h-full w-full" />
        </div>
      </button>
  </div>
  <div class="flex -mr-6 mt-5" @click="moveLeft(2, true)">
    <photo v-on:closeModal="closeModal" :description="images[0].description" :image="images[0].url" text-size="text-xs pt-3" :title="images[0].name" class="w-32" />
  </div>
  <div class="flex w-40 -mr-6 z-10" @click="moveLeft(1, true)">
    <photo v-on:closeModal="closeModal" :description="images[1].description" :image="images[1].url" text-size="text-sm pt-4" :title="images[1].name" />
  </div>
  <div class="flex w-48 z-20 -mt-5">
    <div class="shadow-xl" @click="open = true" >
      <photo v-on:closeModal="closeModal" :open="open" :description="images[2].description" :image="images[2].url" text-size="pt-6" :title="images[2].name" />
    </div>
  </div>
  <div class="flex w-40 -ml-6 z-10" @click="moveRight(1, true)">
    <photo v-on:closeModal="closeModal" :description="images[3].description" :image="images[3].url" text-size="text-sm pt-4" :title="images[3].name" />
  </div>
  <div class="flex -ml-6 mt-5" @click="moveRight(2, true)">
    <photo v-on:closeModal="closeModal" :description="images[4].description" :image="images[4].url" text-size="text-xs pt-3" :title="images[4].name" class="w-32" />
  </div>
  <div class="flex -ml-4 z-20">
    <button @click="moveRight(1, false)" class="shadow-md h-10 w-10 mt-24 bg-blue-700 focus:outline-none hover:bg-blue-700 rounded">
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
    moveRight: function (times, openModal) {
      for (var i = 0; i < times; i++) {
        var element = this.images.shift();
        this.images.push(element);
      }
      if(openModal){
        this.open = true;
      }
    },
    moveLeft: function (times, openModal) {
      for (var i = 0; i < times; i++) {
        var element = this.images.pop();
        this.images.unshift(element);
      }
      if(openModal){
        this.open = true;
      }
    },
    closeModal: function () {
      this.open = false;
    }
  },
  data() {
    return {
      images: [
        {
          url: 'item1.jpg',
          name: 'Granadas',
          description: 'This is an example description for Granadas'
        },
        {
          url: 'item2.jpg',
          name: 'Pera',
          description: 'This is an example description for Pera'
        },
        {
          url: 'item3.jpg',
          name: 'Papaya',
          description: 'This is an example description for Papaya'
        },
        {
          url: 'item4.jpg',
          name: 'Manzana',
          description: 'This is an example description for Manzana'
        },
        {
          url: 'item5.jpg',
          name: 'Sandia',
          description: 'This is an example description for Sandia'
        }
      ],
      open: false
    }
  }
}
</script>

<style scoped>
</style>
