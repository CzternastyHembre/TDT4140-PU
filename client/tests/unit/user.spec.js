import User from "../../src/core/User";

//Valid feilds tu use for testing
const validUserName = "MattisHembre";
const validPasword = "Axxxxxx8";
const validEmail = "mattis.hembre@gmail.com";
const validFirstName = "Mattis";
const validLastName = "Hembre";
const validDesription = "lorem";

describe("Test User class", () => {
  let testUser;

  beforeEach(() => {
    testUser = new User(
      validUserName,
      validPasword,
      validEmail,
      validFirstName,
      validLastName,
      validDesription
    );
  });

  //Password tests
  const newValidPassword = "Ab123456";
  it("Test the valid password: " + newValidPassword, () => {
    expect(() => testUser.setPassword(newValidPassword)).not.toThrow();
  });

  const invalidPasswords = [
    "nouppercase1",
    "NOLOWERCASE1",
    "NOnumbers",
    "Shor0",
  ];
  invalidPasswords.forEach((password) => {
    it("Test the invalid password: " + password, () => {
      expect(() => testUser.setPassword(password)).toThrow();
    });
  });

  //Email tests
  const newValidEmail = "stian.mattis@gmail.com";
  it("Test the valid email: " + newValidEmail, () => {
    expect(() => testUser.setEmail(newValidEmail)).not.toThrow();
  });

  const invalidEmails = [
    "nolandcode@gmail.",
    "@gmail.com",
    "mattis@.com",
    "noAtInmailgmail.com",
  ];
  invalidEmails.forEach((email) => {
    it("Test the invalid email: " + email, () => {
      expect(() => testUser.setEmail(email)).toThrow();
    });
  });

  //All Name tests:

  //First name
  const newValidFirstName = "Jakob";
  it("Test the valid first name: " + newValidFirstName, () => {
    expect(() => testUser.setFirstName(newValidFirstName)).not.toThrow();
  });

  const invalidFirstNames = ["jakob", "jaKob", "J"];
  invalidFirstNames.forEach((name) => {
    it("Test the invalid first name: " + name, () => {
      expect(() => testUser.setFirstName(name)).toThrow();
    });
  });

  //Last name
  const newValidLastName = "Hjelseth";
  it("Test the valid last name: " + newValidLastName, () => {
    expect(() => testUser.setLastName(newValidLastName)).not.toThrow();
  });

  const invalidLastNames = ["hjelseth", "Hjel seth", "hjelSeth", "H"];
  invalidLastNames.forEach((name) => {
    it("Test the invalid last name: " + name, () => {
      expect(() => testUser.setLastName(name)).toThrow();
    });
  });

  //Username
  const newValidUsername = "JakobHjelseth";
  it("Test the valid username: " + newValidUsername, () => {
    expect(() => testUser.setUserName(newValidUsername)).not.toThrow();
  });

  const invalidUsernames = ["Shor", "Ja kob", "j%&akob"];
  invalidUsernames.forEach((name) => {
    it("Test the invalid username: " + name, () => {
      expect(() => testUser.setUserName(name)).toThrow();
    });
  });
});
