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
  min-height: 80%;
  margin: 0 0 5% 20%;
  > * {
    margin: 0 0 0 0;
  }
}
</style>
