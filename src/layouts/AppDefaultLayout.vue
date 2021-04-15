<template>
  <div class="app-default">
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

<style scoped lang="scss">
.app-default{
  min-height: 100vh;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(0, 255, 255, 0.2)
  );
}
</style>