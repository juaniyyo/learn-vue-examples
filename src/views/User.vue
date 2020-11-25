<template>
  <div id="users">
    <h2 class="my-3">
      <b class="text-primary">{{ user.user_nicename | capitalize }}</b> Aquí puedes gestionar todos los
      <b class="text-warning">usuarios</b>
    </h2>
    <UserComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import UserComponent from "@/components/UserComponent.vue";

export default {
  name: "Users",
  components: {
    UserComponent
  },
  created() {
    this.user = this.$store.state.wordpress.user;
  }
};
</script>

<style scoped>
</style>
