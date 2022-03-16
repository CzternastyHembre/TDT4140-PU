<template>
  <div class="navButtons leftNav">
    <div class="box" v-if="activeUser">
      <i class="gg-add"></i>
      <router-link to="/createpost"> <h3>NEW POST</h3></router-link>
    </div>
    <div class="box" v-if="activeUser">
      <i class="gg-profile"></i>
      <router-link to="/UserProfile"> <h3>PROFILE</h3></router-link>
    </div>
    <i class="gg-mail"></i>
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
.gg-add {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(var(--ggs, 1));
  border-radius: 22px;
}
.gg-add::after,
.gg-add::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 2px;
  background: currentColor;
  border-radius: 5px;
  top: 8px;
  left: 4px;
}
.gg-add::after {
  width: 2px;
  height: 10px;
  top: 4px;
  left: 8px;
}

.gg-profile,
.gg-profile::after,
.gg-profile::before {
  display: block;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100px;
}
.gg-profile {
  overflow: hidden;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  position: relative;
}
.gg-profile::after,
.gg-profile::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 5px;
  width: 8px;
  height: 8px;
}
.gg-profile::after {
  border-radius: 200px;
  top: 11px;
  left: 0px;
  width: 18px;
  height: 18px;
}

.gg-mail,
.gg-mail::after {
  display: block;
  box-sizing: border-box;
  height: 14px;
  border: 2px solid;
}
.gg-mail {
  overflow: hidden;
  transform: scale(var(--ggs, 1));
  position: relative;
  width: 18px;
  border-radius: 2px;
}
.gg-mail::after {
  content: "";
  position: absolute;
  border-radius: 3px;
  width: 14px;
  transform: rotate(-45deg);
  bottom: 3px;
  left: 0;
}
</style>
