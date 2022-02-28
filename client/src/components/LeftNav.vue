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

<style scoped>
#navButtons {
  display: grid;
  grid-template-rows: 75px 75px 75px;
  padding-bottom: 20px;
  color: #5a4035;
}

.box {
  margin: auto;
  width: min(70%, 600px);
  text-align: center;
  background-color: #c7dce7;
  color: #5a4035;
}
</style>
