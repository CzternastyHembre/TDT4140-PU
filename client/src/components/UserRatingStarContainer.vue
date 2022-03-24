<template>
  <div class="starContainer">
    <UserRatingStar
      v-for="(shit, index) in starsAmount"
      :key="index"
      :isRated="index <= currentRating"
      :isHover="index <= hoverAmount"
      @mouseover="hoverUser(index)"
      @mouseout="hoverUser(-1)"
      @click="rateUser(index)"
    />
    <button class="submitButton" @click="submitRateUser">Rate!</button>
  </div>
</template>

<script>
import UserRatingStar from "@/components/UserRatingStar";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "UserRatingStarContainer",
  props: {
    profileId: String,
  },
  components: {
    UserRatingStar,
  },
  setup(props) {
    const store = useStore();

    const starsAmount = [0, 1, 2, 3, 4];
    const currentRating = ref(-1);
    const hoverAmount = ref(-1);

    const rateUser = (newRating) => {
      currentRating.value = newRating;
    };

    const hoverUser = (newRating) => {
      hoverAmount.value = newRating;
    };

    const submitRateUser = async () => {
      try {
        if (currentRating.value < 0) {
          throw new Error("Please select a rating before submitting");
        }
        await store.dispatch("rateUser", {
          userIdToRate: props.profileId,
          rating: currentRating.value,
        });
        store.dispatch("setToast", {
          isActive: true,
          text: `Rating was submitted`,
          bgColor: "lightgreen",
        });
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    };

    return {
      starsAmount,
      hoverAmount,
      currentRating,
      rateUser,
      hoverUser,
      submitRateUser,
    };
  },
};
</script>

<style scoped lang="scss">
.starContainer {
  position: relative;
  display: flex;
  margin: auto;
  margin-top: 10px;
  .submitButton {
    width: fit-content;
    height: fit-content;
    margin: 0.2em 0em 0em 1em;
  }
}
</style>
