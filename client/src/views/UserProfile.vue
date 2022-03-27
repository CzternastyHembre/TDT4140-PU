<template>
  <div class="profileWrapper">
    <UserProfileEdit
      v-if="isEditMode"
      :activeUser="activeUser"
      @user-updated="userUpdatedEvent"
    />
    <UserProfileView v-else :activeUser="activeUser" />
    <button class="submitButton" @click="isEditMode = !isEditMode">
      {{ isEditMode ? "Back" : "Edit profile" }}
    </button>
    <div class="userPosts" v-if="!isEditMode">
      <sales-post-comp
        v-for="(post, index) in userPosts"
        :key="index"
        :indexPost="index"
        :onUserProfile="true"
        :isSoldProp="post.isSold"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { ref } from "vue";
import UserProfileEdit from "../components/UserProfileEdit.vue";
import UserProfileView from "../components/UserProfileView.vue";
import SalesPostComp from "../components/SalesPostComp.vue";

export default {
  name: "UserProfile",
  components: {
    UserProfileEdit,
    UserProfileView,
    SalesPostComp,
  },

  setup() {
    const store = useStore();
    const isEditMode = ref(false);

    onBeforeMount(async () => {
      try {
        await store.dispatch("getPostsFromUser", activeUser.value._id);
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    });

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const userPosts = computed(() => {
      return store.state.userPosts;
    });

    const userUpdatedEvent = () => {
      isEditMode.value = false;
    };

    return {
      activeUser,
      isEditMode,
      userUpdatedEvent,
      userPosts,
    };
  },
};
</script>

<style lang="scss">
.profileWrapper {
  margin: 6px auto;
  width: min(100%, 600px);
  button {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

.profilePost {
  position: relative;
  background-color: var(--comp-primary);
  text-align: left;
  border: 1px var(--font-color) solid;
  border-radius: 20px;
  padding: 10px;
  .profileHeader {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
  }

  .profileDescriptionContainer {
    margin: auto;
    width: 70%;

    textarea.profileDescription {
      width: 95%;
    }
  }
}
.elementCC {
  .elementContainer {
    padding: 10px;
  }
  .elementContainer:nth-child(0) {
    background: var(--comp-primary);
  }
  .elementContainer > * {
    display: inline;
    margin-right: 10px;
  }
  .elementContainer :first-child {
    font-weight: bold;
  }
  .descriptionContainer {
    :last-child {
      display: block;
      padding: 5px;
    }
  }
}
</style>
