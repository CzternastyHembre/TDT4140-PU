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

.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid > * {
  flex: 0 1 40em;
  background-color: #eff9fe;
}
</style>
