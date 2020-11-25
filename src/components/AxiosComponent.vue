<template>
  <div class="axios">
    <form class="form" @submit.prevent="getData(searchId)">
      <label class="label" for="task">Search user by ID</label><br />
      <input class="input" type="text" v-model="searchId" id="searchId" /> |
      <b-button variant="outline-primary" class="m-2" type="submit"
        >Search User</b-button
      >
      |
      <b-button @click.prevent="cleanScreen()">X</b-button>
    </form>
    <div v-if="loader">
      <vcl-bullet-list :width="300" :rows="5"></vcl-bullet-list>
    </div>
    <div v-if="result">
      <p>
        Has buscado el usuario con el ID: <b>{{ result.id }}</b>
      </p>
      <p>Nombre: {{ result.name }}</p>
      <p>Username: {{ result.username }}</p>
      <p>Email: {{ result.email }}</p>
      <p>
        Dirección: {{ result.address.street + ", " + result.address.suite }}
      </p>
      <p>Teléfono: {{ result.phone }}</p>
      <p>Empresa: {{ result.company.name }}</p>
    </div>
    <div class="preview-pane">
      <ui-snackbar-container
        ref="snackbarContainer"
        :position="position"
        :transition="transition"
        :queue-snackbars="queueSnackbars"
        @click="$emit('action-click')"
      ></ui-snackbar-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VclBulletList } from "vue-content-loading";
import { UiSnackbarContainer } from "keen-ui";

export default {
  data: () => ({
    searchId: "1",
    result: null,
    loader: null,
    position: "center",
    transition: "fade",
    action: "OK",
    queueSnackbars: false,
    duration: 5,
    actionColor: "primary"
  }),
  components: {
    VclBulletList,
    UiSnackbarContainer
  },
  methods: {
    getData() {
      this.loader = true;
      this.result = false;
      axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users/" + this.searchId,
        timeout: 3000
      })
        .then(result => {
          this.result = result.data;
          this.loader = null;
          this.searchId = "";
        })
        .catch(error => {
          console.log(error);
          this.loader = null;
          this.createSnackbar(error);
        });
    },
    createSnackbar(error) {
      this.$refs.snackbarContainer.createSnackbar({
        message: error.message,
        actionColor: this.actionColor,
        duration: this.duration * 1000,
        action: this.action,
        onActionClick: () => {
          this.dissmis();
        }
      });
    },
    dissmis() {
      document
        .getElementsByClassName("ui-snackbar-container--position-center")[0]
        .remove();
    },
    cleanScreen() {
      this.result = false;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="stylus" scoped>
.axios
  margin: 0 auto
  max-width 600px
</style>
