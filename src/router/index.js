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
    path: '/authentication',
    name: 'Authentication',
    component: () => import('@/views/LoginRegister')
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
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/products')
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('@/views/products/_productId')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/views/blogs')
  },
  {
    path: '/blogs/:id',
    name: 'Blog',
    component: () => import('@/views/blogs/_blogId')
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
