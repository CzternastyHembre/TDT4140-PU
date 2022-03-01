<template>
  <div class="navButtons">
    <h3>FILTER:</h3>
    <div class="box"><h3>EVENT</h3></div>
    <div class="box"><h3>AREA</h3></div>
    <h3>PRICE RANGE:</h3>
    <div class="box"><h3>MIN:</h3></div>
    <div class="box"><h3>MAX:</h3></div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "RightNav",
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

.navButtons { font-style: italic; }

</style>
