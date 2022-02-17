import { createStore } from "vuex";
import SalesPost from "../core/SalesPost";

export default createStore({
  state: {
    posts: [
      new SalesPost("Stian", "Fest1", "superfest", Date.now() + 10e10, 20),
      new SalesPost("Sara", "Fest2", "superfest", Date.now() + 10e9, 30),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() + 10e8, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e7, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e6, 40),
    ],
  },
  getters: {
    getPostByIndex: (state) => (index) => {
      return state.posts[index];
    },
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
      state.posts.sort((a, b) => {
        if (a.dateAndTime < Date.now()) {
          return 1;
        }
        return a.dateAndTime - b.dateAndTime;
      });
      console.log(state.posts);
    },
  },
  actions: {},
  modules: {},
});
