<template>
  <div>
    <h1>Create a post</h1>
    <div class="buySellContainer">
      <div @click="isSalesPost = true" :id="[isSalesPost ? 'active' : '']">
        Sell post
      </div>
      <div @click="isSalesPost = false" :id="[!isSalesPost ? 'active' : '']">
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
          <input
            id="inpDate"
            type="datetime-local"
            name="dateEvent"
            v-model="eventDate"
          />
        </div>

        <div :id="[isSalesPost ? 'shownInput' : 'hiddenInput']">
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Post from "../core/postClass";
export default {
  name: "CreatePost",
  setup() {
    const isSalesPost = ref(true);

    const eventName = ref("");
    const eventType = ref("");
    const eventDate = ref("");
    const eventPrice = ref(0);

    const store = useStore();
    const router = useRouter();

    const createPost = async (event) => {
      if (event) {
        event.preventDefault();
      }
      let newPost;
      try {
        newPost = new Post(
          store.state.activeUser._id,
          store.state.activeUser.userName,
          eventName.value,
          eventType.value,
          eventDate.value,
          isSalesPost.value,
          eventPrice.value
        );
        await store.dispatch("postPost", newPost);
        store.dispatch("setToast", {
          isActive: true,
          text: `Post was created`,
          bgColor: "lightgreen",
        });
        router.push("/");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
        return;
      }
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

  top: 5px;
}

.buySellContainer > * {
  margin: 0 1em;
  height: fit-content;
  padding: 0.2em 2em;
  background: rgb(239, 221, 187, 0.35);

  border: 1px #5a4035;
  border-radius: 5px 5px 0 0;
  border-bottom: 0;

  cursor: pointer;
  box-shadow: inset #000 0 -2px 1px -1px;
}
#active {
  z-index: 1;
  box-shadow: none;
}

#hiddenInput {
  display: none;
}
#shownInput {
  display: block;
}
</style>
