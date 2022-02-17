<template>
<div class="SignUpForm">
 <h1> Sign up to your new account </h1>
 <form>
  <label for="FirstName">First name:</label><br>
  <input type="text" name="First Name" id="FirstName" placeholder="Enter your first name here"><br>
  <label for="Surname"> Surname:</label><br>
  <input type="text" name="Surname" id="Surname" placeholder="Enter your surname here"><br>
  <label for="Birthday">Birthday:</label><br>
  <input type="date" name="Birthday" id="Birthday"><br>
  <label for="Password1">Password:</label><br>
  <input type="password" name="Password1" id="Password1"><br>
  <label for="Password2">Confirm password:</label><br>
  <input type="password" name="Password2" id="Password2">
  <br><br>
  <input type="submit" value="Register">
</form>
 


</div>
</template>

<script>
export default {
    name: "SignUpComp"

}
</script>

<style>

</style>