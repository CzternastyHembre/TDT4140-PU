<template>
  <div>
    <h1>Sign in to your new account</h1>
    <div class="signUpForm basicForm">
      <form>
        <div>
          <label for="Username">Username:</label>
          <input
            v-model="inpUName"
            type="text"
            name="userName"
            id="UserName"
            required
          />
        </div>

        <div>
          <label for="FirstName">First name:</label>
          <input
            v-model="inpFName"
            type="text"
            name="First Name"
            id="FirstName"
            required
          />
        </div>

        <div>
          <label for="Surname"> Surname:</label>
          <input
            v-model="inpEName"
            type="text"
            name="Surname"
            id="Surname"
            required
          />
        </div>

        <div>
          <label for="email" name="email"> Email:</label>
          <input
            v-model="inpEmail"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div>
          <label for="Birthday">Birthday:</label>
          <input
            v-model="inpBirthdate"
            type="date"
            name="Birthday"
            id="Birthday"
            required
          />
        </div>

        <div>
          <label for="Password1">Password:</label>
          <input
            v-model="inpPasw1"
            type="password"
            name="Password1"
            id="Password1"
            required
          />
        </div>

        <div>
          <label for="Password2">Confirm password:</label><br />
          <input
            v-model="inpPasw2"
            type="password"
            name="Password2"
            id="Password2"
            required
          />
          <p style="color: red">{{ errorMsg }}</p>
        </div>
        <div>
          <button class="submitButton" @click="addUser" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import User from "../core/User";
export default {
  name: "SignUpComp",
  setup() {
    const store = useStore();
    const router = useRouter();

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

      if (inpPasw1.value != inpPasw2.value) {
        errorMsg.value = "The two passwords must match";
        return;
      }

      let user;
      try {
        user = new User(
          inpUName.value,
          inpPasw1.value,
          inpEmail.value,
          inpFName.value,
          inpEName.value,
          ""
        );
      } catch (err) {
        errorMsg.value = err;
      }

      if (user) {
        try {
          store.commit("addUser", user);
          errorMsg.value = "";
          router.push("/");
        } catch {
          errorMsg.value = "Something went wrong when signing up";
        }
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
