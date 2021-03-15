import axios from "axios";

export default {
    state:{
        user: null
    },
    mutations:{
        setUser(state, user){
            state.user = user
        }
    },
    actions: {
        async login({commit}, obj){
            await axios.get(`${process.env.VUE_APP_API_URL+obj}`)
            // console.log(user)
            commit("setUser")
        }
    },
}