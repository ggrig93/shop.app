import Vue from 'vue'
import Vuex from 'vuex'
import { http } from '@/api/http-common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: null,
    products: null,
    colors: null,
    brands: null,
    sizes: null,
    dealDayProducts: null,
    popularProducts: null,
    categories: null,
    topSlideProducts: [],
    bottomSlideProducts: [],
    bottomContainerProducts: [],
    shopProductIds: [],
    cartProducts: [],
    cartTotalPrice: 0,
  },
  mutations: {
    setShopProductIds(state, value) {
      state.shopProductIds = value
    }
  },
  actions: {
    getProduct({state}, id) {
      http.get('/product/' + id)
        .then(res => state.product = res.data.data)
        .catch(err => console.log(err))
    },
    getAllProducts({state}) {
      http.get('/product')
          .then(res => state.products = res.data)
          .catch(err => console.log(err))
    },
    getPerPageProducts({state}, offset) {
      http.get(`/product`, {params: {offset}})
        .then(res => {
          state.products = res.data
        })
        .catch(err => console.log(err))
    },
    getTopSlideProducts({state}) {
      http.get('/product/by-slide-group/top')
          .then(res => state.topSlideProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getBottomSlideProducts({state}) {
      http.get('/product/by-slide-group/bottom')
          .then(res => state.bottomSlideProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getBottomContainerProducts({state}) {
      http.get('/product/by-slide-group/bottom-container')
          .then(res => state.bottomContainerProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getColors({state}) {
      http.get('/color')
          .then(res => state.colors = res.data.data)
          .catch(err => console.log(err))
    },
    getBrands({state}) {
      http.get('/brand')
          .then(res => state.brands = res.data.data)
          .catch(err => console.log(err))
    },
    getDealDayProducts({state}) {
      http.get('/deal-day')
          .then(res => state.dealDayProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getBestsellers({state}) {
      http.get('/product/populars-by/')
          .then(res => state.popularProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getCategories({state}) {
      http.get('/section')
          .then(res => state.categories = res.data.data)
          .catch(err => console.log(err))
    },
    getSizes({state}) {
      http.get('/size')
          .then(res => state.sizes = res.data.data)
          .catch(err => console.log(err))
    },
    getCartProducts({state}) {
      const productIds = JSON.parse(localStorage.getItem("shopProductIds")) ? JSON.parse(localStorage.getItem("shopProductIds")) : []
      http.get(`/product/by-ids`, {params: {product_ids: productIds}})
          .then(res => {
            state.cartProducts = res.data.data
            let totalPrice = 0
            state.cartProducts.forEach(item => totalPrice += +item.price)
            state.cartTotalPrice = totalPrice
          })
          .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
