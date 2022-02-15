<template>
    <div>
        <log-in-comp/>
    </div>
</template>


<script>
// @ is an alias to /src
import LogInComp from '../components/LogInComp.vue';

export default {
  name: "LogIn",
  components: {
    LogInComp,
  },
};
</script>