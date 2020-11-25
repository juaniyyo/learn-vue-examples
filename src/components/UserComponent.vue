<template>
  <div class="container">
    <h1>Usuarios de Wordpress</h1>
    <div class="row mt-4">
      <div class="col-4" v-for="(user, i) in users" :key="i">
        <div class="card m-2" style="width: 18rem;">
          <img :src="imagen()" class="card-img-top" alt="imagen alt" />
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.description }}</p>
            <router-link
              :to="{ name: 'perfil', params: { id: user.id }}"
              class="btn btn-primary text-white"
            >Ver Perfil</router-link>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ tiempo() }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    imagen() {
      let id = Math.floor(Math.random() * 1000);
      return `https://i.picsum.photos/id/${id}/300/350.jpg`;
    },
    tiempo() {
      let t = Math.floor(Math.random() * 60);
      return `Last updated ${t} mins ago`;
    }
  },
  async created() {
    try {
      const { data } = await api.getUsers();
      this.users = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
</style>
