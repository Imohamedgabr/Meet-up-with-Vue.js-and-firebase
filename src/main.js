import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert',AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created(){
  	firebase.initializeApp({
  	apiKey: 'AIzaSyBsb3DdXdA6P100WUECTSlixlxwIRaiI8A',
    authDomain: 'devmeetup-ff1be.firebaseapp.com',
    databaseURL: 'https://devmeetup-ff1be.firebaseio.com',
    projectId: 'devmeetup-ff1be',
    storageBucket: 'devmeetup-ff1be.appspot.com',
  	})
  }
})
