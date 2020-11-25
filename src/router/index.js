import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import Axios from "../views/Axios.vue";
import Gym from "../views/Gym.vue";
import State from "../views/State.vue";
import Wordpress from "../views/Wordpress.vue";
import Post from "../views/Post.vue";
import User from "../views/User.vue";
import Profile from "../views/Profile.vue";
import Locations from "../views/Locations.vue";

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
        component: Axios
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
    component: Gym
  },
  {
    path: "/state",
    name: "State",
    component: State
  },
  {
    path: "/wordpress",
    name: "Wordpress",
    children: [
      {
        path: "posts",
        name: "posts",
        component: Post
      },
      {
        path: "users",
        name: "users",
        component: User
      },
      {
        path: "users/:id",
        name: "perfil",
        component: Profile
      },
      {
        path: "location",
        name: "location",
        component: Locations
      }
    ],
    component: Wordpress
  }
];

const router = new VueRouter({
  routes
});

export default router;
