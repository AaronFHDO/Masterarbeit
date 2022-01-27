import Vue from 'vue'
import MainHome from '../components/Home.vue'
import MainOverview from '../components/KyberOverview.vue'
import MainTest from '../components/Test.vue'
import MainKyberInt from '../components/KyberInt.vue'
import MainKyberPol from '../components/KyberPol.vue'
import Settings from '../components/Settings.vue'
import {IonicVueRouter} from "@ionic/vue"

Vue.use(IonicVueRouter);

// import VueRouter from 'vue-router'
// import App from '../views/Menu.vue'
// Vue.use(VueRouter)

/*const router = new VueRouter({
  routes: [
  {
    path: '/',
    name: 'App',
    component: App,
    children:[
      { path: '/RLWE', name: MainRLWE, component: import("@/components/RLWE.vue")},
      { path: '/Test', component: MainTest}
    ] 
  }
  ]
});*/
const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    { path: '/', component: MainHome,
      meta: { title: 'Kyber Calculator'}},
    { path: '/Test', component: MainTest,
    meta: { title: 'Kyber Calculator'} },
    { path: '/KyberOverview', component: MainOverview,
    meta: { title: 'Kyber Calculator'} },
    { path: '/KyberInt', component: MainKyberInt,
    meta: { title: 'Kyber Calculator'} },
    { path: '/KyberPol', component: MainKyberPol,
    meta: { title: 'Kyber Calculator'} },
    { path: '/Settings', component: Settings,
    meta: { title: 'Kyber Calculator'} },
    
  ]
})
export default router