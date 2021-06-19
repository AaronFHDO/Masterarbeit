import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from '../views/Menu.vue'
import MainHome from '../components/Home.vue'
import MainRLWE from '../components/RLWE.vue'
import MainTest from '../components/Test.vue'
import MainKyberInt from '../components/KyberInt.vue'
import Settings from '../components/Settings.vue'
import {IonicVueRouter} from "@ionic/vue"


// Vue.use(VueRouter)
Vue.use(IonicVueRouter);

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
    { path: '/', /*name: MainHome,*/ component: MainHome,
      meta: { title: 'Kyber Calculator'}
    },
    { path: '/Test', /*name: MainTest,*/ component: MainTest,
    meta: { title: 'Kyber Calculator'} },
    { path: '/RLWE', /*name: MainRLWE,*/ component: MainRLWE,
    meta: { title: 'Kyber Calculator'} },
    { path: '/KyberInt', /*name: MainNewHope,*/ component: MainKyberInt,
    meta: { title: 'Kyber Calculator'} },
    { path: '/Settings', /*name: MainTest,*/ component: Settings,
    meta: { title: 'Kyber Calculator'} },
    
  ]
})
export default router