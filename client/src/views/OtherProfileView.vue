<template>
  <div class="profileWrapper">
    <OtherProfile :viewProfileUser="viewProfileUser" />
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed } from "vue";
import OtherProfile from "../components/OtherProfile.vue";

export default {
  name: "OtherProfileView",
  components: {
    OtherProfile,
  },

  setup() {
    const store = useStore();

    const viewProfileUser = computed(() => {
      return store.state.viewProfileUser;
    });

    return {
      viewProfileUser,
    };
  },
};
</script>

<style scoped lang="scss">
.profileWrapper {
  margin: 6px auto;
  width: min(100%, 600px);
  button {
    margin-bottom: 20px;
  }
}

.profilePost {
  border: solid black 1px;
  background-color: var(--comp-primary);
  border-radius: 3px;
  text-align: left;

  .profileHeader {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
  }

  .profileDescriptionContainer {
    margin: auto;
    width: 70%;

    textarea.profileDescription {
      width: 95%;
    }
  }
}
.elementCC {
  .elementContainer {
    padding: 10px;
  }
  .elementContainer:nth-child(2n -1) {
    background: var(--bgc-primary);
  }
  .elementContainer > * {
    display: inline;
    margin-right: 10px;
  }
  .elementContainer :first-child {
    font-weight: bold;
  }
  .descriptionContainer {
    :last-child {
      display: block;
      padding: 5px;
    }
  }
}
</style>
