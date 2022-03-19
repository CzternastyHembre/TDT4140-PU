<template>
  <div>
    <div class="OldChatsBox">
      <div class="header"><h2>CHATS</h2></div>
      <div class="search">
        <i class="gg-search"></i>
        <form action="">
          <div>
            <input type="text" name="search" placeholder="Search in chats" />
          </div>
        </form>
      </div>
      <div
        class="person"
        v-for="(conv, index) in userConversations"
        :key="index"
        @click="openConversation(conv)"
        :class="activeConversationId == conv._id ? 'active' : ''"
      >
        <div>
          {{
            conv.p1._id == activeUser._id ? conv.p2.userName : conv.p1.userName
          }}
        </div>
        <div></div>
        <div class="lastMSG">
          {{ conv.messages[conv.messages.length - 1].content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
  name: "MessageUsersContainer",
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      try {
        await store.dispatch("getConversationsFromUser", activeUser.value._id);
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    });

    const activeUser = computed(() => {
      return store.state.activeUser;
    });

    const userConversations = computed(() => {
      return store.state.userConversations;
    });

    const openConversation = (conv) => {
      store.commit("setActiveConversation", conv);
    };
    const activeConversationId = computed(() => {
      return store.state.activeConversation._id;
    });

    return {
      activeUser,
      userConversations,
      openConversation,
      activeConversationId,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: left;
  font: bold;
  font-style: italic;
  color: #5a4035;
}

.OldChatsBox {
  color: #5a4035;
  background-color: #efddbb;
  width: 250px;
  height: 300px;
  padding: 20px;
  margin: 10px auto;
}

.search {
  display: grid;
  grid-template-columns: 10% 90%;
  text-align: center;
}

.person {
  display: grid;
  grid-template-columns: 20% 10% 70%;
  height: 1em;

  /*margin: 0 auto 2em 0;*/
  padding: 5px;
  .lastMSG {
    opacity: 0.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :hover {
    cursor: pointer;
  }
  opacity: 0.5;
}
.person.active {
  white-space: nowrap;
  opacity: 1;
  border: 1px solid black;
}

.gg-search {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-radius: 100%;
  margin-left: -4px;
  margin-top: -4px;
}
.gg-search::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  height: 8px;
  background: currentColor;
  transform: rotate(-45deg);
  top: 10px;
  left: 12px;
}
</style>
