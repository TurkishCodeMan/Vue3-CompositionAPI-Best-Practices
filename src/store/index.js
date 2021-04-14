import { createStore } from 'vuex'
import Users from "@/store/modules/users"
import Cars from "@/store/modules/cars"
export default createStore({
  modules: {
    Users, Cars
  }
})
