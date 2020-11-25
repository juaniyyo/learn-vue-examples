<template>
  <div class="ufp">
    <router-link
      :to="{ name: 'perfil', params: { id: autor.id }}"
      class="btn btn-outline-primary"
      :autorid="id"
    >{{ autor.name }}</router-link>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "UserFromPost",
  props: {
    id: Number
  },
  data: () => ({
    autor: ""
  }),
  async created() {
    try {
      const { data } = await api.getUser(this.$attrs.autorid);
      this.autor = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
