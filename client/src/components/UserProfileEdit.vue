<template>
  <div class="profilePost">
    <div class="elementCC">
      <div class="elementContainer">
        <div>Profile image :</div>
        <button>TODO</button>
      </div>

      <div class="elementContainer">
        <div>Email :</div>
        <input type="text" v-model="newEmail" :placeholder="currUser.email" />
      </div>

      <div class="elementContainer">
        <div>Username :</div>
        <input
          type="text"
          v-model="newUserName"
          :placeholder="currUser.userName"
        />
      </div>

      <div class="elementContainer">
        <div>First name :</div>
        <input
          type="text"
          v-model="newFirstName"
          :placeholder="currUser.firstName"
        />
      </div>

      <div class="elementContainer">
        <div>Last name :</div>
        <input
          type="text"
          v-model="newLastName"
          :placeholder="currUser.lastName"
        />
      </div>

      <div class="elementContainer descriptionContainer">
        <div>Description</div>
        <textarea
          class="profileDescription"
          type="textarea"
          rows="5"
          cols="40"
          maxlength="200"
          v-model="newDescription"
          :placeholder="currUser.description"
        >
        </textarea>
      </div>
      <div class="elementContainer saveBtnC">
        <button @click="submitUser">Save</button>
      </div>
    </div>

    <div class="errorDiv" :v-model="errorMsg">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
import User from "../core/User.js";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserProfileEdit",
  props: {
    currUser: User,
  },
  setup() {
    const store = useStore();

    const newDescription = ref("");
    const newEmail = ref("");
    const newUserName = ref("");
    const newFirstName = ref("");
    const newLastName = ref("");
    const errorMsg = ref("");

    const submitUser = (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        User.validEmail(newEmail.value);
        User.validUserName(newUserName.value);
        User.validName(newFirstName.value);
        User.validName(newLastName.value);
        let userInfo = {
          userName: newUserName.value,
          email: newEmail.value,
          firstName: newFirstName.value,
          lastName: newLastName.value,
          description: newDescription.value,
        };
        store.commit("updateUser", userInfo);

        errorMsg.value = "User succesfully updated";
      } catch (error) {
        errorMsg.value = error;
      }
    };

    return {
      newEmail,
      newUserName,
      newFirstName,
      newLastName,
      newDescription,
      submitUser,
      errorMsg,
    };
  },
};
</script>
<style lang="scss" scoped>
.errorDiv {
  color: red;
}
.saveBtnC {
  button {
    margin: 10px;
  }
}
</style>
