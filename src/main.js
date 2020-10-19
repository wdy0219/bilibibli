import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'; 
import 'vant/lib/index.css';
import { Toast } from 'vant'; // 轻提示组件

Vue.prototype.$msg = Toast
Vue.use(Vant);

import http from '../http'
Vue.prototype.$http = http 

import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
