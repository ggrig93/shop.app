<template>
  <div class="main-header">
    <div class="row">
      <div class="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img src="http://ledthanhdat.vn/html/ysera/assets/images/logo.png" alt="img">
          </router-link>
        </div>
      </div>
      <div class="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
        <div class="block-search-block">
          <form action="" class="form-search form-search-width-category" @submit.prevent="searchHandler">
            <div class="form-content">
<!--              <div class="category">-->
<!--                <select title="cate" data-placeholder="All Categories" class="chosen-select"-->
<!--                        tabindex="1" v-model="selectedCategory">-->
<!--                  <option-->
<!--                      v-for="(category, i) in categories"-->
<!--                      :value="category.id"-->
<!--                      :key="i"-->
<!--                  >-->
<!--                    {{category.name}}-->
<!--                  </option>-->
<!--                </select>-->
<!--              </div>-->
              <div class="inner">
                <input type="text" class="input" v-model="search" placeholder="Search here">
              </div>
              <button class="btn-search" type="submit">
                <span class="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
        <div class="header-control">
          <div class="block-minicart ysera-mini-cart block-header ysera-dropdown" :class="{'open': openCart}" v-click-outside="hideCart">
            <a href="javascript:void(0);" class="shopcart-icon" data-ysera="ysera-dropdown" @click="toggleCart">
              Cart
              <span class="count">{{shopCartCount}}</span>
            </a>
            <div class="shopcart-description ysera-submenu">
              <div class="content-wrap">
                <h3 class="title">Shopping Cart</h3>
                <ul class="minicart-items">
                  <li class="product-cart mini_cart_item" v-for="(product, i) in shopProducts" :key="i">
                    <router-link :to="{name: 'Product', params: {id: product.id}}" class="product-media">
                      <img :src="product.avatar" alt="img">
                    </router-link>
                    <div class="product-details">
                      <h5 class="product-name">
                        <router-link :to="{name: 'Product', params: {id: product.id}}" class="title">{{product.title}}</router-link>
                      </h5>
                      <div class="variations">
                        <span class="attribute_color">
                          <a>{{product.color.name}}</a>
                        </span>,
                        <span class="attribute_size"><a>{{product.size.name}}</a></span>
                      </div>
                      <span class="product-price">
                        <span class="price">${{product.price}}</span>
                      </span>
                      <span class="product-quantity">(x{{product.count}})</span>
                      <div class="product-remove">
                        <span @click="showDeletePopup = i" style="cursor: pointer"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="subtotal">
                  <span class="total-title">Subtotal: </span>
                  <span class="total-price">
                    <span class="Price-amount">${{cartTotalPrice}}</span>
                  </span>
                </div>
                <div class="actions">
                  <router-link class="button button-viewcart" :to="{name: 'ShoppingCart'}" @click.native="hideCart">
                    <span>View Bag</span>
                  </router-link>
                  <router-link class="button button-checkout" :to="{name: 'Checkout'}" @click.native="hideCart">
                    <span>Checkout</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
<!--          <div class="block-account block-header ysera-dropdown"-->
<!--               :class="{'open': openLoginRegister}"-->
<!--               v-click-outside="hideLoginRegister"-->
<!--          >-->
<!--            <a href="javascript:void(0);"-->
<!--               data-ysera="ysera-dropdown"-->
<!--               @click="toggleLoginRegister"-->
<!--            >-->
<!--              <span class="flaticon-user"></span>-->
<!--            </a>-->
<!--            <div class="header-account ysera-submenu">-->
<!--              <div class="header-user-form-tabs">-->
<!--                <ul class="tab-link">-->
<!--                  <li :class="{'active': tab === 'login'}">-->
<!--                    <a href="javascript:void(0)" @click="tab = 'login'">Login</a>-->
<!--                  </li>-->
<!--                  <li :class="{'active': tab === 'register'}">-->
<!--                    <a href="javascript:void(0)" @click="tab = 'register'">Register</a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--                <div class="tab-container">-->
<!--                  <template v-if="tab === 'login'">-->
<!--                    <div id="header-tab-login" class="tab-panel" :class="{'active': tab === 'login'}" key="login">-->
<!--                      <form method="post" class="login form-login">-->
<!--                        <p class="form-row form-row-wide">-->
<!--                          <input type="email" placeholder="Email" class="input-text">-->
<!--                        </p>-->
<!--                        <p class="form-row form-row-wide">-->
<!--                          <input type="password" class="input-text" placeholder="Password">-->
<!--                        </p>-->
<!--                        <p class="form-row">-->
<!--                          <label class="form-checkbox">-->
<!--                            <input type="checkbox" class="input-checkbox">-->
<!--                            <span>Remember me</span>-->
<!--                          </label>-->
<!--                          <input type="submit" class="button" value="Login">-->
<!--                        </p>-->
<!--                        <p class="lost_password">-->
<!--                          <a href="javascript:void(0)">Lost your password?</a>-->
<!--                        </p>-->
<!--                      </form>-->
<!--                    </div>-->
<!--                  </template>-->
<!--                  <template v-if="tab === 'register'">-->
<!--                    <div id="header-tab-rigister" class="tab-panel" :class="{'active': tab === 'register'}" key="register">-->
<!--                      <form method="post" class="register form-register">-->
<!--                        <p class="form-row form-row-wide">-->
<!--                          <input type="email" placeholder="Email" class="input-text">-->
<!--                        </p>-->
<!--                        <p class="form-row form-row-wide">-->
<!--                          <input type="password" class="input-text" placeholder="Password">-->
<!--                        </p>-->
<!--                        <p class="form-row">-->
<!--                          <input type="submit" class="button" value="Register">-->
<!--                        </p>-->
<!--                      </form>-->
<!--                    </div>-->
<!--                  </template>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <a class="menu-bar mobile-navigation menu-toggle" href="javascript:void(0)" @click="openMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
    <DeletePopup
        v-if="showDeletePopup || showDeletePopup === 0"
        @confirm="removeHandler"
        @close="closeModal"
    />
  </div>
</template>

<script>
import DeletePopup from "@/components/DeletePopup.vue";
import headerMixin from "@/mixins/header.mixin";
import productMixin from "@/mixins/product.mixin";
import {mapMutations} from "vuex";

export default {
  name: "HeaderMain",
  mixins: [headerMixin, productMixin],
  components: {DeletePopup},
  data() {
    return {
      tab: 'login',
      selectedCategory: 1,
      search: "",
      showDeletePopup: false
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    cartTotalPrice() {
      return this.$store.state.cartTotalPrice
    },
    shopProducts() {
      return this.$store.state.shopProducts
    },
    shopCartCount() {
      return this.$store.state.shopProducts?.length ?
          this.$store.state.shopProducts.length :
          JSON.parse(localStorage.getItem("shopProducts")) ?
          JSON.parse(localStorage.getItem("shopProducts")).length : 0
    }
  },
  watch: {
    openCart(val) {
      if(val) {
        this.$store.dispatch('getShopProducts')
      }
    },
    '$route.query': {
      immediate: true,
      handler(val) {
        if(val?.search) {
          this.search = val.search
        } else {
          this.search = ""
        }
      }
    }
  },
  methods: {
    ...mapMutations(["setSearch"]),
    searchHandler() {
      this.setSearch(this.search)
      if(this.$route.name !== 'Products') {
        this.$router.replace({name: 'Products', query: {search: this.search}})
      }
    },
    closeModal() {
      this.showDeletePopup = false
    },
    removeHandler() {
      this.removeCartItem(this.showDeletePopup)
      this.closeModal()
    },
  }
}
</script>

<style>
  select {
    border: none!important;
  }
</style>