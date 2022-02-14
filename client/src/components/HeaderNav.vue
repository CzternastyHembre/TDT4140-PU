<template>
  <div class="footerBox">
    <div></div>
    <div class="navButtons">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="login">Login</div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped>
.footerBox {
  margin: auto;
  width: 80%;
  padding: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
}

.footerBox div {
  padding-top: 23px;
}

.navButtons a {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
