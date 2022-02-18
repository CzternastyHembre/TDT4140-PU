<template>
  <div>
    <h1>Log in</h1>
    <form>
      <label for="username">Username:</label><br />
      <input
        type="text"
        name="userName"
        id="userName"
        v-model="inputUsername"
        required
      /><br />
      <label for="Password">Password:</label><br />
      <input
        type="password"
        name="Password"
        id="Password"
        v-model="inputPassword"
        required
      /><br />
      <br /><br />
      <input @click="logInUser" type="submit" value="LogIn" />
    </form>
    <p style="color: red">{{ errorMsg }}</p>

    <br />
    <br />
  </div>
</template>

<script>
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
          user.password == inputPassword.value
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
