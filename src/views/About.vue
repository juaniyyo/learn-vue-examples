<template>
  <div class="about">
    <div id="about" v-if="this.$route.path == '/about'">
      <h1 class="mt-3">This is an ABOUT with LOGIN page</h1>
      <p>This login page save user data in localStorage a load this data on every page</p>
      <Login />
    </div>
    <div id="axios" v-if="this.$route.path == '/about/axios'">
      <h1>
        This is an ABOUT/AXIOS page
      </h1>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Login from "@/components/LoginComponent.vue";

export default {
  components: {
    Login
  }
};
</script>
<style scoped>
.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
