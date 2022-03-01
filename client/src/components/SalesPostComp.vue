<template>
  <div class="post" :class="{ expiredEvent: Date.now() > post.dateAndTime }">
    <p class="underline">
      <b class="color">EVENT NAME:</b> {{ post.eventName }}
    </p>
    <p class="underline">
      <b class="color">EVENT TYPE:</b> {{ post.eventType }}
    </p>
    <p class="underline">
      <b class="color">DATE:</b> {{ new Date(post.dateAndTime).toISOString() }}
    </p>
    <p class="underline" v-if="post.price">
      <b class="color">PRICE:</b> {{ post.price }}kr
    </p>
    <p class="underline"><b class="color">USERNAME:</b> {{ post.user }}</p>
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
  color: #5a4035;
  /* box-shadow: 0 4px 6px -1px rgba(39, 6, 129, 0.75),
    0 2px 4px -1px rgba(39, 6, 129, 0.75); */
}

.expiredEvent {
  opacity: 0.6;
}

.color {
  color: #cc3f3f;
}
.underline {
  border-bottom: 2px dotted #cc3f3f;
  width: 100%;
  padding-bottom: 5px;
}
</style>
