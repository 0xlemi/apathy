<template>
  <div class="bg-blue-100" id="app">
    <div class="flex flex-col sm:min-h-screen bg-hero-tiny-checkers-blue-200">


        <div id="nav">
          <nav-bar></nav-bar>
        </div>

        <div class="mt-10 mb-24">
          <router-view/>
        </div>


      <div id="footer">
          <v-footer></v-footer>
        </div>

      </div>


  </div>
</template>

<script>
import NavBar from '@/components/layouts/NavBar.vue';
import VFooter from '@/components/layouts/Footer.vue';

export default {
  components: {
    NavBar,
    VFooter
  }
}

</script>

<style src="./assets/styles/tailwind.css"></style>
