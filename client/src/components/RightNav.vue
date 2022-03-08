<template>
  <div class="navButtons rightNav" v-if="isHomePage">
    <h3>FILTER:</h3>
    <div class="box"><h3>EVENT</h3></div>
    <div class="box"><h3>AREA</h3></div>
    <h3>PRICE RANGE:</h3>
    <div class="box"><h3>MIN:</h3></div>
    <div class="box"><h3>MAX:</h3></div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  name: "RightNav",
  setup() {
    const router = useRouter();

    const isHomePage = computed(() => {
      return router.currentRoute.value.path === "/";
    });

    return { isHomePage };
  },
};
</script>
<style scoped></style>
