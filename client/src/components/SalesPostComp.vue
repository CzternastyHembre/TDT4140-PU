<template>
  <div class="post" :class="{ expiredEvent: Date.now() > post.dateAndTime }">
    <p><b>EVENT NAME:</b> {{ post.eventName }}</p>
    <p><b>EVENT TYPE:</b> {{ post.eventType }}</p>
    <p><b>DATE:</b> {{ dateString(post.eventDate) }}</p>
    <p v-if="post.price"><b>PRICE:</b> {{ post.price }}kr</p>
    <p><b>USERNAME:</b> {{ post.userName }}</p>
    <span v-if="onUserProfile">
      <span v-if="!isSoldProp">
        <p>
          <b>Mark as sold: </b>
          <input @click="markAsSold" type="button" value="Sold" />
        </p>
      </span>
      <span v-else>
        <p>
          <b>Open post: </b>
          <input @click="markAsNotSold" type="button" value="Open post" />
        </p>
      </span>
    </span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "SalesPostComp",
  props: ["indexPost", "isSoldProp", "onUserProfile"],
  setup(props) {
    const store = useStore();

    const dateString = (eventDate) => {
      let dateObj = new Date(eventDate);
      let time = new Date(
        dateObj.getTime() - dateObj.getTimezoneOffset() * 60 * 1000 // Fixes timezone offset
      ).toUTCString();
      let formattedTime = time.split(":").splice(0, 2).join(":"); // Removes gmt postfix
      return formattedTime;
    };

    const post = computed(() => {
      return store.state.posts[props.indexPost];
    });

    const markAsSold = async () => {
      try {
        await store.dispatch("markPostAsSold", {
          postId: post.value._id,
          isSold: true,
        });
        store.dispatch("setToast", {
          isActive: true,
          text: "Post marked as sold",
          bgColor: "lightgreen",
        });
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    };
    const markAsNotSold = async () => {
      try {
        await store.dispatch("markPostAsSold", {
          postId: post.value._id,
          isSold: false,
        });
        store.dispatch("setToast", {
          isActive: true,
          text: "Post marked as not sold",
          bgColor: "lightgreen",
        });
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    };

    return { post, dateString, markAsSold, markAsNotSold };
  },
};
</script>

<style scoped>
.post {
  font-style: bold;
  margin: 0 auto 2em 0;
  padding: 30px;
  text-align: left;
  border-radius: 5px;
  background-color: rgb(239, 221, 187, 0.35);
  /* box-shadow: 0 4px 6px -1px rgba(39, 6, 129, 0.75),
    0 2px 4px -1px rgba(39, 6, 129, 0.75); */
}

.expiredEvent {
  opacity: 0.6;
}
</style>
