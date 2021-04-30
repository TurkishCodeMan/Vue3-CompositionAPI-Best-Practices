import { computed } from "@vue/runtime-core"
import { useStore } from "vuex"
export default () => {
    const store = useStore()
    const city = computed(() => store.getters["Weather/getCity"])
    const calcCelcius = computed(() => {
        return Math.floor(city.value.main.temp - 273.15);
    });
    return { city,calcCelcius }
}