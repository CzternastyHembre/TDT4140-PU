<template>
  <div class="home">
    <div class="grid">
      <sales-post-comp
        v-for="(post, index) in posts"
        :key="index"
        :postObject="post"
        :onUserProfile="false"
      />
    </div>
    <right-nav
      @sortMethod="(i) => setCurrSortMethod(i)"
      @minPrice="(value) => setFilterMinPrice(value)"
      @maxPrice="(value) => setFilterMaxPrice(value)"
      @isSalesPost="(value) => setFilterIsSalesPost(value)"
    />
  </div>
</template>

<script>
import SalesPostComp from "../components/SalesPostComp.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";
import RightNav from "../components/RightNav.vue";
import sortMethods from "../core/SortingPostMethods";

export default {
  name: "Home",
  setup() {
    const store = useStore();

    onBeforeMount(async () => {
      try {
        await store.dispatch("getPosts");
      } catch (err) {
        store.dispatch("setToast", {
          isActive: true,
          text: err.message,
          bgColor: "lightcoral",
        });
      }
    });

    const sortMethodsList = ref(Object.values(sortMethods));

    const currSortMethod = ref(0);
    const setCurrSortMethod = (index) => {
      currSortMethod.value = index;
    };

    const filterMinPrice = ref(null);
    const setFilterMinPrice = (value) => {
      filterMinPrice.value = value;
    };

    const filterMaxPrice = ref(null);
    const setFilterMaxPrice = (value) => {
      filterMaxPrice.value = value;
    };

    const filterIsSalesPost = ref(null);
    const setFilterIsSalesPost = (value) => {
      filterIsSalesPost.value = value;
    };

    const posts = computed(() => {
      console.log("Test1", filterIsSalesPost.value);
      let posts = store.state.posts;
      posts.sort(sortMethodsList.value[currSortMethod.value].method);
      if (filterMinPrice.value != null)
        posts = posts.filter((post) => {
          if (!post.price) return true;
          return post.price >= filterMinPrice.value;
        });
      if (filterMaxPrice.value != null) {
        posts = posts.filter((post) => {
          if (!post.price) return true;
          return post.price <= filterMaxPrice.value;
        });
      }
      if (filterIsSalesPost.value != null) {
        console.log("Hallo");
        posts = posts.filter((post) =>
          filterIsSalesPost.value ? post.isSalesPost : !post.isSalesPost
        );
      }
      console.log(posts);
      return posts;
    });

    return {
      posts,
      setCurrSortMethod,
      setFilterMinPrice,
      setFilterMaxPrice,
      setFilterIsSalesPost,
    };
  },
  components: {
    SalesPostComp,
    RightNav,
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 40%;
  margin: auto;
}
.rightNav {
  position: fixed;
  margin: 0 2em;
  right: 0;
  top: 140px;
}
</style>
