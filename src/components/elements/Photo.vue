<template>
  <div>
    <button @click="open = true" class="focus:outline-none rounded-lg bg-gray-500 border-4 border-blue-800 block">
      <img class="w-40" :src="resolve_img_url(image)" >
    </button>
    <console-modal :open="open" :title="title" @close="open = false">
      <img class="" :src="resolve_img_url(image)" >
    </console-modal>
  </div>
</template>

<script>
import ConsoleModal from './ConsoleModal.vue'

export default {
  props: {
    image: String,
    title: String
  },
  components:{
    ConsoleModal
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../../assets/images/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style scoped>
</style>
