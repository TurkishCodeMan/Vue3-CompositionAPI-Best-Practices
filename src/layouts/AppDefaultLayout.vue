<template>
  <div class="app-default min-h-screen bg-gray-100">
    <Navbar/>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components:{Navbar}
};
</script>

<style>
</style>