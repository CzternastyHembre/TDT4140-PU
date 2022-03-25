const sortByTimeDesc = (a, b) => {
  let aDate = new Date(a.eventDate).getTime();
  let bDate = new Date(b.eventDate).getTime();

  return aDate - bDate;
};

const sortByTimeAsc = (a, b) => {
  let aDate = new Date(a.eventDate).getTime();
  let bDate = new Date(b.eventDate).getTime();

  return bDate - aDate;
};

const sortByEventTypeAsc = (a, b) => {
  const typeA = a.eventType.toUpperCase(); // ignore upper and lowercase
  const typeB = b.eventType.toUpperCase(); // ignore upper and lowercase
  if (typeA < typeB) {
    return -1;
  }
  if (typeA > typeB) {
    return 1;
  }
  return 0;
};

const sortByEventTypeDesc = (a, b) => {
  const typeA = a.eventType.toUpperCase(); // ignore upper and lowercase
  const typeB = b.eventType.toUpperCase(); // ignore upper and lowercase
  if (typeA < typeB) {
    return 1;
  }
  if (typeA > typeB) {
    return -1;
  }
  return 0;
};

const sortByPriceAsc = (a, b) => {
  return a.price - b.price;
};

const sortByPriceDesc = (a, b) => {
  return b.price - a.price;
};

export default {
  sortByTimeDesc: {
    name: "Time Desc",
    method: sortByTimeDesc,
  },
  sortByTimeAsc: {
    name: "Time Asc",
    method: sortByTimeAsc,
  },
  sortByEventTypeAsc: {
    name: "Event Asc",
    method: sortByEventTypeAsc,
  },
  sortByEventTypeDesc: {
    name: "Event Desc",
    method: sortByEventTypeDesc,
  },
  sortByPriceAsc: {
    name: "Price Asc",
    method: sortByPriceAsc,
  },
  sortByPriceDesc: {
    name: "Price Desc",
    method: sortByPriceDesc,
  },
};
