<template>
  <div class="footerBox">
    <div class="navButtons">
      <router-link to="/">HOME</router-link>
      <br />
      <router-link to="/login" v-if="!activeUser">LOG IN</router-link>
      <router-link to="/signup" v-if="!activeUser">SIGN UP</router-link>
      <div class="logout">
        <button @click="logOutUser" v-if="activeUser">LOG OUT</button>
      </div>
    </div>
    <h1 class="header"><br />RETICKET</h1>
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
}

.footerbox {
  margin: auto;
  width: 100%;
  padding: auto;
  height: 100%;
}

.footerBox div {
  color: #cc3f3f;
}

.header {
  text-align: center;
  color: #cc3f3f;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}
</style>
