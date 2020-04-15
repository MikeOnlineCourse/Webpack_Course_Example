import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})