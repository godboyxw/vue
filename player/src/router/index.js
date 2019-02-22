import Vue from 'vue'
import Router from 'vue-router'
import Collect from '@/components/Collect'
import collections from '@/components/collections'
import mine from '@/components/mine'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Collect',
    component: Collect
  },
  {
    path: '/collections',
    name: 'collections',
    component: collections
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/user',
    name: 'user',
    component: user
  }
  ]
})
