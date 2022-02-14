<template>
  <div class="post">
    <p>Username: {{ post.user }}</p>
    <p>Event name: {{ post.eventName }}</p>
    <p>Event Type: {{ post.eventType }}</p>
    <p>Date: {{ new Date(post.dateAndTime).toISOString() }}</p>
    <p>Price: {{ post.price }}kr</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "SalesPostComp",
  props: ["indexPost"],
  setup(props) {
    const store = useStore();

    const post = computed(() => {
      return store.getters.getPostByIndex(props.indexPost);
    });

    return { post };
  },
};
</script>

<style scoped>
.post {
  margin: 6px auto;
  border: solid black 1px;
  width: min(100%, 600px);
}
</style>
