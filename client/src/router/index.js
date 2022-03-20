import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import CreatePost from "../views/CreatePost.vue";
import UserProfile from "../views/UserProfile.vue";
import Messages from "../views/Messages.vue";
import OtherProfileView from "../views/OtherProfileView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireLogIn: false,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    meta: {
      requireLogIn: false,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: {
      requireLogIn: false,
    },
  },
  {
    path: "/createpost",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      requireLogIn: true,
    },
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    component: UserProfile,
    meta: {
      requireLogIn: true,
    },
  },
  {
    path: "/Messages",
    name: "Messages",
    component: Messages,
    meta: {
      requireLogIn: true,
    },
  },
  {
    path: "/OtherProfileView",
    name: "OtherProfileView",
    component: OtherProfileView,
    meta: {
      requireLogIn: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((res) => res.meta.requireLogIn)) {
    if (!store.state.activeUser) {
      next({ name: "LogIn" });
      return;
    }
  }
  next();
});

export default router;
