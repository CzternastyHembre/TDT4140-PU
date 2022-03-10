<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ activeUser.firstName }} {{ activeUser.lastName }}</h2>
      <img src="image" />
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

  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
