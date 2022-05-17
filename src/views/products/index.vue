<template>
  <div class="main-content main-content-product left-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs />
        </div>
      </div>
      <div class="row">
        <div class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="site-main">
            <h3 class="custom_blog_title">
              Grid Products
            </h3>
            <div class="shop-top-control">
              <form class="select-item select-form">
                <span class="title">Sort</span>
                <select
                    v-model="per_page"
                    title="sort"
                    data-placeholder="Products/Page"
                    class="chosen-select"
                    @change="sortPerPage"
                >
                  <option value="2">2 Products/Page</option>
                  <option value="6">6 Products/Page</option>
                  <option value="10">10 Products/Page</option>
                </select>
              </form>
              <form class="filter-choice select-form">
                <span class="title">Sort by</span>
                <select
                    title="sort-by"
                    data-placeholder="Price: "
                    class="chosen-select"
                    v-model="by_price"
                    @change="sortByPrice"
                >
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </form>
            </div>
            <ul v-if="!loading"
                class="row list-products auto-clear equal-container"
                :class="layoutMode ? 'product-grid' : 'product-list'"
            >
              <li class="product-item"
                  :class="layoutMode
                  ? 'col-lg-4 col-md-6 col-sm-6 col-xs-6 col-ts-12 style-1'
                  : 'col-lg-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-ts-12 style-list'"
                  v-for="prod in products" :key="prod.id"
                  @click="$router.push({name: 'Product', params: {id: prod.id}})"
              >
                <ProductCart
                    :layout="layoutMode ? 'grid' : 'list'"
                    :product="prod"
                />
              </li>
            </ul>
            <div v-else class="loader"></div>
            <Pagination
              class="style3"
              :paginate="paginate"
              @pagechanged="onPageChange"
            />
          </div>
        </div>
        <div class="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Sidebar
              class="shop-sidebar"
              :categories="categories"
              :brands="brand"
              :sizes="sizes"
              :colors="color"
              :tags="tags"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import ProductCart from "@/components/products/ProductCart";
// import data from '@/customdata/products'
import Breadcrumbs from "@/components/Breadcrumbs";
import {mapMutations} from "vuex";
export default {
  name: "GridLeftSidebar",
  components: {Breadcrumbs, ProductCart, Pagination, Sidebar},
  data() {
    return {
      layoutMode: true,
      by_price: '',
      per_page: ''
      // categories: data.categories,
      // brand: data.brand,
      // size: data.size,
      // tags: data.tags,
      // color: data.color,
      // price: data.price
    }
  },
  computed: {
    paginate() {
      return this.$store.state.products?.meta
    },
    products() {
      return this.$store.state.products?.data
    },
    color() {
      return this.$store.state.colors
    },
    brand() {
      return this.$store.state.brands
    },
    categories() {
      return this.$store.state.categories
    },
    sizes() {
      return this.$store.state.sizes
    },
    tags() {
      return this.$store.state.tags
    },
    loading() {
      return this.$store.state.loading
    }
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(val) {
        if(val['filter[page]']) {
          this.setPage(val['filter[page]'])
        }
        if(val['filter[by_price]']) {
          this.by_price = val['filter[by_price]']
        }
        if(val['filter[per_page]']) {
          this.per_page = val['filter[per_page]']
        } else {
          this.by_price = ""
        }
      }
    },
  },
  created() {
    this.$store.dispatch('getColors')
    this.$store.dispatch('getBrands')
    this.$store.dispatch('getSizes')
    this.$store.dispatch('getTags')
  },
  beforeDestroy() {
    this.setSearch('')
    this.setByPrice('')
    this.setCategory([])
    this.setPage(1)
    this.setPerPage('')
  },
  methods: {
    ...mapMutations(["setByPrice", "setSearch", "setPage", "setCategory", "setPerPage"]),
    sortByPrice() {
      this.setByPrice(this.by_price)
    },
    onPageChange(page) {
      this.setPage(page)
      // this.$router.replace({name: this.$route.name, query: {page}})
      // const offset = (page - 1) * this.limit
      // this.$store.dispatch('getPerPageProducts', offset)
    },
    sortPerPage() {
      this.setPerPage(this.per_page)
    }
  }
}
</script>

<style scoped>

</style>