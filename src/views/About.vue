<template>
  <div class="about">
    <h1>This is an ABOUT page</h1>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

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
