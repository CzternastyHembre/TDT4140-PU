<template>
  <div
    class="message"
    :class="currentMessage.senderId._id == activeUser._id ? 'right' : ''"
  >
    <div class="profileName">
      {{ currentMessage.senderId.userName }}
    </div>
    <div class="content">
      {{ currentMessage.content }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "MessageSingle",
  props: {
    currentMessage: Object,
  },
  setup(props) {
    const store = useStore();
    const messageRef = ref(props.currentMessage);

    const activeUser = computed(() => store.state.activeUser);

    return { messageRef, activeUser };
  },
};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  text-align: left;
  display: flex;
  color: #5a4035;
  position: relative;
  margin: 0.8em 0;
  border-radius: 40px;
  .content {
    max-width: 70%;
    border-radius: 10px;
    padding: 5px;
    border-radius: 0 10px 10px 0;
    background-color: #f9f3e8;
  }
  .profileName {
    top: -1em;
    position: absolute;
    font-size: 0.8em;
  }
}
.right {
  text-align: right;
  flex-direction: row-reverse;
  .content {
    border-radius: 10px 0 0 10px;
    background-color: #d0afa0;
  }
}
</style>
