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
      <div class="person">
        <div>Bilde (Bare å glemme)</div>
        Person
      </div>
      <div v-for="(conv, index) in userConversations" :key="index">
        {{ conv.name }}
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
      const RawConversation = store.state.userConversations;
      const Conversations = [];
      RawConversation.forEach((conv) => {
        let userId =
          conv.participants[0] == activeUser.value._id
            ? conv.participants[1]
            : conv.participants[1];
        //TODO get the user on ID
        Conversations.push({
          name: userId,
        });
      });
      return Conversations;
    });

    console.log(userConversations);
    return {
      activeUser,
      userConversations,
    };
  },
};
</script>

<style scoped>
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
  grid-template-columns: 20% 80%;

  /*margin: 0 auto 2em 0;*/
  padding: 5px;
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
