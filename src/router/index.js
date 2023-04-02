import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/img2Art",
      name: "img2Art",
      component: () => import("../views/img2Art/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {

  const ch = from.query.ch;
  const subchannel = from.query.subchannel;
  if (ch) {
    sessionStorage.removeItem("ch");
    sessionStorage.setItem("ch", ch);
  }
  if (subchannel) {
    sessionStorage.removeItem("subchannel");
    sessionStorage.setItem("subchannel", subchannel);
  }


  if (
    to.path === "/login" ||
    to.path === "/register" ||
    to.path === "/payments"
  ) {
    sessionStorage.removeItem("redirect");
    sessionStorage.setItem("redirect", from.fullPath);
    next();
  }

  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("token")) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }

});

export default router;
