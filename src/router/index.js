import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from '../views/Menu.vue'
import MainRLWE from '../components/RLWE.vue'
import MainTest from '../components/Test.vue'
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
    { path: '/RLWE', name: MainRLWE, component: MainRLWE },
    { path: '/Test', name: MainTest, component: MainTest }
  ]
})
export default router