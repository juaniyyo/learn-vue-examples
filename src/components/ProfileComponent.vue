<template>
  <div class="container">
    <h1 class="mt-4">{{ profile.name }}</h1>
    <div class="row mt-4">
      <div class="card mb-3">
        <img :src="imagen()" class="card-img-top" alt />
        <div class="card-body">
          <h4
            id="name"
            contenteditable
            class="card-title name"
            v-text="profile.name"
            @blur="onEdit"
            @keydown.enter="endEdit"
          ></h4>
          <p
            id="description"
            contenteditable
            class="card-text description"
            v-text="profile.description"
            @blur="onEdit"
            @keydown.enter="endEdit"
          ></p>
          <p class="card-text">
            <small class="text-muted">{{ tiempo() }}</small>
          </p>
          <div class="d-flex justify-content-around">
            <router-link to="/wordpress/users" class="btn btn-block btn-outline-primary">Regresar</router-link>
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
      profile: [],
      user: {
        name: "",
        description: "",
        altura: ""
      }
    };
  },
  methods: {
    imagen() {
      let id = Math.floor(Math.random() * 1000);
      return `https://i.picsum.photos/id/${id}/900/350.jpg`;
    },
    tiempo() {
      let t = Math.floor(Math.random() * 60);
      return `Last updated ${t} mins ago`;
    },
    onEdit(evt) {
      let type = evt.target.id;
      if (type == "name") {
        this.user = {
          name: evt.target.innerText,
          description: this.profile.description,
        };
      }
      if (type == "description") {
        this.user = {
          name: this.profile.name,
          description: evt.target.innerText,
        };
      }
    },
    endEdit(evt) {
      let type = evt.target.id;
      if (type == "name") {
        this.$el.querySelector(".name").blur();
        this.updateData(this.profile.id, this.user);
      }
      if (type == "description") {
        this.$el.querySelector(".description").blur();
        this.updateData(this.profile.id, this.user);
      }
    },
    async updateData(id, payload) {
      const response = await api.updateUser(id, payload);
      console.log(response);
    }
  },
  async created() {
    try {
      const { data } = await api.getUser(this.$route.params.id);
      console.log(data);
      this.profile = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
</style>
