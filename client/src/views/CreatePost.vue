<template>
  <div>
    <h1>Create a post</h1>
    <div class="buySellContainer">
      <div @click="isSalesPost = true" :class="[isSalesPost ? 'active' : '']">
        Sell post
      </div>
      <div @click="isSalesPost = false" :class="[!isSalesPost ? 'active' : '']">
        Buy post
      </div>
    </div>
    <div class="postForm basicForm">
      <form action="">
        <div>
          <label for="nameEvent">Name of event:</label>
          <input type="text" name="nameEvent" v-model="eventName" />
        </div>

        <div>
          <label for="typeEvent">Type of event:</label>
          <input type="text" name="typeEvent" v-model="eventType" />
        </div>

        <div>
          <label for="dateEvent">Date of event:</label>
          <input type="datetime-local" name="dateEvent" v-model="eventDate" />
        </div>

        <div :class="[isSalesPost ? 'shownInput' : 'hiddenInput']">
          <label for="priceEvent">Price for ticket</label>
          <input
            type="number"
            name="priceEvent"
            placeholder="price"
            v-model="eventPrice"
          />
        </div>

        <div>
          <button class="submitButton" type="submit" @click="createPost">
            Post
          </button>
        </div>
      </form>
    </div>
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
    const isSalesPost = ref(true);

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
.postForm {
  position: relative;
}

.buySellContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  width: fit-content;
  margin: auto;

  top: 0.05em;
}

.buySellContainer > * {
  margin: 0 1em;
  height: fit-content;
  padding: 0.2em 2em;
  background-color: white;

  border: 1px solid grey;
  border-radius: 5px 5px 0 0;
  border-bottom: 0;

  cursor: pointer;
}
.active {
  z-index: 1;
}

.hiddenInput {
  display: none;
}
.shownInput {
  display: block;
}
</style>
