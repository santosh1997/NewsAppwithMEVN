import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
