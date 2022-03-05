<template>
  <div class="post" :class="{ expiredEvent: Date.now() > post.dateAndTime }">
    <p><b>EVENT NAME:</b> {{ post.eventName }}</p>
    <p><b>EVENT TYPE:</b> {{ post.eventType }}</p>
    <p><b>DATE:</b> {{ new Date(post.dateAndTime).toISOString() }}</p>
    <p v-if="post.price"><b>PRICE:</b> {{ post.price }}kr</p>
    <p><b>USERNAME:</b> {{ post.user }}</p>
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
  font-style: bold;
  margin: 20px auto;
  width: min(100%, 600px);
  padding: 30px;
  text-align: left;
  background-color: #c7dce7;
  color: #cc3f3f;
  /* box-shadow: 0 4px 6px -1px rgba(39, 6, 129, 0.75),
    0 2px 4px -1px rgba(39, 6, 129, 0.75); */
}

.expiredEvent {
  opacity: 0.6;
}
</style>
