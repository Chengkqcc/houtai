import Vue from "vue"
import Vuex from "vuex"
import state from "./state/state"
import actions from "./actions/actions"
import mutations from "./mutations/mutations"
Vue.use(Vuex)
let store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store