<template>
    <div class="navButtons">
      <div class="box" v-if="activeUser"><router-link to="/createpost">
      <h3>New Post</h3></router-link></div>
      <div class="box" v-if="activeUser"><router-link to="/UserProfile">
      <h3>Profile</h3></router-link></div>
      <div class="box" v-if="activeUser"><h3>Messages</h3></div>
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
    color: #cc3f3f;
}

.box {
  margin: 20px auto;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  background-color: #c7dce7;
  box-shadow: 0 4px 6px -1px rgba(39, 6, 129, 0.75),
    0 2px 4px -1px rgba(39, 6, 129, 0.75);
  color: #cc3f3f;
}

</style>