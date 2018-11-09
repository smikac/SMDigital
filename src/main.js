import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './../node_modules/bulma/css/bulma.css'

import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
