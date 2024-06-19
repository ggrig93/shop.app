import Vue from 'vue'
import Vuex from 'vuex'
import {http} from '@/api/http-common'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        product: null,
        brandId: null,
        products: null,
        colors: null,
        brands: null,
        sizes: null,
        tags: null,
        settings: null,
        dealDayProducts: null,
        popularProducts: null,
        categories: null,
        productBrands: [],
        categorySizes: [],
        subCategories: [],
        shopProducts: [],
        brandCategory: [],
        wishList: [],
        searchProducts: [],
        productColors: [],
        productTags: [],
        productSections: [],
        cartTotalPrice: 0,
        otherFilters: {
            search: '',
            by_price: '',
            page: 1,
            category: [],
            per_page: '',
        },
        loading: false,
        openMiniCartFromProduct: false
    },
    getters: {
        search: state => state.otherFilters.search,
        by_price: state => state.otherFilters.by_price,
        page: state => state.otherFilters.page,
        category: state => state.otherFilters.category,
        per_page: state => state.otherFilters.per_page,
        otherFilters: state => state.otherFilters,
        wishList: state => state.wishList,
        settings: state => state.settings,
        productBrands: state => state.productBrands,
        categorySizes: state => state.categorySizes,
        subCategories: state => state.subCategories,
        brands: state => state.brands,
        brandCategory: state => state.brandCategory,
        brandId: state => state.brandId,
        searchProducts: state => state.searchProducts,
        productColors: state => state.productColors,
        productTags: state => state.productTags,
        productSections: state => state.productSections,
    },
    mutations: {
        setShopProducts(state, value) {
            state.shopProducts = value
        },
        setBrandId(state, value) {
            state.brandId = value
        },
        setOpenMiniCartFromProduct(state, value) {
            state.openMiniCartFromProduct = value
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
        setProductBrands(state, value) {
            state.productBrands = value
        },
        setCategorySizes(state, value) {
          state.categorySizes = value
        },
        setSubCategories(state, value) {
            state.subCategories = value
        },
        setBrands(state, value) {
            state.brands = value
        },
        setBrandCategory(state, value) {
            state.brandCategory = value
        },
        setSearchProducts(state, value) {
            state.searchProducts = value
        },
        setProductColors(state, value) {
            state.productColors = value
        },
        setProductTags(state, value) {
            state.productTags = value
        },
        setProductSections(state, value) {
            state.productSections = value
        },
    },
    actions: {
        getProduct({state}, slug) {
            state.product = null
            http.get('/product/by-slug/' + slug)
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
        // getTopSlideProducts({state}) {
        //   http.get('/product/by-slide-group/top')
        //       .then(res => state.topSlideProducts = res.data.data)
        //       .catch(err => console.log(err))
        // },
        // getBottomSlideProducts({state}) {
        //   http.get('/product/by-slide-group/bottom')
        //       .then(res => state.bottomSlideProducts = res.data.data)
        //       .catch(err => console.log(err))
        // },
        // getBottomContainerProducts({state}) {
        //   http.get('/product/by-slide-group/bottom-container')
        //       .then(res => state.bottomContainerProducts = res.data.data)
        //       .catch(err => console.log(err))
        // },
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
            http.get('/setting')
                .then(res => {
                    res.data.data.map(item => {
                        state.settings = item
                    })
                    sessionStorage.settings = JSON.stringify(state.settings)
                })
                .catch(err => console.log(err))
        },

        getProductBrands({state}, ids) {
            let url = ids.length ? '?ids=' + ids : ''
            http.get('/product/brands' + url)
                .then(res => state.productBrands = res.data.data)
                .catch(err => console.log(err))
        },

        getProductSizes({state}, ids) {
            let url = ids.length ? '?ids=' + ids : ''
            http.get('/product/sizes' + url)
                .then(res => state.categorySizes = res.data.data)
                .catch(err => console.log(err))
        },
        getProductColors({state}, ids) {
            let url = ids.length ? '?ids=' + ids : ''
            http.get('/product/colors' + url)
                .then(res => state.productColors = res.data.data)
                .catch(err => console.log(err))
        },
        getProductTags({state}, ids) {
            let url = ids.length ? '?ids=' + ids : ''
            http.get('/product/tags' + url)
                .then(res => state.productTags = res.data.data)
                .catch(err => console.log(err))
        },
        getSubCategories({state}, id) {
            http.get('/category/' + id +'/subcategories')
                .then(res => state.subCategories = res.data.data)
                .catch(err => console.log(err))
        },
        getBrandCategory({state}, slug) {
            http.get('/brand/' + slug +'/category')
                .then(res => state.brandCategory = res.data.data)
                .catch(err => console.log(err))
        },
        getSearchProducts({state}, search) {
            http.get('/product/search?search=' + search)
                .then(res => state.searchProducts = res.data)
                .catch(err => console.log(err))
        },
        getProductSections({state}, ids) {
            let url = ids.length ? '?ids=' + ids : ''
            http.get('/product/sections' + url)
                .then(res => state.productSections = res.data.data)
                .catch(err => console.log(err))
        },
    },
    modules: {}
})
