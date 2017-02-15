
import Vue from 'vue'
import App from './App'
import './static/css/reset.scss'
import vuerouter from 'vue-router'
import routes from './routes/index'
import store from './vuex/Stores'





new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
