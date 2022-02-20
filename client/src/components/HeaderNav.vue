<template>
  <div class="footerBox">
    <div></div>
    <div class="navButtons">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/createpost" v-if="activeUser">Create Post</router-link>
      <router-link to="/login" v-if="!activeUser">Log In</router-link>
      <router-link to="/signup" v-if="!activeUser">Sign Up</router-link>
      <router-link to="/UserProfile" v-if="activeUser"
        >User Profile</router-link
      >
    </div>
    <div class="logout">
      <button @click="logOutUser" v-if="activeUser">Log Out</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HeaderNav",
  setup() {
    const store = useStore();
    const router = useRouter();

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const logOutUser = () => {
      store.commit("setActiveUser", null);
      router.push("/");
    };

    return { activeUser, logOutUser };
  },
};
</script>

<style scoped>
.footerBox {
  margin: auto;
  width: 100%;
  padding: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: inherit;
}

.footerBox div {
  padding-top: 23px;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
