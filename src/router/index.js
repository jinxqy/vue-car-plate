import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CarPlate from '@/pages/carplate'
import Menu from '@/pages/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/CarPlate',
      name: 'CarPlate',
      component: CarPlate
    }
  ]
})
