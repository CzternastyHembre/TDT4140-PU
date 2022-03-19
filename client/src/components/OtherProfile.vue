<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ viewProfileUser.firstName }} {{ viewProfileUser.lastName }}</h2>
      <img src="TODO" alt="Profile picture (todo)" />
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
export default {
  name: "OtherProfile",
  props: {
    viewProfileUser: Object,
  },
};
</script>

<style lang="scss" scoped></style>
