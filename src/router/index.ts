import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Confirm",
    name: "Confirm",
    component: () => import("../views/Confirm.vue"),
  },
  {
    path: "/Form",
    name: "Form",
    component: () => import("../views/Form.vue"),
  },
  {
    path: "/",
    name: "Top",
    component: () => import("../views/Top.vue"),
  },
];

const scrollBehavior = () => {
  return { el: "#app" };
};
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior, //追加
});

export default router;
