<template>
    <div>
        <h1>Generating shoppp...</h1>
    <input type="text" v-model="shopName" ></input>
    <button v-on:click="generate" >Generate shop</button>
    </div>
</template>

<script>

const API_URl = 'http://localhost:5000/shops/'

export default {
    name: 'Generator',
    data: () => ({
        shopName: null,
    }),
    methods: {
        generate(){
            fetch(API_URl + this.shopName)
                .then(raw_result => raw_result.json())
                .then(result => {
                    console.log(result)
                })
        }
    }
}
</script>

<style>

</style>
