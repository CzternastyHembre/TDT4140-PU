<template>
  <div class="footerBox">
    <div class="navButtonsNav">
      <router-link to="/">HOME</router-link>
      <router-link to="/login" v-if="!activeUser">LOG IN</router-link>
      <router-link to="/signup" v-if="!activeUser">SIGN UP</router-link>

      <div class="logout" v-if="activeUser" @click="logOutUser">LOG OUT</div>
    </div>
    <img class="header" :src="ReTicket1" />
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

<style lang="scss" scoped>
.footerBox {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100%; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  background-color: #c7dce7;
  .navButtonsNav {
    background-color: inherit;
    margin: 16px 16px 0 16px;
    font-weight: bold;
    font-style: italic;
    color: #cc3f3f;

    > * {
      margin: 0 10px;
      cursor: pointer;
    }

    display: flex;
    :first-child {
      margin: 0 auto 0 0;
      order: 0;
    }
    :last-child {
      margin: 0 0 0 10px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .header {
    margin-bottom: 1em;
  }
}
</style>
