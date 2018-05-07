import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

import store from './store/index.js'
import router from './router'

Vue.use(Vuex)

var vm=new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
