<template>
  <div class="bg-purple-400 p-12 md:p-8 w-full mb-4 flex justify-between">
    <!--Menu Items -->
    <div class="menus flex ">
      <router-link
        class="bg-green-300 p-2 rounded-md  w-18"
        tag="a"
        :to="{ name: 'Home' }"
        >Home</router-link
      >

      <router-link
        class="bg-green-300 p-2 rounded-md mx-4 w-18"
        tag="a"
        :to="{ name: 'Car' }"
        >Car</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>