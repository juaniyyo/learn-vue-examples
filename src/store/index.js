import Vue from "vue";
import Vuex from "vuex";
import wordpress from "../modules/wordpress";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contador: 3,
    cursos: []
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    disminuir(state, n) {
      state.contador -= n;
    },
    llenarCursos(state, cursosAction) {
      state.cursos = cursosAction;
    }
  },
  actions: {
    async obtenerCursos({ commit }) {
      const response = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      const cursos = await response.json();
      commit("llenarCursos", cursos);
    }
  },
  modules: {
    wordpress
  }
});
