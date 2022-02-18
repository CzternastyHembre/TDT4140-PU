<template>
  <div class="signUpForm">
    <h1>Sign up to your new account</h1>
    <form>
      <label for="Username">Username:</label><br />
      <input
        v-model="inpUName"
        type="text"
        name="userName"
        id="UserName"
        required
      /><br />
      <label for="FirstName">First name:</label><br />
      <input
        v-model="inpFName"
        type="text"
        name="First Name"
        id="FirstName"
        required
      /><br />
      <label for="Surname"> Surname:</label><br />
      <input
        v-model="inpEName"
        type="text"
        name="Surname"
        id="Surname"
        required
      /><br />
      <label for="email" name="email"> Email:</label><br />
      <input
        v-model="inpEmail"
        type="email"
        name="email"
        id="email"
        required
      /><br />
      <label for="Birthday">Birthday:</label><br />
      <input
        v-model="inpBirthdate"
        type="date"
        name="Birthday"
        id="Birthday"
        required
      /><br />
      <label for="Password1">Password:</label><br />
      <input
        v-model="inpPasw1"
        type="password"
        name="Password1"
        id="Password1"
        required
      /><br />
      <label for="Password2">Confirm password:</label><br />
      <input
        v-model="inpPasw2"
        type="password"
        name="Password2"
        id="Password2"
        required
      />
      <br /><br />
      <input @click="addUser" type="submit" value="Register" />
      <p style="color: red">{{ errorMsg }}</p>
      <p></p>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import User from "../core/User";
export default {
  name: "SignUpComp",
  setup() {
    const store = useStore();

    const inpUName = ref("");
    const inpFName = ref("");
    const inpEName = ref("");
    const inpEmail = ref("");
    const inpBirthdate = ref("");
    const inpPasw1 = ref("");
    const inpPasw2 = ref("");
    const errorMsg = ref("");

    const addUser = (e) => {
      if (e) {
        e.preventDefault();
      }
      if (!inpFName.value) errorMsg.value = "Missing first name";
      else if (!inpUName.value) errorMsg.value = "Missing username";
      else if (!inpEName.value) errorMsg.value = "Missing surname";
      else if (!inpEmail.value) errorMsg.value = "Missing email";
      else if (!inpBirthdate.value) errorMsg.value = "Missing birthdate";
      else if (!inpPasw1.value) errorMsg.value = "Missing password";
      else if (!inpPasw2.value) errorMsg.value = "Must confirm password";
      else if (inpPasw1.value != inpPasw2.value)
        errorMsg.value = "Passwords must match";
      else {
        let user = new User(
          inpUName.value,
          inpPasw1.value,
          inpFName.value,
          inpEName.value,
          ""
        );
        store.commit("addUser", user);
        errorMsg.value = "";
      }
    };

    return {
      inpUName,
      inpFName,
      inpEName,
      inpEmail,
      inpBirthdate,
      inpPasw1,
      inpPasw2,
      addUser,
      errorMsg,
    };
  },
};
</script>

<style lang="scss">
.signUpForm {
  margin: 10px auto;
  width: 300px;
  background-color: rgb(255, 255, 255);
  padding: 2em;

  border: 1px solid rgb(0, 0, 0);
  border-radius: 1%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-radius: 10px;
}
</style>
