<template>
  <div
    class="users"
    :class="props.activeConv ? 'active' : ''"
    @click="chooseConv"
  >
    <div class="profileName">
      {{ props.userName }}
    </div>
    <div class="content">
      {{ props.lastMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageUsers",
  props: {
    userName: String,
    convId: String,
    lastMessage: String,
    activeConv: Boolean,
  },
  setup(props, { emit }) {
    const chooseConv = () => {
      emit("activeConversation", props.convId);
    };

    return { chooseConv, props };
  },
};
</script>

<style lang="scss" scoped>
.users {
  height: 3em;
  text-align: left;
  background-color: var(--bgc-primary);
  display: grid;
  grid-template-rows: 30% 70%;

  margin: 0 auto 1em 0;
  padding: 7px;
  border-radius: 10px;
  .content {
    opacity: 0.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: italic;
    border-radius: 10px;
    padding: 5px;
    padding-top: 7px;
    color: #5a4035;
  }
  :hover {
    cursor: pointer;
  }
  opacity: 0.5;
}

.active {
  white-space: nowrap;
  opacity: 1;
}

.profileName {
  font-weight: bold;
  font-size: 15px;
}
</style>
