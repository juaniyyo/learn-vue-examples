<template>
  <div class="container">
    <h1>Posts de Wordpress</h1>
    <div class="card mb-3" v-for="(post, i) in posts" :key="i">
      <img :src="imagen()" class="card-img-top" alt="media alt" />
      <div class="card-body">
        <h5 class="card-title">{{ post.title.rendered }}</h5>
        <p class="card-text">{{ post.content.rendered | limpiar }}</p>
        <p class="card-text">
          <small class="text-muted">Last modified {{ post.modified | tiempo }}</small>
        </p>
        <UserFromPost :autorid="post.author"></UserFromPost>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import UserFromPost from "@/components/UserFromPost.vue";

export default {
  name: "Posts",
  data: () => ({
    posts: [],
  }),
  components: {
    UserFromPost
  },
  methods: {
    imagen() {
      let id = Math.floor(Math.random() * 1000);
      return `https://i.picsum.photos/id/${id}/850/200.jpg`;
    }
  },
  created: async function() {
    try {
      const { data } = await api.getPosts();
      this.posts = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
