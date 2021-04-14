<template>
  <div class="car">
    <Search
      :func="createPromise"
      :reloadFunc="cleanPromise"
      :loading="loading"
      :placeHolder="'Search Make Name'"
    />
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-4" v-if="allCar">
      <li
        v-for="car in allCar"
        :key="car.Make_ID"
        class="bg-gray-200 rounded-md p-4 grid place-items-center"
      >
        <h2 class="p-2 bg-gray-100 rounded-lg my-2 text-lg">
          {{ car.Make_Name }}
        </h2>
        <slot name="secondRow" :car="car"></slot>
        <AppButton @click="removeCar(car)" class="bg-red-300">Remove</AppButton>
      </li>
    </ul>
  </div>
</template>

<script>
import useCar from "@/use/car/useCar"
import useSearch from "@/use/other/useSearch"
import { onMounted } from "vue"
import {useStore} from "vuex"
import AppButton from "@/components/AppButton"
import Search from "@/components/Search"
export default {
  components: { AppButton,Search },
  setup() {
    const store=useStore();
    const { allCar, loadCar, removeCar } = useCar();
    onMounted(async () => {
      await loadCar();
    });
    const { createPromise, cleanPromise, loading } = useSearch(
      (val) => store.commit("Cars/SEARCH_CAR", val),
      () => store.dispatch("Cars/getCar")
    );
    return { allCar, removeCar, createPromise, cleanPromise, loading };
  },
};
</script>

<style>
</style>