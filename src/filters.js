import Vue from "vue";

Vue.filter("strong", value => {
  return value.toUpperCase();
});
