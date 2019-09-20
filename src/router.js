import Vue from 'vue'
import Router from 'vue-router'
import DaiBan from './views/daiban.vue'
import YiBan from './views/yiban.vue'
import GuanZhu from './views/guanzhu.vue'
import Detail from './views/detail.vue'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/h/db',
      children: [{
        path: '/',
        name: 'daiban',
        component: DaiBan
      },
      {
        path: '/h/yb',
        name: 'yiban',
        component: YiBan
      },
      {
        path: '/h/gz',
        name: 'guanzhu',
        component: GuanZhu
      }]
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
