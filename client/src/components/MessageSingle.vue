<template>
  <div
    class="message"
    :class="currentMessage.senderName == 'Jakob' ? 'right' : ''"
  >
    <div class="profileName">
      {{ currentMessage.senderName }}
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
  color: black;
  position: relative;
  margin: 0.8em 0;
  .content {
    border-radius: 10px;
    padding: 5px;
    border-radius: 0 10px 10px 0;
    background-color: grey;
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
    background-color: lightblue;
  }
}
</style>
