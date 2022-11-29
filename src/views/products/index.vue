<template>
  <div class="main-content main-content-product left-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 products-header">
          <Breadcrumbs />
          <div v-if="isMobile" class="sort-filter_wrap">
            <div class="sort-btn" @click="toggleSort" :style="{'color': settings ? settings.main_color : 'white'}">
              <svg v-if="showSort" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
                <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
                <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
              </svg>
            </div>
            <div class="filter-btn flex-center" @click="toggleFilter">
              <i class="fa fa-filter" aria-hidden="true" :style="{'color': settings ? settings.main_color : 'white', 'font-size':'22px'}"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row products-wrapper">
        <div class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div v-if="products && !products.length">Հարցման արդյունքում ոչինչ չի գտնվել</div>
          <div v-else class="site-main">
            <div v-show="showSort || !isMobile" class="shop-top-control">
              <form class="select-item select-form">
                <div class="title">Ըստ քանակի</div>
                <select
                    v-model="per_page"
                    title="sort"
                    data-placeholder="Products/Page"
                    class="chosen-select"
                    @change="sortPerPage"
                >
                  <option value="6">6 ապրանք/էջ</option>
                  <option value="9">9 ապրանք/էջ</option>
                  <option value="12">12 ապրանք/էջ</option>
                </select>
              </form>
              <form class="select-item select-form">
                <div class="title price-title">Ըստ գնի</div>
                <select
                    title="sort-by"
                    data-placeholder="Price: "
                    class="chosen-select"
                    v-model="by_price"
                    @change="sortByPrice"
                >
                  <option value="asc">աճման</option>
                  <option value="desc">նվազման</option>
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
            <div v-else class="loader"  :style="{'border-top': settings ? '10px solid'+settings.main_color : '10px solid white'}"></div>
            <Pagination
              class="style3"
              :paginate="paginate"
              @pagechanged="onPageChange"
            />
          </div>
        </div>
        <div v-show="showFilters || !isMobile" class="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Sidebar
              class="shop-sidebar"
              :categories="categories"
              :brands="brand"
              :sizes="sizes"
              :colors="color"
              :tags="tags"
              :price="price"
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
import Breadcrumbs from "@/components/Breadcrumbs";
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "GridLeftSidebar",
  components: {Breadcrumbs, ProductCart, Pagination, Sidebar},
  data() {
    return {
      layoutMode: true,
      by_price: '',
      per_page: '',
      showFilters: false,
      showSort: false,
      width: 0,
    }
  },
  computed: {
    ...mapGetters(["settings"]),
    isMobile() {
      return this.width <= 768 && this.width > 0
    },
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
    },
    /* todo */
    price() {
      return {min: 10, max: 100}
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
  mounted() {
    this.addResizeListener()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeEvent)
  },
  methods: {
    ...mapMutations(["setByPrice", "setSearch", "setPage", "setCategory", "setPerPage"]),
    addResizeListener() {
      if (window) {
        window.addEventListener('resize', this.onResizeEvent)
        window.dispatchEvent(new window.Event('resize'))
      }
    },
    onResizeEvent(e) {
      this.width = e.target.innerWidth
    },
    sortByPrice() {
      this.setByPrice(this.by_price)
    },
    onPageChange(page) {
      this.setPage(page)
    },
    sortPerPage() {
      this.setPerPage(this.per_page)
    },
    toggleFilter() {
      this.showFilters = !this.showFilters
      if(this.showFilters) {
        this.showSort = false
      }
    },
    toggleSort() {
      this.showSort = !this.showSort
      if(this.showSort) {
        this.showFilters = false
      }
    },
  }
}
</script>

<style scoped lang="scss">
.products-header {
  position: relative;
}
.sort-filter_wrap {
  display: flex;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
}
.filter-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sort-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .shop-top-control {
    background-color: unset;
    border-radius: 10px;
  }
}
@media (max-width: 600px) {
  .shop-top-control .select-form .price-title {
    margin-right: 44px;
  }
}

</style>