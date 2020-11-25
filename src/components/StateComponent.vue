<template>
  <div id="state" class="container mt-5">
    <h3>{{ title }}</h3>
    <div class="d-flex justify-content-center align-items-center">
      <h5 class="my-4">
        Contador:
        <b>{{ contador }}</b>
      </h5>
      <b-button class="mx-5" variant="primary" @click="incrementar">
        Incrementar Contador
      </b-button>
      <b-button class="mx-5" variant="success" @click="disminuir(2)">
        Disminuir Contador
      </b-button>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <ul>
        <li v-for="curso in cursos" :key="curso.id">
          {{ curso.title }}
        </li>
      </ul>
    </div>
    <div class="query-params">
      <h3>Detectar y recoger query params de router-link</h3>
      <router-link :to="{ query: { seccion: 1 } }" class="btn btn-primary mx-2">
        1
      </router-link>
      <router-link :to="{ query: { seccion: 2 } }" class="btn btn-primary mx-2">
        2
      </router-link>
      <router-link :to="{ query: { seccion: 3 } }" class="btn btn-primary mx-2">
        3
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: () => ({
    title: "Page for testing VUEX state management adn query params"
  }),
  watch: {
    "$route.query.seccion": {
      immediate: true,
      handler(seccion) {
        console.log(`Seccion ha cambiado ${seccion}`);
      }
    }
  },
  computed: mapState({
    contador: state => state.contador,
    cursos: state => state.cursos
  }),
  methods: {
    ...mapMutations(["incrementar", "disminuir"]), //metodo de destructuring ...
    ...mapActions(["obtenerCursos"])
  },
  created() {
    this.obtenerCursos();
  }
};
</script>

<style scoped></style>
