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

    const logInUser = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        await store.dispatch("logInUser", {
          userName: inputUsername.value,
          password: hash(inputPassword.value),
        });
        store.dispatch("setToast", {
          isActive: true,
          text: `User ${inputUsername.value} logged in`,
          bgColor: "lightgreen",
        });
        router.push("/");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    };

    return { inputUsername, inputPassword, logInUser };
  },
};
</script>

<style>
.logInForm {
  margin: 10px auto;
  width: 300px;
  background-color: #c7dce7;
  padding: 2em;

  border: 1px solid rgb(0, 0, 0);
  border-radius: 1%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-radius: 10px;
}
</style>
