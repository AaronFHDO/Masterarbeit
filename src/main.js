import Vue from 'vue';
import router from './router';
import store from './store';
import Ionic from '@ionic/vue'
import App from './views/Menu.vue'

Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
