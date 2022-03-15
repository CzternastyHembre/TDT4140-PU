<template>
  <div class="grid">
    <div>
      <message-users-container />
    </div>
    <div>
      <message-single-container />
    </div>
  </div>
</template>

<script>
import MessageUsersContainer from "../components/MessageUsersContainer.vue";
import MessageSingleContainer from "../components/MessageSingleContainer.vue";

export default {
  name: "MessagePage",
  components: {
    MessageSingleContainer,
    MessageUsersContainer,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  margin: auto auto auto 20%;
  /*background-color: beige;*/
  > * {
    margin: 0 10% 0 0;
  }
}
</style>
