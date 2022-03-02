<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ currUser.firstName }} {{ currUser.lastName }}</h2>
      <img src="TODO" alt="Profile picture (todo)" />
    </div>

    <div class="elementCC">
      <div class="elementContainer">
        <div>Email</div>
        <div>
          {{ currUser.email }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Username</div>
        <div>
          {{ currUser.userName }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Full name</div>
        <div>
          {{ currUser.firstName + " " + currUser.lastName }}
        </div>
      </div>
      <div class="elementContainer descriptionContainer">
        <div>Description</div>
        <div class="profileDescription">{{ currUser.description }}</div>
      </div>
      <div class="userUpdatedPrompt" v-if="userUpdatedMsg">
        {{ userUpdatedMsg }}
      </div>
    </div>

    <div class=""></div>
  </div>
</template>

<script>
import User from "../core/User.js";

export default {
  name: "UserProfileView",
  props: {
    currUser: User,
    userUpdatedMsg: String,
  },
};
</script>

<style lang="scss" scoped>
.userUpdatedPrompt {
  color: darkgreen;
  padding: 10px 0 10px 0;
  text-align: center;
}
</style>
