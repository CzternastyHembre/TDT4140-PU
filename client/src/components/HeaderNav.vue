<template>
  <div class="footerBox">
    <div class="navButtons">
      <router-link to="/">HOME</router-link>
      <br />
      <router-link to="/login" v-if="!activeUser">LOG IN</router-link>
      <router-link to="/signup" v-if="!activeUser">SIGN UP</router-link>
      <img :src="ReTicket1" />
      <div class="logout">
        <button @click="logOutUser" v-if="activeUser">LOG OUT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import ReTicket1 from "@/assets/ReTicket1.png";

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

  data: function () {
    return {
      ReTicket1,
    };
  },
};
</script>

<style scoped>
.navButtons {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10% 70% 10% 10%;
  font-weight: bold;
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
  font-weight: bold;
  color: #cc3f3f;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  padding-top: 10px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
