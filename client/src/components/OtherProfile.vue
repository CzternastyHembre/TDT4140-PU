<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ viewProfileUser.firstName }} {{ viewProfileUser.lastName }}</h2>
    </div>
    <img class="pic" src="@/assets/StianSulebak.png" />

    <div class="elementCC">
      <div class="elementContainer">
        <div>Email</div>
        <div>
          {{ viewProfileUser.email }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Username</div>
        <div>
          {{ viewProfileUser.userName }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Full name</div>
        <div>
          {{ viewProfileUser.firstName + " " + viewProfileUser.lastName }}
        </div>
      </div>
      <div class="elementContainer descriptionContainer">
        <div>Description</div>
        <div class="profileDescription">{{ viewProfileUser.description }}</div>
      </div>
    </div>

    <div class="new-convo">
      <button @click="newConvo">Start conversation</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  name: "OtherProfile",
  props: {
    viewProfileUser: Object,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const currUser = computed(() => {
      return store.state.activeUser;
    });

    const newConvo = async () => {
      try {
        await store.dispatch("startNewConversation", {
          p1: currUser.value._id,
          p2: props.viewProfileUser._id,
        });
        router.push("/Messages");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    };
    return { newConvo };
  },
};
</script>

<style lang="scss" scoped>
.pic {
  margin-bottom: 1em;
  width: 100px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
}

.new-convo {
  position: relative;
  button {
    position: absolute;
    padding: 10px 20px;
    width: 150px;
    font-size: small;
    border-radius: 40px;
    right: 5px;
    top: -50px;
    background-color: var(--button-primary);
    border: 0px solid #5a4035;
    box-shadow: 0 2px 2px 0 rgb(90 64 53 / 57%),
      0 3px 1px -2px rgb(90 64 53 / 32%), 0 1px 5px 0 rgb(90 64 53 / 37%);

    &:hover {
      box-shadow: 0 2px 6px black;
      cursor: pointer;
    }
  }
}
</style>
