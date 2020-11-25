import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import KeenUI from "keen-ui";
import "keen-ui/dist/keen-ui.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./filters.js";

Vue.config.productionTip = false;
Vue.use(KeenUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

store.dispatch("wordpress/isAuthenticate");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
