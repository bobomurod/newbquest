import Vue from 'vue';
import Vuetify from 'vuetify'
import 'bootswatch/dist/litera/bootstrap.css';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
