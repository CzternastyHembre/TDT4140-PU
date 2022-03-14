<template>
  <div class="profilePost">
    <div class="profileHeader">
      <h2>{{ activeUser.firstName }} {{ activeUser.lastName }}</h2>
    </div>
    <img class="pic" :src="StianSulebak" />
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
import StianSulebak from "@/assets/StianSulebak.png";

export default {
  name: "UserProfileView",
  props: {
    activeUser: Object,
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
  data: function () {
    return {
      StianSulebak,
    };
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
