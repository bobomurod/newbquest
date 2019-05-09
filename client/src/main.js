import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import 'bootswatch/dist/litera/bootstrap.css';
import '../node_modules/vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdiSvg',
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
