import axios from "axios";

const state = {
    carList: []
}
const getters = {
    getAllCar(state) {
        return state.carList;
    }
}
const mutations = {
    SET_ALLCAR(state, value) {
        state.carList = value;
    },
    REMOVE_CAR(state, value) {
        state.carList.splice(state.carList.findIndex(p => p.email == value.email), 1);
    },

    //Actuallly is a computed properties methods actions return a searchedResultArray
    SEARCH_CAR(state, value) {
        console.log(value)
        state.carList = state.carList.filter(p => {
            return (
                    p.Make_Name
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) != -1
            );
        })

    }
}
const actions = {
    async getCar({ commit }) {
        let response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json");
        console.log(response.data)
        let arr = [];
        for (let i = 0; i < 15; i++) {
            arr.push(response.data.Results[i])
        }
        commit("SET_ALLCAR", arr)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}