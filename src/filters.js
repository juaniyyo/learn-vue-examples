import Vue from "vue";

Vue.filter("strong", value => {
  return "<strong>" + value + "</strong>";
});
