<template>
  <div>
    <div class="border-blue-800 border-4 rounded-lg focus:outline-none relative">
        <img class="" :src="resolve_img_url(image)" >
        <div class="absolute inset-x-0 top-0 bg-black opacity-0 hover:opacity-75 h-full ">
          <div class="px-4 text-white" :class="textSize">
            <p class="font-semibold pb-3">{{ title }}</p>
            <hr/>
            <p class="pt-3">{{ description }}</p>
          </div>
        </div>

    </div>
    <console-modal :class="open ? '' : 'hidden'" :open="open" :title="title" @close="closeModal">
      <img class="" :src="resolve_img_url(image)" >
    </console-modal>
  </div>
</template>

<script>
import ConsoleModal from './ConsoleModal.vue'

export default {
  props: {
    textSize: String,
    image: String,
    title: String,
    description: String,
    open: Boolean,
    clickable: Boolean
  },
  components:{
    ConsoleModal
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('../../assets/images/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    },
    // openModal: function () {
    //   if (this.clickable) {
    //     this.open = true;
    //   }
    // },
    closeModal: function () {
      this.$emit('closeModal');
    }
  }
}
</script>

<style scoped>
</style>
