<template>
  <div class="navButtons leftNav" v-if="isMessagePage">
    <div class="box" v-if="activeUser">
      <router-link to="/createpost"> <h3>NEW POST</h3></router-link>
    </div>
    <div class="box" v-if="activeUser">
      <router-link to="/UserProfile"> <h3>PROFILE</h3></router-link>
    </div>
    <div class="box" v-if="activeUser">
      <router-link to="/Messages"><h3>MESSAGES</h3></router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LeftNav",
  setup() {
    const store = useStore();
    const router = useRouter();

    const isMessagePage = computed(() => {
      return router.currentRoute.value.path === "/";
    });

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const logOutUser = () => {
      store.commit("setActiveUser", null);
      router.push("/");
    };

    return { activeUser, logOutUser, isMessagePage };
  },
};
</script>

<style scoped></style>
