<template>
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
    <div class="person">
      <MessageUsers
        v-for="(conv, index) in userConversations"
        :key="index"
        @activeConversation="(id) => openConversation(id)"
        :userName="
          conv.p1._id == activeUser._id ? conv.p2.userName : conv.p1.userName
        "
        :convId="conv._id"
        :lastMessage="
          conv.messages.length > 0
            ? conv.messages[conv.messages.length - 1].content
            : ''
        "
        :activeConv="activeConversationId == conv._id"
      />
    </div>
  </div>
</template>

<script>
import MessageUsers from "@/components/MessageUsers";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
  name: "MessageUsersContainer",
  components: {
    MessageUsers,
  },
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

    const openConversation = (conv_id) => {
      store.dispatch("setActiveConversation", conv_id);
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
  color: #5a4035;
}

.OldChatsBox {
  color: #5a4035;
  background-color: white;
  border-radius: 30px 0 0 30px;
  width: 300px;
  height: 400px;
  padding: 15px;
  margin: 0px auto;
  overflow-y: auto;
  border-right: var(--bgc-primary) 6px solid;
}

.search {
  display: grid;
  grid-template-columns: 10% 90%;
  text-align: center;
}

.person {
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
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
input[type="text"],
select {
  width: 100%;
  padding: 5px 5px;
  display: inline-block;
  border: 1px solid #5a4035;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
