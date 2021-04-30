<template>
  <div class="weather" :class="[city && calcCelcius > 15 ? 'hot' : 'cold']">
    <Search
      :func="createPromise"
      :reloadFunc="cleanPromise"
      :loading="loading"
      :placeHolder="'Search By City Name'"
    />

    <li :key="city.id" class="weather-grid-item" v-if="city">
      <h2 class="title">{{ city.name }} / {{ city.sys.country }}</h2>
      <p class="cloud">%{{ city.clouds.all }}</p>
      <p class="wind">{{ city.wind.speed }} km/h</p>
      <p class="max_temp">{{ calcCelcius }} C</p>
    </li>
  </div>
</template>

<script>
import { useStore } from "vuex";
import useSearch from "@/use/other/useSearch";
import Search from "@/components/Search";
import useWeather from "@/modules/weather/use/useWeather";
export default {
  components: { Search },
  setup() {
    const store = useStore();
    const { createPromise, cleanPromise, loading } = useSearch(
      (val) => store.dispatch("Weather/searchByCityName", val),
      () => store.commit("Weather/SET_CITY", undefined)
    );

    const { city,calcCelcius } = useWeather();


    return { city, calcCelcius, createPromise, cleanPromise, loading };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_mixins.scss";
@import "@/assets/style/_methods.scss";
.hot {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.2) 0%,
    rgba(9, 9, 121, 0.35) 0%,
    rgba(9, 12, 123, 0.3) 1%,
    rgba(9, 12, 123, 0.5) 5%,
    rgba(1, 186, 238, 0.4) 22%,
    rgba(255, 124, 0, 0.3) 95%
  );
}

.cold {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.24) 0%,
    rgba(9, 9, 121, 0.35) 0%,
    rgba(9, 12, 123, 0.3) 1%,
    rgba(9, 12, 123, 0.5) 1%,
    rgba(1, 186, 238, 0.4) 61%,
    rgba(0, 211, 255, 0.3) 100%
  );
}

.weather {
  @extend %align-center;
  justify-content: center;
  flex-direction: column;

  min-height: 100vh;

  &-grid-item {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 18px;
    border-radius: 15px;
    min-height: 280px;
    background: linear-gradient(to right, #ffcb9d, #3ea3f6);
    min-width: 250px;
    & > h2,
    p {
      margin-bottom: 20px;
      background: #f6913e;
      color: #fff;
      font-size: 20px;
      padding: 10px;
      border-radius: 10px;
    }
  }
}
</style>