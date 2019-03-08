<template>
  <div class="home text-center">
    <div class="jumbotron">
  <h1 class="display-3">Auth for MIDO !</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>We try our best make today better than yesterday.</p>
  <p class="lead">
    <router-link
      class="btn btn-primary btn-lg" 
      :to="{name: 'signup'}" 
      role="button"> Sign Up! </router-link>
    <router-link
      class="btn btn-primary btn-lg" 
      :to="{name: 'createpage'}" 
      role="button"> Create page </router-link>
    
  </p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
};
</script>
