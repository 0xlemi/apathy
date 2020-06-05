<template>
<div>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6 lg:ml-8">
        <router-link to="/">
          <img class="h-8 sm:h-9" src="https://www.apithy.com/images/apithy-logo.svg" alt="Phlebotomy USA">
        </router-link>
      </div>
      <!-- <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"> -->
      <div class="lg:hidden block flex w-auto">

          <mobile-menu-button @click.native="toggleMenu" :active="hamburgerButton" ></mobile-menu-button>
      </div>
      <!-- Desktop Menu -->
      <div class="hidden lg:block flex justify-end items-end w-auto">
          <div class="flex mr-6">
              <router-link to="/new" class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  NEW
              </router-link>
          </div>
      </div>
      <!-- End Desktop Menu -->
      <!-- Mobile Menu -->
      <div v-if="hamburgerButton" class="w-full lg:hidden">
          <div class="text-md mt-4">
              <router-link to="/new" class="hover:bg-gray-200 rounded-lg block px-4 py-3 text-gray-700 hover:text-gray-800">
                  NEW
              </router-link>
          </div>
      </div>
      <!-- End Mobile Menu -->
  </nav>
</div>
</template>

<script>
import MobileMenuButton from '@/components/layouts/navbar/MobileMenuButton.vue';
export default {
  components: {
    'mobile-menu-button': MobileMenuButton
  },
  methods: {
    toggleMenu: function () {
      this.hamburgerButton = !this.hamburgerButton;
    }
  },
  data: function() {
    return {
      hamburgerButton: false
    }
  }
}
</script>
