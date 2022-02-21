/*
import SalesPost from "../../src/core/SalesPost";

//Valid fields to use for testing
const validUser = "";
const validEventName = "";
const validEventType = "";
const validDateAndTime = "";
const validPrice = 400;

describe("Test SalesPost class", () => {
  let testSalesPost;

  beforeEach(() => {
    testSalesPost = new SalesPost(
      validUser,
      validEventName,
      validEventType,
      validDateAndTime,
      validPrice
    );
  });

  //User test
  const newValidUser = "";
  it("Test the valid user: " + newValidUser, () => {
    expect(() => testSalesPost.setUser(newValidUser)).not.toThrow();
  });

  const invalidUsers = ["", ""];
  invalidUsers.forEach((user) => {
    it("Test the invalid user: " + user, () => {
      expect(() => testSalesPost.setUser(user)).toThrow();
    });
  });

  //EventName test
  const newValidEventName = "";
  it("Test the valid event name: " + newValidEventName, () => {
    expect(() => testSalesPost.setEventName(newValidEventName)).not.toThrow();
  });

  const invalidEventNames = ["", ""];
  invalidEventNames.forEach((eventName) => {
    it("Test the invalid event name: " + eventName, () => {
      expect(() => testSalesPost.setEventName(eventName)).toThrow();
    });
  });

  //EventType test
  const newValidEventType = "";
  it("Test the valid event type: " + newValidEventType, () => {
    expect(() => testSalesPost.setEventType(newValidEventType)).not.toThrow();
  });

  const invalidEventTypes = ["", ""];
  invalidEventTypes.forEach((eventType) => {
    it("Test the invalid event type: " + eventType, () => {
      expect(() => testSalesPost.setEventType(eventType)).toThrow();
    });
  });

  //DateAndTime test
  const newValidDateAndTime = "";
  it("Test the valid date and time: " + newValidDateAndTime, () => {
    expect(() =>
      testSalesPost.setDateAndTime(newValidDateAndTime)
    ).not.toThrow();
  });

  const invalidDateAndTimes = ["", ""];
  invalidDateAndTimes.forEach((dateAndTime) => {
    it("Test the invalid date and time: " + dateAndTime, () => {
      expect(() => testSalesPost.setDateAndTime(dateAndTime)).toThrow();
    });
  });

  //Price test
  const newValidPrice = 500;
  it("Test the valid date and time: " + newValidPrice, () => {
    expect(() => testSalesPost.setPrice(newValidPrice)).not.toThrow();
  });

  const invalidPrices = [0, -200];
  invalidPrices.forEach((price) => {
    it("Test the invalid date and time: " + price, () => {
      expect(() => testSalesPost.setPrice(price)).toThrow();
    });
  });
});
*/
