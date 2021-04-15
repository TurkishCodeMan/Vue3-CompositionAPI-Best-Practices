<template>
  <div class="appLayout">
    <div class="" v-if="error">Uh Oh ...{{ error }}</div>
    <Suspense v-else>
      <template #default>
        <component :is="layout" />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script>
const AppDefaultLayout = defineAsyncComponent(() =>
  import("@/layouts/AppDefaultLayout")
);
import { useRoute } from "vue-router";
import { computed, ref, onErrorCaptured, defineAsyncComponent } from "vue";
export default {
  components: { AppDefaultLayout },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "AppDefaultLayout");
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { layout, error };
  },
};
</script>

<style lang="scss">
.appLayout{
  width: 100%;
}
</style>