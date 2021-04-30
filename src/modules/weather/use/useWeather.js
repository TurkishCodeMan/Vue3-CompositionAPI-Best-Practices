import { computed } from "@vue/runtime-core"
import {useStore} from "vuex"
export default () => {
    const store = useStore()
    const city = computed(() => store.getters["Weather/getCity"])

    return { city }
}