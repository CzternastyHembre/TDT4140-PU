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
      new SalesPost("Stian", "Fest1", "superfest", Date.now() + 10e10, 20),
      new SalesPost("Sara", "Fest2", "superfest", Date.now() + 10e9, 30),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() + 10e8, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e7, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e6, 40),
      new SalesPost("Stian", "Fest1", "superfest", Date.now() + 10e10, 20),
      new SalesPost("Sara", "Fest2", "superfest", Date.now() + 10e9, 30),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() + 10e8, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e7, 40),
      new SalesPost("Ylva", "Fest3", "superfest", Date.now() - 10e6, 40),
    ],
    users: [
      new User(
        "stianjsu",
        "Stian123",
        "stianjsu@stud.ntnu.no",
        "Stian",
        "Sulebak",
        "Kul person"
      ),
      new User(
        "mattish",
        "Mattis123",
        "mattisczthem@gmail.com",
        "Mattis",
        "Hembre",
        "mest kul person"
      ),
      new User(
        "vetlestor",
        "Vetle123",
        "vetlestor@stud.ntnu.no",
        "Vetle",
        "Storvik",
        "Passe kul person"
      ),
      new User(
        "jshjelse",
        "Jakob123",
        "jshjelse@stud.ntnu.no",
        "Jakob",
        "Hjelseth",
        "Kulere person"
      ),
      new User(
        "hansgun",
        "Hans123",
        "hansgun@stud.ntnu.no",
        "Hans",
        "Gunleik",
        "Ok kul person"
      ),
      new User(
        "ylvarf",
        "Ylva123",
        "ylvarf@stud.ntnu.no",
        "Ylva",
        "Fossan",
        "Kulest person"
      ),
      new User(
        "saraost",
        "Sara123",
        "saraost@stud.ntnu.no",
        "Sara",
        "Ostdahl",
        "Designer person"
      ),
    ],
    activeUser: null,
  },
  getters: {
    getPostByIndex: (state) => (index) => {
      return state.posts[index];
    },
    getActiveUser(state) {
      return state.users.find((user) => {
        return state.activeUser == user.userName;
      });
    },
  },
  mutations: {
    updateUser(state, userInfo) {
      const userToUpdate = state.users.find(
        (u) => u.email === userInfo.email
      ); /* TODO, find on ID when added */
      if (!userToUpdate) {
        throw "Could not find user to update";
      }
      const updateActiveUser = state.activeUser === userToUpdate.userName;
      userToUpdate.updateUser(userInfo);
      if (updateActiveUser) state.activeUser = userToUpdate.userName;
    },
    addPost(state, post) {
      state.posts.push(post);
      state.posts.sort((a, b) => {
        if (a.dateAndTime < Date.now()) {
          return 1;
        }
        return a.dateAndTime - b.dateAndTime;
      });
    },
    addUser(state, user) {
      if (state.users.find((u) => u.userName == user.userName)) {
        console.log("Username must be unique");
        return;
      }
      console.log(user);
      state.users.push(user);
      this.commit("setActiveUser", user.userName);
    },
    setActiveUser(state, userName) {
      state.activeUser = userName;
      console.log(`User ${userName} was logged in`);
    },
  },
  actions: {},
  modules: {},
});
