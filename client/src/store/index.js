import { createStore } from "vuex";
import SalesPost from "../core/SalesPost";

export default createStore({
  state: {
    posts: [
      new SalesPost("Stian", "Fest1", "superfest", Date.now(), 20),
      new SalesPost("Sara", "Fest2", "superfest", Date.now(), 30),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
    ],
  },
  getters: {
    getPostByIndex: (state) => (index) => {
      return state.posts[index];
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
