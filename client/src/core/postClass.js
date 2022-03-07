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
   * @param {String} userId
   */
  setUserId(userId) {
    this.userId = userId;
  }

  /**
   * @param {String} userName
   */
  setUserName(userName) {
    this.userName = userName;
  }

  /**
   * @param {String} eventName
   */
  setEventName(eventName) {
    if (!eventName || eventName.length < 2) {
      throw new Error("Please specify event name");
    }
    this.eventName = eventName;
  }

  /**
   * @param {String} eventType
   */
  setEventType(eventType) {
    if (!eventType || eventType.length < 3) {
      throw new Error("Please specify event type (concert, theatre etc.)");
    }
    this.eventType = eventType;
  }

  /**
   * @param {String | Date} eventDate
   */
  setEventDate(eventDate) {
    if (!eventDate) {
      throw new Error("Please specify date and time for the event");
    }

    if (typeof eventDate === "string" || eventDate instanceof String) {
      if (new Date(eventDate).getTime() < Date.now())
        throw new Error("Date for the event must be in the future");
      this.eventDate = new Date(eventDate);
      return;
    }

    if (eventDate.getTime() < Date.now())
      throw new Error("Date for the event must be in the future");
    this.eventDate = eventDate;
  }

  /**
   * @param {Boolean} isSalesPost
   */
  setIsSalesPost(isSalesPost) {
    this.isSalesPost = isSalesPost;
  }

  /**
   * @param {Number} price
   */
  setPrice(price) {
    if (price <= 0) {
      throw new Error("Price cant be negative or zero");
    }
    this.price = price;
  }

  /**
   * @param {Number} price2
   */
  setPrice2(price2) {
    if (price2 <= 0) {
      throw new Error("Price cant be negative or zero");
    }
    this.price2 = price2;
  }
}
