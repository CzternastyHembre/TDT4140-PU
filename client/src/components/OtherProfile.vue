<template>
  <div class="profilePost">
    <div class="new-convo">
      <button class="submitButton" @click="newConvo">Start conversation</button>
    </div>

    <div class="user-rating">
      {{ userRating == -1 ? "No ratings" : "Rating: " + userRating.toFixed(1) }}
      <UserRatingStar :isRated="true" />
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

    <UserRatingStarContainer :profileId="viewProfileUser._id" />
  </div>
</template>

<script>
import UserRatingStarContainer from "@/components/UserRatingStarContainer";
import UserRatingStar from "@/components/UserRatingStar";
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
    UserRatingStar,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const userRating = computed(() => {
      if (props.viewProfileUser.userRatings === undefined) {
        return -1;
      }
      let rating = 0;
      if (props.viewProfileUser.userRatings.length == 0) {
        return -1;
      } else {
        props.viewProfileUser.userRatings.forEach((ratingEntry) => {
          rating += ratingEntry.rating;
        });
        return rating / props.viewProfileUser.userRatings.length;
      }
    });

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
    return { newConvo, userRating, currUser };
  },
};
</script>

<style lang="scss" scoped>
.profilePost {
  padding-top: 30px;
}
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

.user-rating {
  position: absolute;
  right: 3.4em;
  top: 4.5em;
  font-size: x-large;
  i {
    position: absolute;
    right: -3em;
    top: -0.4em;
  }
}
</style>
