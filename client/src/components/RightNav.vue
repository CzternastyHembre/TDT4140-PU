<template>
  <div class="navButtons rightNav" v-if="isHomePage">
    <h3>Sort By:</h3>
    <div class="button-div" @click="toggleSort">
      <h3>TOGGLE SORT</h3>
      <h5>{{ sortMethodsList[currSortMethod].name }}</h5>
    </div>
    <h3>Filter:</h3>
    <div class="button-div">
      <h3>MIN PRICE:</h3>
      <input type="number" />
    </div>
    <div class="button-div">
      <h3>MAX PRICE:</h3>
      <input type="number" />
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

//import filterMethods from "@/core/FilterPostMethods";
import sortMethods from "@/core/SortingPostMethods";
import { useStore } from "vuex";
export default {
  name: "RightNav",
  setup() {
    const router = useRouter();
    const store = useStore();

    const sortMethodsList = ref(Object.values(sortMethods));
    const currSortMethod = ref(0);

    const toggleSort = () => {
      //console.log(sortMethodsList.value);
      currSortMethod.value =
        (currSortMethod.value + 1) % sortMethodsList.value.length;
      store.commit(
        "setSortPostMethod",
        sortMethodsList.value[currSortMethod.value].method
      );
      //console.log(sortMethodsList.value[currSortMethod.value].method);
    };

    const isHomePage = computed(() => {
      return router.currentRoute.value.path === "/";
    });

    return { isHomePage, toggleSort, sortMethodsList, currSortMethod };
  },
};
</script>
<style scoped lang="scss">
.button-div {
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
}
</style>
