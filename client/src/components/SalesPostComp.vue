<template>
  <div class="post" :class="{ expiredEvent: Date.now() > post.dateAndTime }">
    <p v-if="post.price"><b>Wish to sell:</b></p>
    <p v-else><b>Wish to buy:</b></p>
    <div class="eventName">{{ post.eventName }}</div>
    <p class="eventType">{{ post.eventType }}</p>
    <p v-if="post.price">{{ post.price }}kr</p>
    <p>{{ dateString(post.eventDate) }}</p>
    <div>
      <p v-if="post.price">Name seller: {{ post.userName }}</p>
      <p v-else>Name buyer: {{ post.userName }}</p>
    </div>
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
    <div
      class="user-name-field"
      v-if="activeUser && !onUserProfile"
      @click="viewProfileUser"
      @mouseover="upHere = true"
      @mouseleave="upHere = false"
    >
      <button class="submitButton postButton">Show user's profile</button>
      <OtherProfile v-show="false" :viewProfileUser="{}" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import OtherProfile from "./OtherProfile.vue";

export default {
  name: "SalesPostComp",
  components: {
    OtherProfile,
  },
  props: ["postObject", "isSoldProp", "onUserProfile"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const upHere = ref(false);

    const dateString = (eventDate) => {
      let dateObj = new Date(eventDate);
      let time = new Date(
        dateObj.getTime() - dateObj.getTimezoneOffset() * 60 * 1000 // Fixes timezone offset
      ).toUTCString();
      let formattedTime = time.split(":").splice(0, 2).join(":"); // Removes gmt postfix
      return formattedTime;
    };

    const post = computed(() => {
      return props.postObject;
    });

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const markAsSold = async () => {
      try {
        await store.dispatch("markPostAsSold", {
          postId: props.postObject._id,
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
          postId: props.postObject._id,
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
    const viewProfileUser = async () => {
      if (activeUser.value && activeUser.value._id == props.postObject.userId) {
        router.push("/UserProfile");
        return;
      }
      await store.dispatch("getViewProfileUser", props.postObject.userId);
      router.push("/OtherProfileView");
    };

    return {
      upHere,
      post,
      dateString,
      markAsSold,
      markAsNotSold,
      viewProfileUser,
      activeUser,
    };
  },
};
</script>

<style scoped lang="scss">
.post {
  font-style: bold;
  margin: 0 auto 2em 0;
  padding: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: white;
  line-height: 13px;
  .user-name-field {
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
}

.expiredEvent {
  opacity: 0.6;
}

.eventName {
  font-weight: 900;
  font-size: 25px;
  text-transform: uppercase;
}

.eventType {
  font-weight: bold;
  color: rgb(236, 177, 153);
}

.postButton {
  padding: 5px;
  font-size: 15px;
}
</style>
