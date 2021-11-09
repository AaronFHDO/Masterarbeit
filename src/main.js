import Vue from 'vue';
import router from './router';
import store from './store';
import Ionic from '@ionic/vue'
import App from './views/Menu.vue'
import './registerServiceWorker'
import VueMathjax from 'vue-mathjax'
import VueCompositionAPI from '@vue/composition-api'
import Vuelidate from 'vuelidate';



Vue.use(Ionic);
Vue.use(VueMathjax);
Vue.use(Vuelidate);
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
