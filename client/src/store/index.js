import { createStore } from "vuex";
import {
  getRequest,
  postRequest,
  putRequest,
} from "../apiUtils/apiRequests.js";

const API_URL = "http://localhost:5085/api";

export default createStore({
  state: {
    posts: [],
    userPosts: [],
    userConversations: [],
    activeConversation: [],
    toastProps: {
      isActive: false,
      text: "",
      bgColor: "",
      timeOutId: null,
    },
    activeUser: null,
    viewProfileUser: null,
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
    setActiveConversation(state, conversation) {
      state.activeConversation = conversation;
    },
    setViewProfileUser(state, user) {
      state.viewProfileUser = user;
    },
    updatePosts(state, payload) {
      state.posts = payload;
    },
    updateUserPosts(state, payload) {
      state.userPosts = payload;
    },
    changeUserPost(state, newPost) {
      const index = state.userPosts.findIndex(
        (oldPost) => oldPost._id === newPost._id
      );
      state.userPosts.splice(index, 1, newPost);
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
    updateUserConversations(state, payload) {
      state.userConversations = payload;
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
    async getUser(context, userId) {
      const user = await getRequest(API_URL + "/users/" + userId).catch(
        (err) => {
          throw new Error(err.message);
        }
      );
      return user;
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
    async getPostsFromUser(context, userId) {
      const posts = await getRequest(
        API_URL + "/posts/userPosts/" + userId
      ).catch((err) => {
        throw new Error(err.message);
      });

      context.commit("updateUserPosts", posts);
    },
    async markPostAsSold(context, { postId, isSold }) {
      const res = await putRequest(API_URL + "/posts/sold/" + postId, {
        isSold,
      }).catch((err) => {
        throw new Error(err.message);
      });

      context.commit("changeUserPost", res.updatedPost);
    },
    async getViewProfileUser(context, userId) {
      const user = await getRequest(API_URL + "/users/" + userId).catch(
        (err) => {
          throw new Error(err.message);
        }
      );
      console.log(user);
      context.commit("setViewProfileUser", user);
    },
    setToast(context, { isActive, text, bgColor }) {
      context.commit("clearToast");
      let timeOutId = setTimeout(() => context.commit("clearToast"), 7000);
      context.commit("setToast", { isActive, text, bgColor, timeOutId });
    },
    //Conversations
    async getConversationsFromUser(context, userId) {
      const userConversations = await getRequest(
        API_URL + "/conversations/users/all/" + userId
      ).catch((err) => {
        throw new Error(err.message);
      });
      context.commit("updateUserConversations", userConversations);
    },
    async setActiveConversation(context, conv_id) {
      const conversation = await getRequest(
        API_URL + "/conversations/" + conv_id
      );
      context.commit("setActiveConversation", conversation);
    },

    async editConversation(context, newMessage) {
      const response = await putRequest(
        API_URL +
          "/conversations/" +
          this.state.activeConversation._id +
          "/messages",
        {
          content: newMessage,
          senderId: this.state.activeUser._id,
          messageDate: new Date(),
        }
      ).catch((err) => {
        throw new Error(err.message);
      });
      context.dispatch("setActiveConversation", response.conversation._id);
    },
    async startNewConversation(context, { p1, p2 }) {
      await postRequest(API_URL + "/conversations", {
        p1,
        p2,
        messages: [],
      }).catch((err) => {
        throw new Error(err.message);
      });

      context.dispatch(
        "getConversationsFromUser",
        context.state.activeUser._id
      );
    },
  },
  modules: {},
});
