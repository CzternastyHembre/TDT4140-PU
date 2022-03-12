<template>
  <div class="appWrapper">
    <header-nav />
    <div class="appContent">
      <left-nav />
      <right-nav />
      <router-view />
    </div>
    <div class="messagePage" v-if="isMessage">
      <old-chats />
      <chat-box />
    </div>
    <toast-comp />
  </div>
</template>

<script>
import HeaderNav from "../src/components/HeaderNav.vue";
import LeftNav from "./components/LeftNav.vue";
import RightNav from "./components/RightNav.vue";
import ToastComp from "./components/ToastComp.vue";
import ChatBox from "./components/ChatBox.vue";
import OldChats from "./components/OldChats.vue";

import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    HeaderNav,
    LeftNav,
    RightNav,
    ToastComp,
    ChatBox,
    OldChats,
  },

  setup() {
    const router = useRouter();

    const isMessage = computed(() => {
      return router.currentRoute.value.path === "/";
    });

    const isNotMessage = !computed(() => {
      return router.currentRoute.value.path === "/";
    });

    return { isMessage, isNotMessage };
  },
};
</script>

<style lang="scss">
:root {
  --bgc-primary: #c7dce7;
  --col-primary: #cc3f3f;
}
body {
  min-height: 100vh;
  background-color: white;
  color: var(--col-primary);
}

#app {
  font-family: "Helvetica";
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.appContent {
  margin: 200px auto 0 auto;
  .leftNav,
  .rightNav {
    position: fixed;
    margin: 0 2em;
  }
  .rightNav {
    right: 0;
  }
}

.navButtons {
  //Not for the navigation buttons
  padding-bottom: 20px;
  color: #5a4035;
}

.box {
  cursor: pointer;
  h3 {
    margin: 10px auto;
    padding: 20px;
    background-color: var(--bgc-primary);
    width: min(70%, 600px);
    color: #5a4035;
    text-align: center;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
  }
  :hover {
    outline: 1px solid black;
  }
}
.router-link-active,
.router-link-active h3 {
  text-decoration: underline !important;
}

.basicForm {
  margin: auto;
  width: 300px;
  background-color: rgb(255, 255, 255);
  padding: 1em 2em;
  text-align: left;
  font-size: 1em;
  background-color: var(--bgc-primary);

  border: 1px solid grey;
  border-radius: 2%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

.basicForm form > div {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
}

.basicForm input {
  font-size: 1em;
  display: inline-block;
  size: 1em;
  width: 80%;
}

.submitButton {
  padding: 10px 20px;
  width: 35%;
  font-size: 17px;
  border-radius: 20px;
  margin: auto;
  border: 1px solid #6a706e;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.submitButton:hover {
  box-shadow: 0 2px 6px black;
}

.messagePage {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
