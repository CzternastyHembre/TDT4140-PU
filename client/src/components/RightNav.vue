<template>
  <div class="navButtons rightNav">
    <h3>Sort By:</h3>
    <div class="button-div" @click="toggleSort">
      <h3>TOGGLE SORT</h3>
      <h5>{{ sortMethodsList[currSortMethod].name }}</h5>
    </div>
    <h3>Filter:</h3>
    <div class="button-div">
      <h3>MIN PRICE:</h3>
      <input type="number" @change="emitMinPrice" v-model="filterMinPrice" />
      <div class="x-button" @click="resetMinPrice">
        <h4>X</h4>
      </div>
    </div>
    <div class="button-div">
      <h3>MAX PRICE:</h3>
      <input type="number" @change="emitMaxPrice" v-model="filterMaxPrice" />
      <div class="x-button" @click="resetMaxPrice">
        <h4>X</h4>
      </div>
    </div>
    <div class="button-div" @click="emitIsSalesPost">
      <h3>TOGGLE SORT</h3>
      <h5>{{ displayFilterIsSalesPost[currFilterIsSalesPost] }}</h5>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import sortMethods from "@/core/SortingPostMethods";

export default {
  name: "RightNav",
  emits: ["sortMethod", "minPrice", "maxPrice", "isSalesPost"],
  setup(props, { emit }) {
    const router = useRouter();

    const sortMethodsList = ref(Object.values(sortMethods));
    const currSortMethod = ref(0);

    const filterMinPrice = ref(null);
    const filterMaxPrice = ref(null);

    const currFilterIsSalesPost = ref(0);
    const filterIsSalesPost = [null, true, false];
    const displayFilterIsSalesPost = ["None", "Wish to sell", "Wish to buy"];

    const toggleSort = () => {
      currSortMethod.value =
        (currSortMethod.value + 1) % sortMethodsList.value.length;
      emit("sortMethod", currSortMethod.value);
    };
    const resetMinPrice = () => {
      filterMinPrice.value = null;
      emitMinPrice();
    };
    const emitMinPrice = () => {
      if (filterMaxPrice.value && filterMinPrice.value > filterMaxPrice.value) {
        filterMinPrice.value = filterMaxPrice.value;
      }
      emit("minPrice", filterMinPrice.value);
    };

    const resetMaxPrice = () => {
      filterMaxPrice.value = null;
      emitMaxPrice();
    };
    const emitMaxPrice = () => {
      if (filterMinPrice.value && filterMaxPrice.value < filterMinPrice.value) {
        filterMaxPrice.value = filterMinPrice.value;
      }
      emit("maxPrice", filterMaxPrice.value);
    };

    const emitIsSalesPost = () => {
      currFilterIsSalesPost.value =
        (currFilterIsSalesPost.value + 1) % filterIsSalesPost.length;
      emit("isSalesPost", filterIsSalesPost[currFilterIsSalesPost.value]);
    };

    const isHomePage = computed(() => {
      return router.currentRoute.value.path === "/";
    });

    return {
      isHomePage,
      filterMaxPrice,
      filterMinPrice,
      toggleSort,
      emitMinPrice,
      resetMinPrice,
      emitMaxPrice,
      resetMaxPrice,
      emitIsSalesPost,
      displayFilterIsSalesPost,
      currFilterIsSalesPost,
      sortMethodsList,
      currSortMethod,
    };
  },
};
</script>
<style scoped lang="scss">
.button-div {
  position: relative;
  cursor: pointer;
  margin: 10px auto;
  padding: 20px;
  background-color: var(--nav-button);
  width: min(80%, 600px);
  border-radius: 40px;
  h3 {
    color: var(--font-color);
    text-align: center;
    margin: 0 0 0 0;
  }
  h5 {
    margin: 5px auto 0 auto;
  }
  input {
    border-radius: 10%;
    margin: auto;
    width: 100px;
    border: 0;
  }
  .x-button {
    position: absolute;
    height: 20px;
    right: 15px;
    top: 10px;
    &:hover {
      font-size: 1.1em;
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
