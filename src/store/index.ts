import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, payload: string) {
      state.token = payload;
    },
  },
  getters: {
    token(state): string {
      return state.token;
    },
  },
});
