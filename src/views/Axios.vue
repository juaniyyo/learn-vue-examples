<template>
  <transition name="fade">
    <div class="axios">
      <img alt="Vue logo" src="../assets/logo.png" />
      <axios-component />
    </div>
  </transition>
</template>

<script>
import AxiosComponent from "@/components/AxiosComponent.vue";

export default {
  name: "axios",
  components: {
    AxiosComponent
  }
};
</script>

<style lang="stylus" scoped>
.fade-enter-active
  animation: bounce-in 0.5s

.fade-leave-active
  animation: bounce-in 0.5s reverse

@keyframes bounce-in
  0%
    transform: scale(0)

  50%
    transform: scale(1.5)

  100%
    transform: scale(1)
</style>
