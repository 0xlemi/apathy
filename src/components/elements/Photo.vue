<template>
  <div>
    <button :class="classValue" class="focus:outline-none block">
      <img class="border-blue-800 border-4 rounded-lg":src="resolve_img_url(image)" >
    </button>
    <console-modal :class="open ? '' : 'hidden'" :open="open" :title="title" @close="closeModal">
      <img class="" :src="resolve_img_url(image)" >
    </console-modal>
  </div>
</template>

<script>
import ConsoleModal from './ConsoleModal.vue'

export default {
  props: {
    classValue: String,
    image: String,
    title: String,
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
