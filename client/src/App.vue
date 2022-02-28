<template>
  <div class="appWrapper">
    <div id="nav">
      <header-nav />
    </div>
    <div class="appContent">
      <left-nav />
      <router-view />
      <right-nav />
    </div>
  </div>
</template>

<script>
import HeaderNav from "../src/components/HeaderNav.vue";
import LeftNav from "./components/LeftNav.vue";
import RightNav from "./components/RightNav.vue";

export default {
  components: {
    HeaderNav,
    LeftNav,
    RightNav,
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background: linear-gradient(
      to top,
      rgb(209, 244, 255),
      70%,
      rgb(255, 255, 255)
    ),
    30%;
}

#app {
  font-family: "Helvetica";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100%; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 150px; /* define height for content */
  /*box-shadow: 0 4px 6px -1px rgba(39, 6, 129, 0.75),
    0 2px 4px -1px rgba(39, 6, 129, 0.75); */
  background: #c7dce7;

  a {
    font-weight: Helvetica;
    color: #cc3f3f;
    text-decoration: none;
    color: inherit;

    router-link-exact-active {
      color: #c7dce7;
    }
  }

  b {
    color: #a54035;
  }
}

.appContent {
  padding-top: 200px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 3fr 1fr;
  color: #cc3f3f;
}

.navButtons {
  padding-bottom: 20px;
  color: #5a4035;
}

.box {
  margin: 10px auto;
  padding: 10px;
  background-color: #c7dce7;
  width: min(70%, 600px);
  color: #5a4035;
  text-align: center;
}
</style>
