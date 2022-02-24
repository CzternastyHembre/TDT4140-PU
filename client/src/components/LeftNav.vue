<template>
    <div class="navButtons">
        <router-link to="/createpost" v-if="activeUser">New Post</router-link>
        <router-link to="/UserProfile" v-if="activeUser">Profile</router-link>
        <h3>Messages</h3>
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

.navButtons {
    display: grid;
    grid-template-rows: 50px 50px 50px;
    background-color: #eff9fe;
}

</style>