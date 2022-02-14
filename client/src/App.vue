<template>
  <div class="appWrapper">
    <div id="nav">
      <header-nav />
    </div>
    <div class="appContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderNav from "../src/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  height: 70px; /* define height for content */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: #fff;
}
.appContent {
  padding-top: 70px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
