import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Feed from "../views/Feed.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/feed",
    component: Feed,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
