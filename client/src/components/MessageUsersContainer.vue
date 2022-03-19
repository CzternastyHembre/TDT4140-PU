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
        <MessageUsers
          v-for="(user, index) in users"
          :key="index"
          :currentUser="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MessageUsers from "@/components/MessageUsers.vue";
import { ref } from "vue";

export default {
  name: "RecentMessages",
  components: {
    MessageUsers,
  },
  setup() {
    const users = ref([
      {
        Username: "Sara",
        LastMessage: "Takk for handelen",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
      {
        Username: "Jakob",
        LastMessage: "Bare hyggelig",
      },
    ]);

    return { users };
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
  background-color: white;
  border-radius: 40px;
  width: 300px;
  height: 400px;
  padding: 5px;
  margin: 0px auto;
  overflow-y: scroll;
}

.search {
  display: grid;
  grid-template-columns: 10% 90%;
  text-align: center;
}

.person {
  padding: 10px;
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
