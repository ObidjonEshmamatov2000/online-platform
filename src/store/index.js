import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "star",
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("USER", user);
    },
  },
  modules: {},
});
