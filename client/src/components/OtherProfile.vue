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

    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "OtherProfile",
  props: {
    viewProfileUser: Object,
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
}
</style>
