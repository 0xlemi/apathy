<template>
  <div class="flex justify-center mt-6" >
    <Modal :open="open" @close="$emit('close')">

        <div class="max-h-screen max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl shadow-2xl subpixel-antialiased rounded bg-white border-black mx-auto">
          <div class="flex items-center h-8 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black">
            <button @click="$emit('close')" class="flex ml-2 items-center text-center border-red-900 bg-red-500 focus:bg-red-700 focus:outline-none shadow-inner rounded-full w-4 h-4">
            </button>
            <button @click="$emit('close')" class="ml-2 border-yellow-900 bg-yellow-500 focus:bg-yellow-700 focus:outline-none shadow-inner rounded-full w-4 h-4">
            </button>
            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-4 h-4">
            </div>
            <div class="font-mono mx-auto pr-16">
              {{ title }}
            </div>
          </div>

          <div class="flex w-full justify-center font-mono rounded-b overflow-hidden">
            <slot></slot>
          </div>
        </div>

    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  props: {
    open: Boolean,
    title: String
  },
  components: {
    Modal
  },
  data() {
    return {
    }
  },
}
</script>
