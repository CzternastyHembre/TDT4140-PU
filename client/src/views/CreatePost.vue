<template>
  <div class="postForm">
    <form action="">
      <input type="text" placeholder="Name of event" v-model="eventName" />
      <br />
      <input type="text" placeholder="Type of event" v-model="eventType" />
      <br />
      <input type="datetime-local" v-model="eventDate" /> <br />
      <span>Create a sales post?</span>
      <input type="checkbox" name="isBuypost" id="" v-model="isSalesPost" />
      <br />
      <input
        type="number"
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
          "UserName", //TODO current user name
          eventName.value,
          eventType.value,
          eventDate.value,
          eventPrice.value
        );
      } else {
        newPost = new BuyPost(
          "UserName", //TODO current user name
          eventName.value,
          eventType.value,
          eventDate.value,
          eventPrice.value
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
form > * {
  margin-top: 1em;
}
form {
  padding: 2em;
  border: 1px solid #000;
  border-radius: 1%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
.postForm {
  margin: 10px 400px;
}

.hiddenInput {
  visibility: hidden;
}
.shownInput {
  visibility: block;
}
</style>
