export default class Post {
  /**
   * @constructs Post
   * @param {String} userId
   * @param {String} userName
   * @param {String} eventName
   * @param {String} eventType
   * @param {Date} eventDate
   * @param {Boolean} isSalesPost
   * @param {Number} price
   * @param {Number} price2
   */
  constructor(
    userId,
    userName,
    eventName,
    eventType,
    eventDate,
    isSalesPost,
    price,
    price2
  ) {
    this.setUserId(userId);
    this.setUserName(userName);
    this.setEventName(eventName);
    this.setEventType(eventType);
    this.setEventDate(eventDate);
    this.setIsSalesPost(isSalesPost);
    if (isSalesPost && !price) throw new Error("Price must be specified");
    if (price) this.setPrice(price);
    if (price2) this.setPrice2(price2);
    this.isSold = false;
  }

  /**
   * @param {string} userId
   */
  setUserId(userId) {
    this.userId = userId;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  /**
   * @param {string} eventName
   */
  setEventName(eventName) {
    this.eventName = eventName;
  }

  /**
   * @param {string} eventType
   */
  setEventType(eventType) {
    this.eventType = eventType;
  }

  /**
   * @param {Date} eventDate
   */
  setEventDate(eventDate) {
    if (typeof eventDate === "string" || eventDate instanceof String) {
      this.eventDate = new Date(eventDate);
      return;
    }
    this.eventDate = eventDate;
  }

  setIsSalesPost(isSalesPost) {
    this.isSalesPost = isSalesPost;
  }

  setPrice(price) {
    if (price <= 0) {
      throw new Error("Price cant be negative or zero");
    }
    this.price = price;
  }
  setPrice2(price2) {
    if (price2 <= 0) {
      throw new Error("Price cant be negative or zero");
    }
    this.price2 = price2;
  }
}
