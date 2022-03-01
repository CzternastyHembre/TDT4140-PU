<template>
  <div class="navButtons">
    <div class="box" v-if="activeUser">
      <router-link to="/createpost"> <h3>NEW POST</h3></router-link>
    </div>
    <div class="box" v-if="activeUser">
      <router-link to="/UserProfile"> <h3>PROFILE</h3></router-link>
    </div>
    <div class="box" v-if="activeUser"><h3>MESSAGES</h3></div>
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

.navButtons { font-style: italic; }

<style scoped></style>
