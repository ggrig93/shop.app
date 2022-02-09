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
          <form class="form-search form-search-width-category">
            <div class="form-content">
              <div class="category">
                <select title="cate" data-placeholder="All Categories" class="chosen-select"
                        tabindex="1">
                  <option value="United States">Accessories</option>
                  <option value="United Kingdom">Bracelets</option>
                  <option value="Afghanistan">Tanzanites</option>
                  <option value="Aland Islands">Sofas</option>
                  <option value="Albania">New Arrivals</option>
                  <option value="Algeria">Rings</option>
                </select>
              </div>
              <div class="inner">
                <input type="text" class="input" name="s" value="" placeholder="Search here">
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
              <span class="count">0</span>
            </a>
            <div class="shopcart-description ysera-submenu">
              <div class="content-wrap">
                <h3 class="title">Shopping Cart</h3>
                <ul class="minicart-items">
                  <li class="product-cart mini_cart_item" v-for="i in 3" :key="i">
                    <a href="#" class="product-media">
                      <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/item-minicart-${i}.jpg`" alt="img">
                    </a>
                    <div class="product-details">
                      <h5 class="product-name">
                        <a href="#">Earrings Solutions Soap</a>
                      </h5>
                      <div class="variations">
                        <span class="attribute_color">
                          <a href="#">Black</a>
                        </span>,
                        <span class="attribute_size"><a href="javascript:void(0)">{{i*100}}ml</a></span>
                      </div>
                      <span class="product-price">
                        <span class="price">${{i*25}}</span>
                      </span>
                      <span class="product-quantity">(x{{i}})</span>
                      <div class="product-remove">
                        <a href=""><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="subtotal">
                  <span class="total-title">Subtotal: </span>
                  <span class="total-price">
                    <span class="Price-amount">$135</span>
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
          <div class="block-account block-header ysera-dropdown"
               :class="{'open': openLoginRegister}"
               v-click-outside="hideLoginRegister"
          >
            <a href="javascript:void(0);"
               data-ysera="ysera-dropdown"
               @click="toggleLoginRegister"
            >
              <span class="flaticon-user"></span>
            </a>
            <div class="header-account ysera-submenu">
              <div class="header-user-form-tabs">
                <ul class="tab-link">
                  <li :class="{'active': tab === 'login'}">
                    <a href="javascript:void(0)" @click="tab = 'login'">Login</a>
                  </li>
                  <li :class="{'active': tab === 'register'}">
                    <a href="javascript:void(0)" @click="tab = 'register'">Register</a>
                  </li>
                </ul>
                <div class="tab-container">
                  <template v-if="tab === 'login'">
                    <div id="header-tab-login" class="tab-panel" :class="{'active': tab === 'login'}" key="login">
                      <form method="post" class="login form-login">
                        <p class="form-row form-row-wide">
                          <input type="email" placeholder="Email" class="input-text">
                        </p>
                        <p class="form-row form-row-wide">
                          <input type="password" class="input-text" placeholder="Password">
                        </p>
                        <p class="form-row">
                          <label class="form-checkbox">
                            <input type="checkbox" class="input-checkbox">
                            <span>Remember me</span>
                          </label>
                          <input type="submit" class="button" value="Login">
                        </p>
                        <p class="lost_password">
                          <a href="javascript:void(0)">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </template>
                  <template v-if="tab === 'register'">
                    <div id="header-tab-rigister" class="tab-panel" :class="{'active': tab === 'register'}" key="register">
                      <form method="post" class="register form-register">
                        <p class="form-row form-row-wide">
                          <input type="email" placeholder="Email" class="input-text">
                        </p>
                        <p class="form-row form-row-wide">
                          <input type="password" class="input-text" placeholder="Password">
                        </p>
                        <p class="form-row">
                          <input type="submit" class="button" value="Register">
                        </p>
                      </form>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <a class="menu-bar mobile-navigation menu-toggle" href="javascript:void(0)" @click="openMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerMixin from "@/mixins/header.mixin";

export default {
  name: "HeaderMain",
  mixins: [headerMixin],
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>

<style>
  select {
    border: none!important;
  }
</style>