<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ viewProfileUser.firstName }} {{ viewProfileUser.lastName }}</h2>
      <br />
      <img class="pic" :src="StianSulebak" />
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
      <div class="elementContainer descriptionContainer">
        <div>Description</div>
        <div class="profileDescription">{{ viewProfileUser.description }}</div>
      </div>
    </div>

    <div class=""></div>
  </div>
</template>

<script>
import StianSulebak from "@/assets/StianSulebak.png";

export default {
  name: "OtherProfile",
  props: {
    viewProfileUser: Object,
  },
  data: function () {
    return {
      StianSulebak,
    };
  },
};
</script>

<style lang="scss" scoped></style>
