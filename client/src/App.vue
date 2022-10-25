<template>
  <div class="appWrapper">
    <header-nav />
    <div class="appContent">
      <left-nav />
      <!-- <right-nav /> -->
      <router-view />
    </div>
    <toast-comp />
  </div>
</template>

<script>
import HeaderNav from "../src/components/HeaderNav.vue";
import LeftNav from "./components/LeftNav.vue";
/* import RightNav from "./components/RightNav.vue"; */
import ToastComp from "./components/ToastComp.vue";

import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    HeaderNav,
    LeftNav,
    /* RightNav, */
    ToastComp,
  },

  setup() {
    const router = useRouter();

    const isMessage = computed(() => {
      return router.currentRoute.value.path === "/Messages";
    });

    return { isMessage };
  },
};
</script>

<style lang="scss">
:root {
  --bgc-primary: rgb(249 243 232);
  --bgc-secondary: rgb(205, 169, 148);
  --button-primary: rgb(239, 221, 187);
  --nav-button: #efddbb;
  --comp-primary: white;
  --col-primary: #5a4035;
  --font-color: #5a4035;
}
body {
  min-height: 70vh;
  background-color: var(--bgc-primary);
  color: var(--font-color);
}

#app {
  font-family: "Helvetica";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

::-webkit-scrollbar {
  width: 12px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: rgb(185, 185, 185);
}

.appContent {
  margin: 160px auto 0 auto;
  .leftNav {
    position: fixed;
    margin: 0 2em;
  }
}

.navButtons {
  //Not for the navigation buttons
  padding-bottom: 20px;
  // color: #5a4035;
}

.box {
  cursor: pointer;
  h3 {
    margin: 10px auto;
    padding: 20px;
    background-color: var(--nav-button);
    width: min(80%, 600px);
    color: var(--font-color);
    text-align: center;
    border-radius: 40px;
    display: grid;
    grid-template-columns: 20% 80%;
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
  background-color: var(--comp-primary);
  padding: 1em 2em;
  text-align: left;
  font-size: 1em;

  border: 0px solid grey;
  border-radius: 40px;
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
  width: 150px;
  font-size: 17px;
  border-radius: 40px;
  margin: auto;
  background-color: var(--button-primary);
  border: 0px solid rgb(90, 64, 53);
  box-shadow: 0 2px 2px 0 rgba(90, 64, 53, 0.568),
    0 3px 1px -2px rgba(90, 64, 53, 0.315), 0 1px 5px 0 rgba(90, 64, 53, 0.37);
}

.submitButton:hover {
  box-shadow: 0 2px 6px black;
  cursor: pointer;
}

.messagePage {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
