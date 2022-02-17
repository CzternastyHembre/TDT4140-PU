<template>
<div>
<h1>Log in</h1>
    <form>
      <label for="Email address">Email adress:</label><br />
      <input
        type="text"
        name="Email address"
        id="EmailAddress"
        required
      /><br />
      <label for="Password">Password:</label><br />
      <input type="password" name="Password" id="Password" required /><br />
      <br /><br />
      <input type="submit" value="LogIn" />
    </form>
  
<br>
<br>


</div>
</template>

<script>
export default {
    name: "LogInComp"

}
</script>

<style>

</style>