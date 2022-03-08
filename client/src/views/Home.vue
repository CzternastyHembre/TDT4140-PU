<template>
  <div class="home">
    <div class="grid">
      <sales-post-comp
        v-for="(post, index) in posts"
        :key="index"
        :indexPost="index"
      />
    </div>
  </div>
</template>

<script>
import SalesPostComp from "../components/SalesPostComp.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
  name: "Home",
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      try {
        await store.dispatch("getPosts");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    });

    const posts = computed(() => {
      return store.state.posts;
    });

    return { posts };
  },
  components: {
    SalesPostComp,
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 40%;
  margin: auto;
}
</style>
