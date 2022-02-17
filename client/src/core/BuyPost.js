export default class BuyPost {
  user;
  eventName;
  eventType;
  dateAndTime;

  /**
   * @constructs BuyPost
   * @param {string} user
   * @param {string} eventName
   * @param {string} eventType
   * @param {Date} dateAndTime
   */
  constructor(user, eventName, eventType, dateAndTime) {
    if (!(user || eventName || eventName || dateAndTime)) {
      throw "All fields must be instanciated";
    }
    this.user = user;
    this.eventName = eventName;
    this.eventType = eventType;
    this.dateAndTime = dateAndTime;
  }

  get user() {
    return this.user;
  }

  /**
   * @param {User} user
   */
  set user(user) {
    //if (!user instanceof User) throw;
    this.user = user;
  }

  get eventName() {
    return this.eventName;
  }

  /**
   * @param {string} eventName
   */
  set eventName(eventName) {
    this.eventName = eventName;
  }

  get eventType() {
    return this.eventType;
  }

  /**
   * @param {string} eventType
   */
  set eventType(eventType) {
    this.eventType = eventType;
  }

  get dateAndTime() {
    return this.dateAndTime;
  }

  /**
   * @param {Date} dateAndTime
   */
  set dateAndTime(dateAndTime) {
    this.dateAndTime = dateAndTime;
  }
}
