import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue';
import Projetos from './components/Projetos.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/projetos', component: Projetos }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
