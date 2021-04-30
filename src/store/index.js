import { createStore } from 'vuex'
import Users from "@/store/modules/users"
import Cars from "@/store/modules/cars"
import Weather from "@/modules/weather/store"
export default createStore({
  modules: {
    Users, Cars,
    ...Weather
  }
})
