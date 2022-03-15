<template>
  <div class="chatbox">
    <div class="chat">
      <MessageSingle
        v-for="(message, index) in messages"
        :key="index"
        :currentMessage="message"
      />
    </div>
    <div class="write">
      <div class="input">
        <input type="text" name="search" />
        <div class="box"><i class="gg-arrow-up"></i></div>
      </div>
      <div class="box"><i class="gg-add"></i></div>
      <div class="box"><i class="gg-smile"></i></div>
    </div>
  </div>
</template>

<script>
import MessageSingle from "@/components/MessageSingle.vue";
import { ref } from "vue";

export default {
  name: "ChatBox",
  components: {
    MessageSingle,
  },
  setup() {
    const messages = ref([
      {
        content: "Hei Jakob!",
        senderName: "Sara",
      },
      {
        content: "Hei Sara!",
        senderName: "Jakob",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
      {
        content: "OK!",
        senderName: "Sara",
      },
    ]);

    return { messages };
  },
};
</script>

<style scoped>
.chatbox {
  color: #5a4035;
  display: grid;
  grid-template-rows: 90% 10%;

  height: 400px;
  width: 400px;
  background-color: #efddbb;
}

.chat {
  padding-top: 10px;
  overflow-y: scroll;
}

.write {
  text-align: center;
  display: grid;
  grid-template-columns: 90% 5% 5%;
  padding: 5px;
}

.input {
  display: grid;
  grid-template-columns: 95% 5%;
}

.gg-arrow-up {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
}
.gg-arrow-up::after,
.gg-arrow-up::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 4px;
}
.gg-arrow-up::after {
  width: 8px;
  height: 8px;
  border-top: 2px solid;
  border-left: 2px solid;
  transform: rotate(45deg);
  left: 7px;
}
.gg-arrow-up::before {
  width: 2px;
  height: 16px;
  left: 10px;
  background: currentColor;
}

.gg-add {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(var(--ggs, 1));
  border-radius: 22px;
}

.gg-add::after,
.gg-add::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 2px;
  background: currentColor;
  border-radius: 5px;
  top: 8px;
  left: 4px;
}

.gg-add::after {
  width: 2px;
  height: 10px;
  top: 4px;
  left: 8px;
}

.gg-smile {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 100px;
}

.gg-smile::after,
.gg-smile::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 4px;
}

.gg-smile::before {
  background: currentColor;
  box-shadow: 6px 0 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  top: 5px;
}

.gg-smile::after {
  width: 8px;
  height: 4px;
  border-radius: 150px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border: 2px solid;
  border-top-color: transparent;
  top: 9px;
}
</style>
