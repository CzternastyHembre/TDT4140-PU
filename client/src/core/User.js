import hash from "./Hashing";
export default class User {
  //TODO Profile picture
  /**
   * @constructs User
   * @param {string} userName
   * @param {string} password
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} description
   * @param {number} reportCount
   */
  constructor(userName, password, email, firstName, lastName, description) {
    this.setUserName(userName);
    this.setPassword(password);
    this.setEmail(email);
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setDescription(description);
  }

  static validUserName(username) {
    const userNameRegex = /^[A-Za-z0-9]+$/;
    if (!username.match(userNameRegex)) {
      throw new Error(
        "Username cant contain any special characters, only letters and numbers"
      );
    }

    if (username.length < 5) {
      throw new Error("Username must be longer than 4 characters");
    }
  }

  /**
   * Checks for valid email.
   * @param {string} email
   */
  static validEmail(email) {
    const emailRegex2 = /^[A-Za-z.]+@[A-Za-z.]+\.[a-z]{2,3}$/;
    if (!email.match(emailRegex2)) {
      throw new Error("Invalid email address");
    }
  }

  /**
   * Validating password with these criteria:
   *  --Only numbers and letters.
   *  --At least 1 number, 1 upper and 1 lower character.
   *  --No special characters.
   *  --At leat 8 characters long.
   * @param {string} password
   */
  static validPassword(password) {
    const oneLowerCase = /(?=.*[a-z])/;
    if (!password.match(oneLowerCase)) {
      throw new Error(
        "The password must contain at least 1 lowercase alphabetical character"
      );
    }

    const oneUpperCase = /(?=.*[A-Z])/;
    if (!password.match(oneUpperCase)) {
      throw new Error(
        "The password must contain at least 1 uppercase alphabetical character"
      );
    }

    const oneNumeric = /(?=.*[0-9])/;
    if (!password.match(oneNumeric)) {
      throw new Error("The password must contain at least 1 numeric character");
    }

    const noSpecialChRegex = /[^A-Za-z0-9]+/;
    if (password.match(noSpecialChRegex)) {
      throw new Error("The password must not contain any special characters");
    }
    const l = 7;
    if (password.length < l) {
      throw new Error("The password must be " + l + " characters or longer");
    }
  }

  static validName(str) {
    const firstUpperRestLower = /^([A-Z][a-z]+ )*[A-Z][a-z]+$/;
    if (!str.match(firstUpperRestLower)) {
      throw new Error(
        "Name can only include letters and start with upper case"
      );
    }
  }

  /**
   * @param {string} _userName
   */
  setUserName(_userName) {
    User.validUserName(_userName);
    this.userName = _userName;
  }

  /**
   * @param {string} _password
   */
  setPassword(_password) {
    User.validPassword(_password);
    this.password = hash(_password);
  }

  /**
   * @param {string} _email
   */
  setEmail(_email) {
    User.validEmail(_email);
    this.email = _email;
  }

  /**
   * @param {string} _firstName
   */
  setFirstName(_firstName) {
    User.validName(_firstName);
    this.firstName = _firstName;
  }

  /**
   * @param {string} _lastName
   */
  setLastName(_lastName) {
    User.validName(_lastName);
    this.lastName = _lastName;
  }

  /**
   * @param {string} _description
   */
  setDescription(_description) {
    this.description = _description;
  }

  updateUser(userInfo) {
    this.userName = userInfo.userName;
    this.email = userInfo.email;
    this.firstName = userInfo.firstName;
    this.lastName = userInfo.lastName;
    this.description = userInfo.description;
  }
}
