<template>
  <div id="login" class="container mt-5">
    <div class="d-flex justify-content-center">
      <div class="form-login" v-if="!auth">
        <h3>{{ titulo }}</h3>
        <form>
          <div class="form-group">
            <label for="nombre">Tu usuario</label>
            <input type="text" class="form-control" required v-model="nombre" />
            <small id="usernameHelp" class="form-text text-muted"
              >Con este nombre te presentaremos a los demás.</small
            >
          </div>
          <div class="form-group">
            <label for="correo">Dirección de correo</label>
            <input
              type="email"
              class="form-control"
              required
              v-model="correo"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Aquí te enviaremos el correo de recuperación de
              contraseña.</small
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              required
              v-model="password"
            />
          </div>
          <b-button
            class="btn-block mt-5"
            variant="outline-primary"
            @click="login({nombre, password})"
            >Ingresar</b-button
          >
        </form>
      </div>
      <div v-else>
        <h3>{{ logTitle }} <b class="text-primary"> {{ user.user_display_name }}</b></h3>
        <small>{{ token }}</small>
        <b-button
            class="btn-block mt-2 mb-5"
            variant="outline-primary"
            @click="logout"
            >Salir</b-button
          >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "login",
  data: () => ({
    titulo: "Ingresa tu datos de acceso",
    logTitle: "Bienvendido de nuevo",
    nombre: "juaniyyo",
    correo: "correo@correo.com",
    password: "Dionisio1"
  }),
  computed: {
    ...mapState("wordpress", ["user", "token", "auth"])
  },
  methods: {
    ...mapActions("wordpress", ["login", "isAuthenticate", "logout"])
  }
};
</script>
<style scoped></style>
