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
    dealDayProducts: null,
    bestsellerProducts: null,
    categories: null,
  },
  mutations: {
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
          .then(res => state.bestsellerProducts = res.data.data)
          .catch(err => console.log(err))
    },
    getCategory({state}) {
      http.get('/section')
          .then(res => state.categories = res.data.data)
          .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
