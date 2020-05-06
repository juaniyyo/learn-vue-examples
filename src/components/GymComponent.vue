<template>
  <div id="gym" class="container mt-5">
    <h3>{{ titulo }}</h3>
    <div class="d-flex justify-content-between align-items-center">
      <input
        type="text"
        class="form-control m-3"
        v-model="nuevaTarea"
        v-on:keyup.enter="agregarTarea"
      />
      <b-button variant="outline-primary" @click.prevent="agregarTarea"
        >Agregar</b-button
      >
    </div>
    <div class="mt-4" v-for="(tarea, index) in tareas" :key="index">
      <div
        :class="['alert', tarea.estado ? 'alert-success' : 'alert-danger']"
        role="alert"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>{{ tarea.nombre }}</div>
          <div>
            <b-button
              class="botones mx-1"
              variant="success"
              @click.prevent="estado(index)"
              >OK</b-button
            >
            <b-button
              class="botones mx-1"
              variant="danger"
              @click.prevent="eliminar(index)"
              >X</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    titulo: "Gym List con localStorage",
    tareas: [],
    nuevaTarea: ""
  }),
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      this.nuevaTarea = "";
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    estado(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    eliminar(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    }
  },
  created() {
    let datosStorage = JSON.parse(localStorage.getItem("gym-vue"));
    if (datosStorage === null) {
      this.tareas = [];
    } else {
      this.tareas = datosStorage;
    }
  }
};
</script>

<style scoped>
.botones {
  min-width: 60px;
}
</style>
