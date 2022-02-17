import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import SalesPostComp from "../../src/components/SalesPostComp";
import SalesPost from "../../src/core/SalesPost";

describe("SalesPostComp.vue", () => {
  let store;
  let state;
  let getters;

  beforeEach(() => {
    state = {
      posts: [
        new SalesPost("Stian", "Fest1", "superfest", Date.now(), 20),
        new SalesPost("Sara", "Fest2", "superfest", Date.now(), 30),
        new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
        new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
        new SalesPost("Ylva", "Fest3", "superfest", Date.now(), 40),
      ],
    };
    getters = {
      getPostByIndex: (state) => (index) => {
        return state.posts[index];
      },
    };
    store = new Vuex.Store({ state, getters });
  });

  it("renders posts when passed an index", () => {
    for (let i = 0; i < store.state.posts.length; i++) {
      let indexPost = i;
      const wrapper = shallowMount(SalesPostComp, {
        global: {
          plugins: [store],
        },
        props: { indexPost },
      });
      expect(wrapper.text()).toMatch(state.posts[indexPost].user);
    }
  });
});
