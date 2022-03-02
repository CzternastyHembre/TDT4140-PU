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

    <div class="errorDiv">
      <p :style="{ visibility: +!errorMsg ? 'hidden' : 'visible' }">
        {{ errorMsg || "no issue" }}
      </p>
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
  emits: ["userUpdated"],
  setup(props, { emit }) {
    const store = useStore();

    const newDescription = ref(props.currUser.description + "");
    const newEmail = ref(props.currUser.email + "");
    const newUserName = ref(props.currUser.userName + "");
    const newFirstName = ref(props.currUser.firstName + "");
    const newLastName = ref(props.currUser.lastName + "");
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
        errorMsg.value = "";
        emit("userUpdated");
      } catch (error) {
        errorMsg.value = error;
        setTimeout(() => (errorMsg.value = ""), 10000);
        console.log(error);
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
  text-align: center;
  color: red;
}
.saveBtnC {
  button {
    margin: 10px;
  }
}
</style>
