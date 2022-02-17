<template>
  <div class="SignUpForm">
    <h1>Sign up to your new account</h1>
    <form>
      <label for="FirstName">First name:</label><br />
      <input type="text" name="First Name" id="FirstName" required /><br />
      <label for="Surname"> Surname:</label><br />
      <input type="text" name="Surname" id="Surname" required /><br />
      <label for="email" name="email"> Email:</label><br />
      <input type="email" name="email" id="email" required /><br />
      <label for="Birthday">Birthday:</label><br />
      <input type="date" name="Birthday" id="Birthday" required /><br />
      <label for="Password1">Password:</label><br />
      <input type="password" name="Password1" id="Password1" required /><br />
      <label for="Password2">Confirm password:</label><br />
      <input type="password" name="Password2" id="Password2" required />
      <br /><br />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpComp",
};
</script>

<style></style>
