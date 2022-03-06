<template>
  <div>
    <UserProfileEdit
      v-if="isEditMode"
      :activeUser="activeUser"
      @user-updated="userUpdatedEvent"
    />
    <UserProfileView
      v-else
      :activeUser="activeUser"
      :userUpdatedMsg="userUpdatedMsg"
    />
    <button @click="isEditMode = !isEditMode">
      {{ isEditMode ? "Back" : "Edit profile" }}
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";
import { ref } from "vue";
import UserProfileEdit from "../components/UserProfileEdit.vue";
import UserProfileView from "../components/UserProfileView.vue";

export default {
  name: "UserProfile",
  components: {
    UserProfileEdit,
    UserProfileView,
  },

  setup() {
    const store = useStore();
    const isEditMode = ref(false);
    const userUpdatedMsg = ref("");

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const userUpdatedEvent = () => {
      isEditMode.value = false;
      userUpdatedMsg.value = "Your user info was updated";
    };

    return {
      activeUser,
      isEditMode,
      userUpdatedMsg,
      userUpdatedEvent,
    };
  },
};
</script>

<style lang="scss">
.profilePost {
  margin: 6px auto;
  border: solid black 1px;
  width: min(100%, 600px);
  background-color: #c7dce7;
  border-radius: 3px;
  text-align: left;

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
  .elementContainer:nth-child(2n -1) {
    background: #acd3e6;
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
