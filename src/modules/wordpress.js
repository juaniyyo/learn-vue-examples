import axios from "axios";

axios.defaults.baseURL = "http://1024mbitses.local/wp-json/";

export default {
  namespaced: true,
  state: {
    user: {},
    token: localStorage.getItem("_token")
      ? JSON.parse(localStorage.getItem("_token")).token
      : null,
    auth: false
  },
  mutations: {
    setUser(state, user) {
      localStorage.setItem("_token", JSON.stringify(user));
      state.auth = true;
    },
    checkUser(state) {
      if (localStorage.getItem("_token")) {
        state.user = JSON.parse(localStorage.getItem("_token"));
        state.auth = true;
      }
    },
    clearStorage(state) {
      localStorage.clear();
      state.auth = false;
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await axios.post("jwt-auth/v1/token", {
        username: payload.nombre,
        password: payload.password
      });
      const user = await response.data;
      commit("setUser", user);
    },
    isAuthenticate({ commit }) {
      commit("checkUser");
    },
    logout({ commit }) {
      commit("clearStorage");
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    isAuth: state => {
      return state.auth;
    }
  }
};
