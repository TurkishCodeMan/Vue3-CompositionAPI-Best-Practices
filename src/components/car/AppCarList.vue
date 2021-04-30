<template>
  <div class="car">
    <Search
      :func="createPromise"
      :reloadFunc="cleanPromise"
      :loading="loading"
      :placeHolder="'Search Make Name'"
    />
    <ul class="car-grid-container" v-if="allCar">
      <li v-for="car in allCar" :key="car.Make_ID" class="car-grid-item">
        <h2 class="car-info">
          {{ car.Make_Name }}
        </h2>
        <slot name="secondRow" :car="car"></slot>
        <AppButton @click="removeCar(car)" class="btn btn-remove"
          >Remove</AppButton
        >
      </li>
    </ul>
  </div>
</template>

<script>
import useCar from "@/use/car/useCar";
import useSearch from "@/use/other/useSearch";
import { onMounted } from "vue";
import { useStore } from "vuex";
import AppButton from "@/components/AppButton";
import Search from "@/components/Search";
export default {
  components: { AppButton, Search },
  setup() {
    const store = useStore();
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

<style lang="scss" scoped>
@import "@/assets/style/_colors";
@import "@/assets/style/_mixins";
@import "@/assets/style/_methods";
.car {
  display: flex;
  width: 100%;

  &-grid-container {
    display: grid;
    width: 100%;
  //  place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    .car-grid-item {
      padding: 45px;

      background: $card-bg;
      list-style-type: none;
      display: grid;
      place-items: center;
      border-radius: 12px;

      .car-info {
        font-size: 18px;
        max-height: 30px;
      }
    }
  }
}
</style>