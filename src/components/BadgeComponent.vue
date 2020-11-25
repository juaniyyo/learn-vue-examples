<template>
  <div class="badge" :id="name">
    <div class="mt-3">
      <img :src="image" width="100" height="100" />
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    name: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 100%;
}
</style>
