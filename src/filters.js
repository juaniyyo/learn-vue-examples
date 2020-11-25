import Vue from "vue";

Vue.filter("ucase", value => {
  return value.toUpperCase();
});
Vue.filter("capitalize", value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("limpiar", value => {
  return value.replace(/<\/?[^>]+(>|$)/g, "");
});
Vue.filter("tiempo", value => {
  let date = new Date(Date.parse(value));
  return date.toLocaleString();
});
