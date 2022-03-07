import { createStore } from "vuex";
import {
  getRequest,
  postRequest,
  putRequest,
} from "../apiUtils/apiRequests.js";

const API_URL = "http://localhost:5000/api";

export default createStore({
  state: {
    posts: [],
    toastProps: {
      isActive: false,
      text: "",
      bgColor: "",
      timeOutId: null,
    },
    activeUser: null,
  },
  getters: {
    getPostByIndex: (state) => (index) => {
      return state.posts[index];
    },
  },
  mutations: {
    setActiveUser(state, user) {
      state.activeUser = user;
      console.log(
        !state.activeUser
          ? `User was logged out`
          : `User ${user.userName} was logged in`
      );
    },
    updatePosts(state, payload) {
      console.log(payload);
      state.posts = payload;
    },
    setToast(state, { isActive, text, bgColor, timeOutId }) {
      state.toastProps = { isActive, text, bgColor, timeOutId };
    },
    clearToast(state) {
      clearTimeout(state.toastProps.timeOutId);
      state.toastProps = {
        isActive: false,
        text: "",
        bgColor: "",
        timeOutId: null,
      };
    },
  },
  actions: {
    async getPosts(context) {
      const posts = await getRequest(API_URL + "/posts").catch((err) => {
        throw new Error(err.message);
      });

      context.commit("updatePosts", posts);
    },
    async postPost(context, newPost) {
      console.log(newPost);
      await postRequest(API_URL + "/posts", { post: newPost }).catch((err) => {
        throw new Error(err.message);
      });
      context.dispatch("getPosts");
    },
    async logInUser(context, { userName, password }) {
      const loggedInUser = await postRequest(API_URL + "/users/login", {
        userName,
        password,
      }).catch((err) => {
        throw new Error(err.message);
      });

      context.commit("setActiveUser", loggedInUser);
    },
    async signUpUser(context, newUser) {
      const user = await postRequest(API_URL + "/users", {
        user: newUser,
      }).catch((err) => {
        throw new Error(err.message);
      });

      console.log(user);

      context.commit("setActiveUser", user.createdUser);
    },
    async editUser(context, editedUserFields) {
      const editedUser = await putRequest(
        API_URL + "/users/" + this.state.activeUser._id,
        { user: editedUserFields }
      ).catch((err) => {
        throw new Error(err.message);
      });

      context.commit("setActiveUser", editedUser.updatedUser);
    },
    setToast(context, { isActive, text, bgColor }) {
      context.commit("clearToast");
      let timeOutId = setTimeout(() => context.commit("clearToast"), 7000);
      context.commit("setToast", { isActive, text, bgColor, timeOutId });
    },
  },
  modules: {},
});
