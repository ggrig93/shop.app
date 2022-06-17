<template>
  <div class="main-content main-content-product">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs />
        </div>
      </div>
      <div class="row">
        <div class="ysera-product wishlist-products">
          <ul class="row list-products auto-clear equal-container product-grid">
            <li
                class="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1"
                v-for="(product, idx) in products"
                :key="idx"
            >
              <ProductCart :product="product" :index="idx"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCart from "@/components/products/ProductCart";

export default {
  name: "WishList",
  components: {Breadcrumbs, ProductCart},
  computed: {
    products() {
      return this.$store.state.wishList;
    }
  },
  created() {
    this.$store.dispatch('getWishList')
  },

}
</script>

<style lang="scss" scoped>
.wishlist-products {
  min-height: 350px;
}
</style>