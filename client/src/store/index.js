import { createStore } from "vuex";
import SalesPost from "../core/SalesPost";
import User from "../core/User";

export default createStore({
  state: {
    posts: [
      new SalesPost("Stian", "Fest1", "superfest", Date.now() + 10e10, 20),
      new SalesPost("Sara", "Fest2", "superfest", Date.now() + 10e9, 30),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() + 10e8, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e7, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e6, 40),
    ],
    users: [
      new User("stianjsu", "Stian123", "Stian", "Sulebak", "Kul person"),
      new User("mattish", "Mattis123", "Mattis", "Hembre", "Minst kul person"),
      new User("vetlestor", "Vetle123", "Vetle", "Storvik", "Passe kul person"),
      new User("jshjelse", "Jakob123", "Jakob", "Hjelseth", "Kulere person"),
      new User("hansgun", "Hans123", "Hans", "Gunleik", "Ok kul person"),
      new User("ylvarf", "Ylva123", "Ylva", "Fossan", "Kulest person"),
      new User("saraost", "Sara123", "Sara", "Østdahl", "Designer person"),
    ],
    activeUser: null,
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
    },
    setActiveUser(state, userName) {
      state.activeUser = userName;
      console.log(`User ${userName} was logged in`);
    },
  },
  actions: {},
  modules: {},
});
