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
      console.log(`User ${user.userName} was logged in`);
    },
    updatePosts(state, payload) {
      console.log(payload);
      state.posts = payload;
    },
  },
  actions: {
    async getPosts(context) {
      const posts = await getRequest(API_URL + "/posts");

      if (!posts) {
        throw new Error("Could not get posts");
      }

      context.commit("updatePosts", posts);
    },
    async postPost(context, newPost) {
      const post = await postRequest(API_URL + "/posts", { post: newPost });
      if (!post) {
        throw new Error("Could not post the post");
      }
      context.dispatch("getPosts");
    },
    async logInUser(context, { userName, password }) {
      const loggedInUser = await postRequest(API_URL + "/users/login", {
        userName,
        password,
      });
      console.log(loggedInUser);
      if (!loggedInUser) {
        throw new Error("Could not log in user");
      }
      context.commit("setActiveUser", loggedInUser);
    },
    async signUpUser(context, newUser) {
      const user = await postRequest(API_URL + "/users", { user: newUser });
      if (!user) {
        throw new Error("Could not sign up user");
      }
      context.commit("setActiveUser", user);
    },
    async editUser(context, editedUserFields) {
      const editedUser = await putRequest(
        API_URL + "/users/" + this.state.activeUser._id,
        { user: editedUserFields }
      );
      console.log("edited user: ", editedUser);
      if (!editedUser) {
        throw new Error("Could not edit user");
      }
      context.commit("setActiveUser", editedUser.updatedUser);
    },
  },
  modules: {},
});
