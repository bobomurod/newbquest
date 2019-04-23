<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

const API_URL = 'http://localhost:5000/shops/'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data: ()=> ({
    host: window.location.host.split('.'),
    shop: {
      name: null,
      title: null,
      about: null,
      products: [],
    }
      }),
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this.host[0])
    fetch(API_URL + this.host[0])
      .then(raw_result => raw_result.json())
      .then(result => console.log(result))
  }
};
</script>
