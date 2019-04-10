<template>
    <section>
        <h1>Dashboard</h1>
        <!-- <h1 v-if="!user"> Requesting... </h1> -->
        <h1>Hello {{user.username}}</h1>
        <form action="">

        </form>
      <button
      class="btn btn-primary btn-lg"
      v-on:click="logout()"
      role="button"> Sign Out </button>
    </section>
</template>

<script>

const API_URL = 'http://localhost:5000/'

export default {
  name: 'Dashboard',
  data: ()=>({
    isLoading: true,
    user: null
  }),
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
  },
  mounted(){
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`
      }
    }).then(res => res.json())
      .then((result) => {
        console.log(result)
        this.user = result.user
      })
  },

};
</script>

<style>

</style>
