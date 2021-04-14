<template>
  <div class="search w-1/2 fixed right-0 top-3">
    <label for="searchText" v-if="loading" class="text-gray-50 ">Loading...</label>
    <input
      id="searchText"
      v-model="searchInput"
      type="text"
      :placeholder="placeHolder"
      class="py-2 px-3 bg-gray-200 rounded-lg w-10/12"
    />
    <button class="p-2 bg-blue-300 rounded-md w-10/12 md:w-auto">Search</button>
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

<style>
</style>