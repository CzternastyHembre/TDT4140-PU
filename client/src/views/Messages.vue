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
  display: flex;
  margin: auto auto auto 20%;
  /*background-color: beige;*/
  > * {
    margin: 0 10% 0 0;
  }
}
</style>
