import Vue from 'vue'
import Router from 'vue-router'
import LummoShop from '@/components/LummoShop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LummoShop',
      component: LummoShop
    }
  ]
})
