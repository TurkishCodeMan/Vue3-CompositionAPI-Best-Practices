<template>
  <div class="search">
    <label for="searchText" v-if="loading" class="search-loading"
      >Loading...</label
    >
    <input
      id="searchText"
      v-model="searchInput"
      type="text"
      :placeholder="placeHolder"
      class="search-input"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";
export default {
  props: {
    func: { type: Function },
    reloadFunc: { type: Function },
    placeHolder: { type: String },
    loading: { type: Boolean },
  },
  setup(props) {
    const searchInput = ref("");

    watch(searchInput, () => {
      if (searchInput.value != "") {
        props.func(searchInput.value);
      } else {
        props.reloadFunc();
      }
    });

    return { searchInput, ...props };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_mixins";
.search {
  display: flex;
  align-items: center;
  position: absolute;
  right: 20%;
  top: 16px;
  width: 340px;
  &-input {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  @include tablet {
    right: 12px;
    top: 16px;
    width: 320px;
  }
}
</style>