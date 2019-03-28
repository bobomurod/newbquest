<template>
    <div>
    <h1>Signup</h1>

    <div v-if="signingUp">
      <img src="../assets/pacman_loading.svg" >
    </div>

    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    
    <form v-if="!signingUp" class="w-50 p-3" @submit.prevent="signup"> 
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

import Joi from 'joi';

import Pacman from '../assets/pacman_loading.svg'

const SIGNUP_URL = 'http://localhost:5000/auth/signup';

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(2).max(30).required(),
    // username: Joi.string().alphanum().min(2).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    password: Joi.string().trim().min(3).max(6).required(),
    confirmPassword: Joi.string().trim().min(3).max(6).required()
});

export default {
     name: 'Signup',

     data: () => ({
       signingUp: false,
       errorMessage: '',
       user: {
         username: '',
         password: '',
         confirmPassword: '',
       }
     }),

     watch: {
       user: {
         handler() {
           this.errorMessage = '';
         },
         deep: true,
       }
     },

     methods: {
       signup() {
          this.errorMessage = '';
          if (this.validUser()) {
            const body = {
              username: this.user.username,
              password: this.user.password,
            };
              this.signingUp = true;
              fetch(SIGNUP_URL, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'content-type': 'application/json',
                }
              }).then(response => {
                if (response.status === 200) {
                  //console.log("response")
                  return response.json();
                }
                return response.json().then(error => {
                  throw new Error(error.message);
                })
              }).then(user => {
                localStorage.token = user.token
                setTimeout(() => {
                this.signingUp = true;
                console.log(user);
                this.$router.push('/login')
                }, 1000);
              }).catch(error => {
                setTimeout(() => {
                this.signingUp = false;
                this.errorMessage = error.message;
                console.log(error);
                }, 1000);
              })
          }         
       },

       validUser() {
          if (this.user.password !== this.user.confirmPassword) {
            this.errorMessage = 'Passwords must match';
            return false;
          }
          const result = Joi.validate(this.user, schema)
          if (result.error === null) {
            return true;
          }
          if (result.error.message.includes('username')) {
            this.errorMessage = 'Username is invalid :('
          } else {
            this.errorMessage = 'Password is invalid';
          }
          console.log(result.error)
            this.errorMessage = "Password must be longer than 8 characters and contain alphanumeric value. Please, be sure to input password that match with pattern: /(^[a-zA-Z0-9_+$)]/";
          return false

       },
     },
};
</script>

<style>

</style>
