<template>
  <h1> Logg inn eller registrer deg! </h1>
    Username:
    <input type="text" name="Brukernavn" id="Username" placeholder="Write your username here"><br>
    Password:
    <input type="text" name="Passord" id="Password" placeholder="Enter your password here"><br><br>
  <button>Login</button>
  
<br>
<br>
 
    First name:
  <input type="text" name="First Name" id="FirstName" placeholder="Enter your first name here"><br>
  Surname:
  <input type="text" name="Surname" id="Surname" placeholder="Enter your surname here"><br>
  Birthday:
  <input type="date" name="Birthday" id="Birthday"><br><br>
  <button>Sign Up</button><br>
 
  


</template>

<script>
export default {
    name: "SignUpComp"

}
</script>

<style>

</style>