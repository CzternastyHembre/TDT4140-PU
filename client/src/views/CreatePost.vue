<template>
  <div class="postForm">
    <form action="">
      <input
        type="text"
        name="nameEvent"
        placeholder="Name of event"
        v-model="eventName"
      />
      <br />
      <input
        type="text"
        name="typeEvent"
        placeholder="Type of event"
        v-model="eventType"
      />
      <br />
      <input type="datetime-local" name="dateEvent" v-model="eventDate" />
      <br />
      <span>Create a sales post?</span>
      <input
        type="checkbox"
        name="buypostCheckbox"
        id=""
        v-model="isSalesPost"
      />
      <br />
      <input
        type="number"
        name="priceEvent"
        placeholder="price"
        :class="[isSalesPost ? 'shownInput' : 'hiddenInput']"
        v-model="eventPrice"
      />
      <br />
      <button type="submit" @click="createPost">Post</button>
    </form>
  </div>
</template>

<script>
// v-bind:class="[isSalesPost ? 'hiddenInput' : 'shownInput']"
import { ref } from "vue";
import { useStore } from "vuex";
import SalesPost from "../core/SalesPost";
import BuyPost from "../core/BuyPost";
export default {
  name: "CreatePost",
  setup() {
    const isSalesPost = ref(false);

    const eventName = ref("");
    const eventType = ref("");
    const eventDate = ref("");
    const eventPrice = ref(0);

    const store = useStore();

    const createPost = (event) => {
      if (event) {
        event.preventDefault();
      }
      let newPost;
      if (isSalesPost.value) {
        newPost = new SalesPost(
          store.state.activeUser,
          eventName.value,
          eventType.value,
          new Date(eventDate.value).getTime(),
          eventPrice.value
        );
      } else {
        newPost = new BuyPost(
          store.state.activeUser,
          eventName.value,
          eventType.value,
          new Date(eventDate.value).getTime()
        );
      }
      store.commit("addPost", newPost);
      eventName.value = "";
      eventType.value = "";
      eventDate.value = "";
      eventPrice.value = 0;
    };

    return {
      isSalesPost,
      createPost,
      eventName,
      eventType,
      eventDate,
      eventPrice,
    };
  },
};
</script>

<style>
.hiddenInput {
  visibility: hidden;
}
.shownInput {
  visibility: block;
}
</style>
