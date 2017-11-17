import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './Pages/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({routes})

const app = new Vue({
  el : '#root',
  router,
  render: h => h(App)
})