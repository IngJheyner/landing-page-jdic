import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          // This ensures that if hash is provided to router.push it works as expected.
          //  & since we have used "behavior: 'smooth'" the browser will slowly come to this hash position.
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
    }
});

export default router;