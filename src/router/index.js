import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Singup from "../components/singup.vue";
import Singin from "../components/singin.vue";
import Singout from "../components/singout.vue";
import Mypage from "../components/mypage.vue";

import firebase from "../firebase.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/singin",
    name: "singin",
    component: Singin
  },
  {
    path: "/singup",
    name: "singup",
    component: Singup
  },
  {
    path: "/singout",
    name: "singout",
    component: Singout
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
    meta: { requireAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requireAuth = to.matched.some(recode => recode.meta.requireAuth);
  if (requireAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/singin", query: { redirect: to.fullPath } });
  } else {
    next();
  }
})

export default router
