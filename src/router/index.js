import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },
  {
    path: '/wishList',
    name: 'WishList',
    component: () => import('@/views/WishList')
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('@/views/ShoppingCart')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/views/Checkout')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/products')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/views/products/_productId'),
    props: true
  },
  {
    path: '*',
    component: () => import('@/views/error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
