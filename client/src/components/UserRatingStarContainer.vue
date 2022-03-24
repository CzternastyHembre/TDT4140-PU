<template>
  <div class="starContainer">
    <UserRatingStar
      v-for="(shit, index) in bitch"
      :key="index"
      :isRated="index <= currentRating"
      :isHover="index <= hoverAmount"
      @mouseover="ratUser(index)"
      @mouseout="ratUser(-1)"
      @click="rateUser(index)"
    />
    <button class="submitButton">Rate!</button>
  </div>
</template>

<script>
import UserRatingStar from "@/components/UserRatingStar";
import { ref } from "vue";
export default {
  name: "UserRatingStarContainer",
  props: {
    isRated: Boolean,
  },
  components: {
    UserRatingStar,
  },
  setup() {
    const bitch = [0, 1, 2, 3, 4];
    const currentRating = ref(-1);
    const hoverAmount = ref(-1);
    const rateUser = (newRating) => {
      hoverAmount.value = false;
      currentRating.value = newRating;
    };
    const ratUser = (newRating) => {
      hoverAmount.value = newRating;
    };
    return { bitch, currentRating, rateUser, ratUser, hoverAmount };
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
