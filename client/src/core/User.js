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
   */
  constructor(userName, password, email, firstName, lastName, description) {
    this.setUserName(userName);
    this.setPassword(password);
    this.setEmail(email);
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setDescription(description);
  }

  validUserName(username) {
    const userNameRegex = /^[A-Za-z0-9]+$/;
    if (!username.match(userNameRegex)) {
      throw "Username cant contain any special characters, only letters and numbers";
    }

    if (username.length < 5) {
      throw "Username must be longer than 4 characters";
    }
  }

  /**
   * Checks for valid email.
   * @param {string} email
   */
  validEmail(email) {
    const emailRegex2 = /^[A-Za-z.]+@[A-Za-z.]+\.[a-z]{2,3}$/;
    if (!email.match(emailRegex2)) {
      throw "Invalid email address";
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
  validPassword(password) {
    const oneLowerCase = /(?=.*[a-z])/;
    if (!password.match(oneLowerCase)) {
      throw "The password must contain at least 1 lowercase alphabetical character";
    }

    const oneUpperCase = /(?=.*[A-Z])/;
    if (!password.match(oneUpperCase)) {
      throw "The password must contain at least 1 uppercase alphabetical character";
    }

    const oneNumeric = /(?=.*[0-9])/;
    if (!password.match(oneNumeric)) {
      throw new Error("The password must contain at least 1 numeric character");
    }

    const noSpecialChRegex = /[^A-Za-z0-9]+/;
    if (password.match(noSpecialChRegex)) {
      throw "The password must not contain any special characters";
    }
    const l = 7;
    if (password.length < l) {
      throw "The password must be " + l + " characters or longer";
    }
  }

  validName(str) {
    const firstUpperRestLower = /^([A-Z][a-z]+ )*[A-Z][a-z]+$/;
    if (!str.match(firstUpperRestLower)) {
      throw "Name can only include letters and start with upper case";
    }
  }

  /**
   * @param {string} _userName
   */
  setUserName(_userName) {
    this.validUserName(_userName);
    this.userName = _userName;
  }

  /**
   * @param {string} _password
   */
  setPassword(_password) {
    this.validPassword(_password);
    this.password = hash(_password);
  }

  /**
   * @param {string} _email
   */
  setEmail(_email) {
    this.validEmail(_email);
    this.email = _email;
  }

  /**
   * @param {string} _firstName
   */
  setFirstName(_firstName) {
    this.validName(_firstName);
    this.firstName = _firstName;
  }

  /**
   * @param {string} _lastName
   */
  setLastName(_lastName) {
    this.validName(_lastName);
    this.lastName = _lastName;
  }

  /**
   * @param {string} _description
   */
  setDescription(_description) {
    this.description = _description;
  }
}
