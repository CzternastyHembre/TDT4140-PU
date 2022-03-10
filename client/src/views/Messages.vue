<template>
  <div class="grid">
    <div>
      <old-chats />
    </div>
    <div>
      <chat-box />
    </div>
  </div>
</template>

<script>
import ChatBox from "../components/ChatBox.vue";
import OldChats from "../components/OldChats.vue";

export default {
  name: "MessagePage",
  components: {
    ChatBox,
    OldChats,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
