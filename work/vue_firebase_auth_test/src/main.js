// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBUkFou3RV68zcseHAw3D-kxBwv3euXnbo",
  authDomain: "fir-vue-test1.firebaseapp.com",
  databaseURL: "https://fir-vue-test1.firebaseio.com",
  projectId: "fir-vue-test1",
  storageBucket: "fir-vue-test1.appspot.com",
  messagingSenderId: "626405594575"
};
firebase.initializeApp(config);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
