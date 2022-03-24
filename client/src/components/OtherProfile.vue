<template>
  <div class="profilePost">
    <div class="new-convo">
      <button class="submitButton" @click="newConvo">Start conversation</button>
    </div>

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

    <UserRatingStarContainer />
  </div>
</template>

<script>
import UserRatingStarContainer from "@/components/UserRatingStarContainer";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  name: "OtherProfile",
  props: {
    viewProfileUser: Object,
  },
  components: {
    UserRatingStarContainer,
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
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  .submitButton {
    margin: 0;
    width: fit-content;
    height: fit-content;
    font-size: 1em; /*littned*/
  }
}
</style>
