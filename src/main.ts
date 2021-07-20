import Vue from 'vue';
import router from './router';
import store from './store';
import Ionic from '@ionic/vue'
import App from './views/Menu.vue'
import './registerServiceWorker'
import VueMathjax from '../node_modules/vue-mathjax'
//import VueMathjax from "vue-mathjax";


Vue.use(VueMathjax)
Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
