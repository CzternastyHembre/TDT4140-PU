<template>
  <div class="users">
    <div class="profileName">
      {{ currentUser.Username }}
    </div>
    <div class="content">
      {{ currentUser.LastMessage }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MessageUsers",
  props: {
    currentUser: Object,
  },
  setup(props) {
    const store = useStore();
    const messageRef = ref(props.currentUser);

    const activeUser = computed(() => store.state.activeUser);

    return { messageRef, activeUser };
  },
};
</script>

<style lang="scss" scoped>
.users {
  text-align: left;
}

.profileName {
  font-weight: bold;
  font-size: 15px;
}

.content {
  font-style: italic;
  border-radius: 10px;
  padding: 5px;
  border-radius: 0 10px 10px 0;
  background-color: #efddbb;
  color: #5a4035;
}
</style>
