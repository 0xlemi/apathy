<template>
  <div class="new">
    <div class="flex justify-center py-6">
      <h1 class="text-3xl text-blue-900">New Item</h1>
    </div>
    <div class="justify-center px-10 sm:px-20 lg:px-40 py-6 mt-5">


        <div class="mb-6">
           <label class="block text-blue-900 text-md font-bold ml-2 mb-2">
            Title
          </label>


            <!-- Desktop Version -->
            <input type="text" placeholder="Papaya" class=" px-3 py-4 placeholder-blue-300 text-blue-900 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-blue-200 w-full"/>
            <!-- End Desktop Version -->
        </div>

        <div class="mb-12">
           <label class="block text-blue-900 text-md font-bold ml-2 mb-2">
            Description
          </label>

            <!-- Desktop Version -->
            <textarea type="text" placeholder="Type photo description here" class="px-3 py-4 placeholder-blue-300 text-blue-900 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-blue-200 resize-none h-30 w-full"> </textarea>
            <!-- End Desktop Version -->
        </div>

        <div class="mb-20">
          <header class="border-dashed border-2 border-blue-400 py-12 flex flex-col justify-center items-center">
            <p class="mb-3 font-semibold text-blue-900 flex flex-wrap justify-center">
              <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
            </p>
            <input id="hidden-input" type="file" multiple class="hidden" />
            <button id="button" class="mt-2 rounded-sm px-3 py-1 bg-blue-200 hover:bg-blue-300 focus:shadow-outline focus:outline-none">
              Upload a file
            </button>
          </header>
        </div>

        <div class="">

          <!-- Desktop Buttons -->
          <div class="hidden md:flex mt-10 mb-8">
            <div class="flex-1">
              <router-link to="/" class="underline focus:outline-none text-blue-800 font-semibold hover:text-blue-600 py-2 px-4">
                 Back
              </router-link>
            </div>
            <div class="flex-1">
              <div class="flex justify-end">
                <button type="submit" class="bg-blue-800 focus:outline-none hover:bg-blue-900 ml-6 text-white font-bold py-3 px-8 rounded">
                  <p> Submit </p>
                </button>
              </div>
            </div>
          </div>
          <!-- End Desktop Buttons -->
          <!-- Buttons Mobile -->
          <div class="md:hidden mt-10 mb-8">
            <div class="flex mb-6" >
              <button type="submit" class="w-full bg-blue-800 focus:outline-none hover:bg-blue-900 text-white font-bold py-4 rounded-lg">
                <div class="flex justify-center">
                  <p> Submit </p>
                </div>
              </button>
            </div>
            <div class="">
              <router-link to="/" class="w-full border-2 border-blue-200 hover:bg-blue-200 hover:border-blue-300 rounded-lg focus:outline-none text-blue-800 font-semibold hover:text-blue-900 py-2 px-4">
                <div class="flex justify-center py-2">
                  <zondicon icon="cheveron-left" class="h-5 fill-current"/>
                  <p class="ml-2">Back</p>
                </div>
              </router-link>
            </div>
          </div>
          <!-- End Buttons Mobile -->
        </div>



    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  name: 'New',
  components: {
    Zondicon
  }
}
</script>
