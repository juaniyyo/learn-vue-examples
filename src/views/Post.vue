<template>
  <div id="posts">
    <h2 class="my-3">
      <b class="text-primary">{{ user.user_nicename | capitalize }}</b> Aquí puedes gestionar todos los <b class="text-danger">posts</b>
    </h2>
    <PostComponent />
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "Posts",
  components: {
    PostComponent
  },
  data: () => ({
    user: ""
  }),
  created() {
    this.user = this.$store.state.wordpress.user;
  }
};
</script>

<style scoped>
</style>
