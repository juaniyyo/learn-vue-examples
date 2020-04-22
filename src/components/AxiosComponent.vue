<template>
  <div class="axios">
    <div v-if="result">
      <p>ID: {{ result.id }}</p>
      <p>Nombre: {{ result.name }}</p>
      <p>Username: {{ result.username }}</p>
      <p>Email: {{ result.email }}</p>
      <p>
        Dirección: {{ result.address.street + ", " + result.address.suite }}
      </p>
      <p>Teléfono: {{ result.phone }}</p>
      <p>Empresa: {{ result.company.name }}</p>
    </div>
    <div v-else>
      <vcl-bullet-list :width="400" :rows="5"></vcl-bullet-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VclBulletList } from "vue-content-loading";

export default {
  data: () => ({
    result: null
  }),
  components: {
    VclBulletList
  },
  created() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/" +
          Math.round(Math.random() * 10)
      )
      .then(result => {
        setTimeout(() => {
          this.result = result.data;
        }, 1500);
      });
  }
};
</script>

<style lang="stylus" scoped></style>
