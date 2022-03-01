<template>
  <div class="footerBox">
    <div class="navButtons"></div>
    <div class="navButtons">
      <router-link to="/">HOME</router-link>
      <br />
      <div v-if="activeUser"/>
      <router-link to="/login" v-if="!activeUser">LOG IN</router-link>
      <router-link to="/signup" v-if="!activeUser">SIGN UP</router-link>
      <div class="logout">
        <button @click="logOutUser" v-if="activeUser"><div class="font">LOG OUT</div></button>
      </div>
    </div>
    <h1 class="header">RETICKET</h1>
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
.navButtons {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10% 70% 10% 10%;
  font-weight: bold;
  font-style: italic;
}

.footerbox {
  margin: auto;
  width: 100%;
  padding: auto;
  height: 100%;
  border-width: 2px;
  border-color: black;
}

.footerBox div {
  color: #cc3f3f;
}

.header {
  text-align: center;
  font-weight: bold;
  color: #cc3f3f;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

.font {
  font-weight: bold;
  font-style: italic;
}

</style>
