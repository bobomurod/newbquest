<template>
    <div class="jumbotron">
  <h1 class="display-3">You logged out!</h1>
  <p class="lead">You press "Log out" button and here whats happend after this.</p>
  <hr class="my-4">
  <p>Look, if you want to log back again, just press the button below.</p>
  <p class="lead">
    <router-link
    class="btn btn-primary btn-lg" 
    :to="{ name: 'signup' }"
    role="button">Sign Up!</router-link>
  </p>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
