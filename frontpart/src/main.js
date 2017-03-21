
import Vue from 'vue'
import App from './App'
import '@/css/index.scss'
import VueRouter from 'vue-router'
import routes from './routes/index'
import store from './vuex/Stores'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI);
// Vue.use(VueRouter);

Vue.config.debug = true;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  router:router,
  components: { App }
});

