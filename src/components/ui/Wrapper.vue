<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/_mixins";
.container {
  margin: 0 auto;
  width: 100%;
  @include mobile {
    max-width: 100%;
  }
  @include tablet {
    max-width: 1024px;
  }
  @include large {
    max-width: 1600px;
  }
}
</style>
