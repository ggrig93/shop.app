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
    tags: null,
    settings: null,
    dealDayProducts: null,
    popularProducts: null,
    categories: null,
    topSlideProducts: [],
    bottomSlideProducts: [],
    bottomContainerProducts: [],
    shopProducts: [],
    wishList: [],
    cartTotalPrice: 0,
    otherFilters: {
      search: '',
      by_price: '',
      page: 1,
      category: [],
      per_page: '',
    },
    loading: false
  },
  getters: {
    search: state => state.otherFilters.search,
    by_price: state => state.otherFilters.by_price,
    page: state => state.otherFilters.page,
    category: state => state.otherFilters.category,
    per_page: state => state.otherFilters.per_page,
    otherFilters: state => state.otherFilters,
    wishList: state => state.wishList,
    settings: state => state.settings
  },
  mutations: {
    setShopProducts(state, value) {
      state.shopProducts = value
    },
    setWishList(state, value) {
      state.wishList = value
    },
    setSearch(state, value) {
      state.otherFilters.search = value
    },
    setByPrice(state, value) {
      state.otherFilters.by_price = value
    },
    setPage(state, value) {
      state.otherFilters.page = value
    },
    setPerPage(state, value) {
      state.otherFilters.per_page = value
    },
    setCategory(state, value) {
      state.otherFilters.category = value
    },
    setLoading(state, value) {
      state.loading = value
    },
  },
  actions: {
    getProduct({state}, id) {
      state.product = null
      http.get('/product/' + id)
        .then(res => state.product = res.data.data)
        .catch(err => console.log(err))
    },
    getAllProducts({state}) {
      http.get('/product')
          .then(res => state.products = res.data)
          .catch(err => console.log(err))
    },
    getPerPageProducts({state}, page) {
      http.get(`/product`, {params: {page}})
        .then(res => {
          state.products = res.data
        })
        .catch(err => console.log(err))
    },
    getFilteredProducts({state}, filter) {
      state.loading = true
      state.products = null
      http.get(`/product`, {
        params: {
          ...filter
        },
      }).then(res => {
          state.products = res.data
        })
        .catch(err => console.log(err))
        .finally(() => {
          state.loading = false
        })
    },
    getTopSlideProducts({state}) {
      http.get('/product/by-slide-group/top')
          .then(res => state.topSlideProducts = res.data.data)
          .catch(err => console.log(err))
      console.log(state.topSlideProducts);
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
    getTags({state}) {
      http.get('/tag')
          .then(res => state.tags = res.data.data)
          .catch(err => console.log(err))
    },
    getShopProducts({state}) {
      state.shopProducts = JSON.parse(localStorage.getItem("shopProducts")) ? JSON.parse(localStorage.getItem("shopProducts")) : []

      let totalPrice = 0
      state.shopProducts.forEach(item => totalPrice += (+item.price * item.count))
      state.cartTotalPrice = totalPrice
    },
    getWishList({commit}) {
      const wishList =
        JSON.parse(localStorage.getItem("wishList")) ?
          JSON.parse(localStorage.getItem("wishList")) : []
      commit('setWishList', wishList)
    },
    getPageSettings({state}) {
      if (!sessionStorage.settings){
        http.get('/settings')
            .then(res => {
              state.settings = res.data
              sessionStorage.settings = JSON.stringify(state.settings)
            })
            .catch(err => console.log(err))
      }else{
        state.settings = JSON.parse(sessionStorage.settings)
      }
    }
  },
  modules: {
  }
})
