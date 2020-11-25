<template>
  <div id="wordpress">
    <div class="container mt-3">
      <h1>Actuando con WP API</h1>
      <div class="d-flex align-items-center justify-content-around">
        <router-link to="/wordpress/posts" class="btn btn-warning w-100 mx-3 text-white">Posts</router-link>
        <router-link to="/wordpress/users" class="btn btn-success w-100 mx-3 text-white">Usuarios</router-link>
        <router-link
          to="/wordpress/location"
          class="btn btn-primary w-100 mx-3 text-white"
        >Localización Usuarios</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
