<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ activeUser.firstName }} {{ activeUser.lastName }}</h2>
      <img src="TODO" alt="Profile picture (todo)" />
    </div>

    <div class="elementCC">
      <div class="elementContainer">
        <div>Email</div>
        <div>
          {{ activeUser.email }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Username</div>
        <div>
          {{ activeUser.userName }}
        </div>
      </div>
      <div class="elementContainer">
        <div>Full name</div>
        <div>
          {{ activeUser.firstName + " " + activeUser.lastName }}
        </div>
      </div>
      <div class="elementContainer descriptionContainer">
        <div>Description</div>
        <div class="profileDescription">{{ activeUser.description }}</div>
      </div>
    </div>

    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "UserProfileView",
  props: {
    activeUser: Object,
  },
};
</script>

<style lang="scss" scoped></style>
