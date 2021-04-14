
import { computed } from "@vue/runtime-core";
import {useStore} from "vuex";
export default function useUser(){
    const store=useStore();
    const allUser=computed(()=>store.getters["Users/getAllUser"]);
    const loadUser=(async()=>store.dispatch("Users/getUser"));
    const removeUser=(async (user)=>store.commit("Users/REMOVE_USER",user));
    return {allUser,loadUser,removeUser}
}