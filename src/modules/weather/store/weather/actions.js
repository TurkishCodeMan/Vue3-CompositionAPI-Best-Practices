import axios from "axios";

const address = {
    searchCityName: "http://api.openweathermap.org/data/2.5/weather"
}
export const searchByCityName = async ({commit}, payload) => {
    try {
        let response = await axios.get(address.searchCityName + `?q=${payload}&appid=${process.env.VUE_APP_APIKEY}`)
        console.log(response)
        commit("SET_CITY", response.data)
    } catch (error) {
        console.log(error.message)
        return error;
    }
}