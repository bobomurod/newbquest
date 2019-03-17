<template>
    <section>
        <h1>Dashboard</h1>
        <form action="">

        </form>
      <button 
      class="btn btn-primary btn-lg" 
      v-on:click="logout()" 
      role="button"> Sign Out </button>
    </section>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push('/')
        }
    }
    
}
</script>

<style>

</style>
