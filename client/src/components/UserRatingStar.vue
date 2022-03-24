<template>
  <i class="star" :id="isRated ? '' : 'grey'" :class="isHover ? 'hov' : ''"></i>
</template>

<script>
export default {
  name: "UserRatingStar",
  props: {
    isRated: Boolean,
    isHover: Boolean,
  },
};
</script>

<style scoped lang="scss">
/*
Code fetched from Felix M. (Hamburg, Germany)
https://codepen.io/fxm90
*/
.star {
  position: relative;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #fc0;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 24px;

  &:before,
  &:after {
    content: "";

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
}
.hov {
  opacity: 0.7;
  border-bottom: 0.7em solid rgb(250, 223, 116);

  &:before,
  &:after {
    border-bottom: 0.7em solid rgb(250, 223, 116);
  }
}
#grey {
  border-bottom: 0.7em solid grey;
  &:before,
  &:after {
    border-bottom: 0.7em solid grey;
  }
}
</style>
