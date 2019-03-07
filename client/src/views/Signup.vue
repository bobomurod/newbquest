<template>
    <div>
    <h1>Signup</h1>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form class="w-50 p-3" @submit.prevent="signup"> 
  <div class="form-group">
    <label for="username">Username</label>
    <input
    v-model="user.username" 
    type="text" 
    class="form-control" 
    id="username" 
    aria-describedby="usernameHelp"
    placeholder="Enter username" required>
    <small id="usernameHelp" class="form-text text-muted">Username must be at least longer than 3 and shorter than 30 characters.</small>
  </div>

<div class="form-row">

    <div class="form-group col-md-6">
    <label for="password">Password</label>
    <input 
    v-model="user.password"
    type="password" 
    class="form-control" 
    id="password" 
    placeholder="Password" required>
    <small id="passwordHelp" class="form-text text-muted">
      Password must be longer than 8 characters.
    </small>
    </div>
  

    <div class="form-group col-md-6">
    <label for="confirmPassword">Confirm password</label>
    <input 
    v-model="user.confirmPassword"
    type="password" 
    class="form-control" 
    id="confirmPassword" 
    placeholder="Password" required>
    <small id="confirmPasswordHelp" class="form-text text-muted">
      Confirm your password.
    </small>
   </div>
  
</div>


  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Save me on this browser</label>
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Signup</button>
</form>
      <router-link
      class="btn btn-primary btn-lg" 
      :to="{name: 'signout'}" 
      role="button"> Sign Out </router-link>

    </div>
</template>

<script>
export default {
     name: 'Signup',
     data: () => ({
       errorMessage: '',
       user: {
         username: '',
         password: '',
         confirmPassword: '',
       }
     }),
     methods: {
       signup() {
          if (this.validUser()) {
            // send data to server ...
          }         
       },
       validUser() {
          if (this.user.password !== this.user.confirmPassword) {
            this.errorMessage = 'Passwords must match';
            return false;
          }
       },
     },
};
</script>

<style>

</style>
