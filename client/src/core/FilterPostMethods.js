const filterBySalesPosts = (post) => {
  return post.isSalesPost;
};

const filterByBuyPosts = (post) => {
  return !post.isSalesPost;
};

const filterPriceMoreThan = (post, price) => {
  return post.price >= price;
};

const filterPriceLessThan = (post, price) => {
  return post.price >= price;
};

export default {
  filterBySalesPosts,
  filterByBuyPosts,
  filterPrice: {
    filterPriceLessThan,
    filterPriceMoreThan,
  },
};
