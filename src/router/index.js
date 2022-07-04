import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Sign from "../sign/sign.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/account/signin",
    component: Sign,
    children: [
      {
        path: "/account/signin",
        name: "Signin",
        component: () =>
          import(/* webpackChunkName: "signup" */ "../sign/signin.vue"),
      },
      {
        path: "/account/signup",
        name: "signup",
        component: () =>
          import(/* webpackChunkName: "signup" */ "../sign/signup.vue"),
      },
      {
        path: "/account/password-reset",
        name: "password",
        component: () =>
          import(/* webpackChunkName: "signup" */ "../sign/password.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
