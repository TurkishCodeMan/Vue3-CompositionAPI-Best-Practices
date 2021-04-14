import axios from "axios";

const state = {
    userList: []
}
const getters = {
    getAllUser(state) {
        return state.userList;
    }
}
const mutations = {
    SET_ALLUSER(state, value) {
        state.userList = value;
    },
    REMOVE_USER(state, value) {
        state.userList.splice(state.userList.findIndex(p => p.email == value.email), 1);
    },
    SEARCH_USERBYNAME(state, value) {
        state.userList = state.userList.filter(p => {
            return (
                p.name.first
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) != -1
            );
        })

    }
}
const actions = {
    async getUser({ commit }) {
        let response = await axios.get("https://randomuser.me/api/?results=5");
        return commit("SET_ALLUSER", response.data.results);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}