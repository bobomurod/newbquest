<template>
    <div>
        <h1>Generating shoppp...</h1>
    <input type="text"></input>
    <button v-on:click="generate" >hello</button>
    </div>
</template>

<script>
export default {
    name: 'Generator',
    methods: {
        generate(){
            console.log("Generating shop from db")
        }
    }
}
</script>

<style>

</style>
