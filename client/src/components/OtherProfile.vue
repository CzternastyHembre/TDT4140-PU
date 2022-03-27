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
    <div v-if="viewProfileUser.firstName == 'Stian'">
      <img class="pic" src="@/assets/StianSulebak.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Mattis'">
      <img class="pic" src="@/assets/Mattis.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Jakob Severin Steffensen'">
      <img class="pic" src="@/assets/Jakob.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Hans Gunleik'">
      <img class="pic" src="@/assets/Hans.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Vetle'">
      <img class="pic" src="@/assets/Vetle.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Ylva'">
      <img class="pic" src="@/assets/Ylva.png" />
    </div>
    <div v-if="viewProfileUser.firstName == 'Sara'">
      <img class="pic" src="@/assets/Sara.png" />
    </div>

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
      <div class="elementContainer">
        <div>Description</div>
        <div class="profileDescription">{{ viewProfileUser.description }}</div>
      </div>
      <div class="elementContainer">
        <div>Report user</div>
      </div>
      <div>
        <label class="switch">
          <input type="checkbox" @click="reportUser" v-model="checkboxValue" />
          <span class="slider round"></span>
        </label>
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
import { computed, ref } from "vue";

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

    const checkboxValue = ref(false);

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

    const reportUser = () => {
      if (!checkboxValue.value) {
        store.dispatch("setToast", {
          isActive: true,
          text: `User was reported`,
          bgColor: "lightgreen",
        });
      } else {
        store.dispatch("setToast", {
          isActive: true,
          text: `Report of user was removed`,
          bgColor: "lightgreen",
        });
      }
    };

    return { newConvo, userRating, currUser, checkboxValue, reportUser };
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

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 8px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.elementcontainer_reportContainer {
}
</style>
