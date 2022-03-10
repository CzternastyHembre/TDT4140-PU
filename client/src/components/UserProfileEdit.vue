<template>
  <div class="profilePost">
    <div class="elementCC">
      <div class="elementContainer">
        <div>Profile image :</div>
        <input type="file" @change="onFileSelected" />
        <button @click="onUpload">Upload</button>
      </div>

      <div class="elementContainer">
        <div>Email :</div>
        <input type="text" v-model="newEmail" :placeholder="activeUser.email" />
      </div>

      <div class="elementContainer">
        <div>Username :</div>
        <input
          type="text"
          v-model="newUserName"
          :placeholder="activeUser.userName"
        />
      </div>

      <div class="elementContainer">
        <div>First name :</div>
        <input
          type="text"
          v-model="newFirstName"
          :placeholder="activeUser.firstName"
        />
      </div>

      <div class="elementContainer">
        <div>Last name :</div>
        <input
          type="text"
          v-model="newLastName"
          :placeholder="activeUser.lastName"
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
          :placeholder="activeUser.description"
        >
        </textarea>
      </div>
      <div class="elementContainer saveBtnC">
        <button @click="submitUser">Save</button>
      </div>
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
    activeUser: Object,
  },
  emits: ["userUpdated"],
  setup(props, { emit }) {
    const store = useStore();

    const newDescription = ref(props.activeUser.description + "");
    const newEmail = ref(props.activeUser.email + "");
    const newUserName = ref(props.activeUser.userName + "");
    const newFirstName = ref(props.activeUser.firstName + "");
    const newLastName = ref(props.activeUser.lastName + "");

    const submitUser = async (event) => {
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
        await store.dispatch("editUser", userInfo);
        store.dispatch("setToast", {
          isActive: true,
          text: `User ${newUserName.value} successfully edited`,
          bgColor: "lightgreen",
        });
        emit("userUpdated");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
        console.log(err);
      }
    };

    return {
      newEmail,
      newUserName,
      newFirstName,
      newLastName,
      newDescription,
      submitUser,
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
    },
    onUpload() {
      const image = new FormData();
      image.append("image", this.selectedFile, this.selectedFile.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.saveBtnC {
  button {
    margin: 10px;
  }
}
</style>
