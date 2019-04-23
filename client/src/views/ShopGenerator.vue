<template>
    <div>
        <h1>Generating shoppp...</h1>
    <input type="text"></input>
    <button v-on:click="generate" >Generate shop</button>
    </div>
</template>

<script>
export default {
    name: 'Generator',
    data: () => ({
        shopName: null,
    }),
    methods: {
        generate(){
            console.log("Generating shop " + this.shopName)
        }
    }
}
</script>

<style>

</style>
