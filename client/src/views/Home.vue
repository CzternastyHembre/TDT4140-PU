<template>
  <div class="home">
    <h1>Posts</h1>
    <div class="posts">
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
import { computed } from "vue";

export default {
  name: "Home",
  setup() {
    const store = useStore();
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

<style scoped>
.home {
  margin: auto;
  width: 70%;
}
</style>
