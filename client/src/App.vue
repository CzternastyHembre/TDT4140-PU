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

<style lang="scss">
body {
  min-height: 98vh;
  background: linear-gradient(
      to top,
      rgb(209, 244, 255),
      70%,
      rgb(255, 255, 255)
    ),
    30%;
}

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
  background: #f7f1e3;

  a {
    font-weight: bold;
    color: #2c3e50;

    router-link-exact-active {
      color: #42b983;
    }
  }
}

.appContent {
  padding-top: 70px;
}

.basicForm {
  margin: auto;
  width: 300px;
  background-color: rgb(255, 255, 255);
  padding: 1em 2em;
  text-align: left;
  font-size: 1em;

  border: 1px solid grey;
  border-radius: 2%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

.basicForm form > div {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
}

.basicForm input,
.submitButton {
  font-size: 1em;
  display: inline-block;
  size: 1em;
  width: 80%;
}
</style>
