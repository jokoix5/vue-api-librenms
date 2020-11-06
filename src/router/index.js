import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Users from "@/views/Users.vue";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      meta: { requiresAuth: false },
      component: Login
    },
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: Home
    },
    {
      path: "/detail/:hostname",
      name: "detail",
      meta: { requiresAuth: true },
      component: Detail
    },
    {
      path: "/users",
      name: "users",
      meta: { requiresAuth: true },
      component: Users
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = sessionStorage.currentUser;

  if (requiresAuth && currentUser == null) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
