<template>
  <div v-if="currUser">
    <div class="post">
      <h2>{{ currUser.firstName }} {{ currUser.lastName }} (Edit-symbol)</h2>

      Bilde (Edit-symbol)<br /><br />
      Age <br /><br />
      {{ currUser.email }} (Edit-symbol): <br /><br />
      Description (Edit-symbol):<br />
      <div class="description">{{ currUser.description }}</div>
      <br /><br />
      Change password<br />Delete account<br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "UserProfile",
  setup() {
    const store = useStore();

    const activeUserName = computed(() => {
      return store.state.activeUser;
    });

    const currUser = computed(() => {
      return store.getters.getActiveUser;
    });

    return { currUser, activeUserName };
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin: 6px auto;
  padding-left: 10px;
  border: solid black 1px;
  width: min(100%, 600px);
  background-color: white;
  border-radius: 3px;
  text-align: left;

  h2 {
    text-align: center;
  }
}

.description {
  margin: 6px auto;
  border: solid black 1px;
  width: min(100%, 300px);
  background-color: white;
  border-radius: 3px;
  text-align: left;
}
</style>
