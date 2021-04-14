
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default function useUser() {
    const store = useStore();
    const allCar = computed(() => store.getters["Cars/getAllCar"]);
    const loadCar = (async () => store.dispatch("Cars/getCar"));
    const removeCar = (async (car) => store.commit("Cars/REMOVE_CAR", car));
    return { allCar, loadCar, removeCar }
}