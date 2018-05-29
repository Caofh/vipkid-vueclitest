import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import V1 from '@/components/Viewport1'
import V2 from '@/components/Viewport2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewport1',
      name: 'V1',
      component: V1
    },
    {
      path: '/viewport2',
      name: 'V2',
      component: V2
    },
  ]
})
