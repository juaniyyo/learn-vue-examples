import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import AxiosComponent from "../views/AxiosComponent.vue";
import GymComponent from "../views/GymComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/",
    name: "About",
    children: [
      {
        path: "axios",
        name: "Axios",
        component: AxiosComponent
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/todo",
    name: "Tareas",
    component: TodoList
  },
  {
    path: "/gym",
    name: "Gym",
    component: GymComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;
