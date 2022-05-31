<template>
  <div class="main-content main-content-product left-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 products-header">
          <Breadcrumbs />
          <div v-if="isMobile" class="filter-btn flex-center" @click="showFilters = !showFilters">
            <img src="@/assets/images/filter.svg" />
          </div>
        </div>
      </div>
      <div class="row products-wrapper">
        <div class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div v-if="products && !products.length">Հարցման արդյունքում ոչինչ չի գտնվել</div>
          <div v-else class="site-main">
            <div class="shop-top-control">
              <form class="select-item select-form">
                <span class="title">Դասակարգել ըստ քանակի</span>
                <select
                    v-model="per_page"
                    title="sort"
                    data-placeholder="Products/Page"
                    class="chosen-select"
                    @change="sortPerPage"
                >
                  <option value="2">2 ապրանք/էջ</option>
                  <option value="6">6 ապրանք/էջ</option>
                  <option value="10">10 ապրանք/էջ</option>
                </select>
              </form>
              <form class="filter-choice select-form">
                <span class="title">Դասակարգել ըստ գնի</span>
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
            <div v-else class="loader"></div>
            <Pagination
              class="style3"
              :paginate="paginate"
              @pagechanged="onPageChange"
            />
          </div>
        </div>
        <div v-if="showFilters || !isMobile" class="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
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
import {mapMutations} from "vuex";
export default {
  name: "GridLeftSidebar",
  components: {Breadcrumbs, ProductCart, Pagination, Sidebar},
  data() {
    return {
      layoutMode: true,
      by_price: '',
      per_page: '',
      showFilters: true,
      width: 0,
    }
  },
  computed: {
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
    }
  }
}
</script>

<style scoped>
.products-header {
  position: relative;
}
.filter-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>