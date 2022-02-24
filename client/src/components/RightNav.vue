<template>
  <div class="footerBox">
    <div class="navButtons1">
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/login" v-if="!activeUser">Log In</router-link>
      <router-link to="/signup" v-if="!activeUser">Sign Up</router-link>
      <div class="logout">
        <button @click="logOutUser" v-if="activeUser">Log Out</button>
      </div>
    </div>
    <h1 class="header">BillettMester</h1>
    <div class="navButtons2">
      <br />
      <router-link to="/createpost" v-if="activeUser">Create Post</router-link>
      <router-link to="/UserProfile" v-if="activeUser"
        >User Profile</router-link
      >
      <br />
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
.navButtons1 {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 10fr 1fr 1fr 1fr;
}

.navButtons2 {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 5fr 1fr 1fr 5fr;
}

.footerbox {
  margin: auto;
  width: 100%;
  padding: auto;
  height: 100%;
}

.footerBox div {
}

.header {
  text-align: center;
  color: #CC3F3F;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}
</style>
