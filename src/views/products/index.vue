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
                <select title="sort" data-placeholder="12 Products/Page" class="chosen-select">
                  <option value="1">12 Products/Page</option>
                  <option value="2">9 Products/Page</option>
                  <option value="3">10 Products/Page</option>
                  <option value="4">8 Products/Page</option>
                  <option value="5">6 Products/Page</option>
                </select>
              </form>
              <form class="filter-choice select-form">
                <span class="title">Sort by</span>
                <select title="sort-by" data-placeholder="Price: Low to High" class="chosen-select">
                  <option value="1">Price: Low to High</option>
                  <option value="2">Sort by popularity</option>
                  <option value="3">Sort by average rating</option>
                  <option value="4">Sort by newness</option>
                  <option value="5">Sort by price: low to high</option>
                </select>
              </form>
              <div class="grid-view-mode">
                <div class="inner">
                  <a href="javascript:void(0)"
                     class="modes-mode mode-list"
                     :class="{'active': !layoutMode}"
                     @click.prevent="layoutMode = false"
                  >
                    <span></span>
                    <span></span>
                  </a>
                  <a href="javascript:void(0)"
                     class="modes-mode mode-grid"
                     :class="{'active': layoutMode}"
                     @click.prevent="layoutMode = true"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <ul class="row list-products auto-clear equal-container"
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
            <Pagination
              class="style3"
              :totalPages="totalPages"
              :perPage="10"
              :currentPage="currentPage"
              @pagechanged="onPageChange"
            />
          </div>
        </div>
        <div class="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Sidebar
              class="shop-sidebar"
              :categories="categories"
              :brands="brand"
              :sizes="size"
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
import data from '@/customdata/products'
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: "GridLeftSidebar",
  components: {Breadcrumbs, ProductCart, Pagination, Sidebar},
  data() {
    return {
      currentPage: 1,
      layoutMode: true,
      // categories: data.categories,
      // brand: data.brand,
      size: data.size,
      tags: data.tags,
      // color: data.color,
      price: data.price
    }
  },
  computed: {
    totalPages() {
      return this.$store.state.products?.meta.paginate.total || 1
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
    }
  },
  created() {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('getColors')
    this.$store.dispatch('getBrands')
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>

</style>