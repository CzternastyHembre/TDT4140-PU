<template>
  <div>
    <h1>Log in to your account</h1>
    <div class="loginForm basicForm">
      <form>
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            v-model="inputUsername"
            required
          />
        </div>

        <div>
          <label for="Password">Password:</label>
          <input
            type="password"
            name="Password"
            id="Password"
            v-model="inputPassword"
            required
          />
        </div>

        <div>
          <button class="submitButton" @click="logInUser" type="submit">
            Log in
          </button>
        </div>
      </form>
      <p style="color: red">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import hash from "../core/Hashing.js";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "LogInComp",
  setup() {
    const store = useStore();
    const router = useRouter();

    const inputUsername = ref("");
    const inputPassword = ref("");
    const errorMsg = ref("");

    const logInUser = (event) => {
      if (event) {
        event.preventDefault();
      }
      let user = store.state.users.find((user) => {
        return (
          user.userName == inputUsername.value &&
          user.password == hash(inputPassword.value)
        );
      });
      if (user) {
        store.commit("setActiveUser", user.userName);
        router.push("/");
        errorMsg.value = "";
      } else {
        errorMsg.value = "Could not find user";
      }
    };

    return { inputUsername, inputPassword, errorMsg, logInUser };
  },
};
</script>

<style></style>
