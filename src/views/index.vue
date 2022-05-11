<template>
  <div class="home">
    <div>
      <div class="fullwidth-template">
        <div v-if="topSlideProducts.length > 2" class="home-slider-banner">
          <div class="container">
            <div class="row10">
              <div class="col-lg-8 silider-wrapp">
                <div class="home-slider">
                  <vue-slick-carousel class="slider-owl owl-slick" v-bind="settings">
                    <div
                        v-for="product in mainProducts.slideItems"
                        :key="product.id"
                        class="slider-item style9"
                    >
                      <div
                          class="slider-inner equal-element"
                          :style="{backgroundImage: `url(${product.avatar})`}"
                      >
                        <div class="slider-infor">
<!--                          <h5 class="title-small">-->
<!--                            {{product.description}}-->
<!--                          </h5>-->
                          <h3 class="title-big custom-title">
                            {{product.title}}
                          </h3>
                          <div class="price">
                            New Price:
                            <span class="number-price">
														${{product.price}}
													</span>
                          </div>
                          <router-link
                              :to="{name: 'Product', params: {id: product.id}}"
                              class="button btn-shop-the-look bgroud-style"
                          >
                            Shop now
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </vue-slick-carousel>
                </div>
              </div>
              <div class="col-lg-4 banner-wrapp">
                <banner
                    v-for="product in mainProducts.bannerItems"
                    :key="product.id"
                    img-class="style7"
                    :backgroundImage="product.avatar"
                >
                  <h3 class="title custom-title">{{product.title}}</h3>
                  <span class="price">${{product.price}}</span>
                  <router-link
                      :to="{name: 'Product', params: {id: product.id}}"
                      class="button btn-lets-do-it"
                  >
                    Shop now
                  </router-link>
                </banner>
              </div>
            </div>
          </div>
        </div>
        <div class="ysera-product produc-featured rows-space-65">
          <div class="container">
            <h3 class="custommenu-title-blog">
              Deal of the day
            </h3>
            <vue-slick-carousel v-if="dealDayProducts" class="owl-products owl-slick" v-bind="productsSettings">
              <router-link
                  v-for="(item, i) in dealDayProducts"
                  :key="i"
                  :to="{name: 'Product', params: {id: i+1}}"
                  class="product-item style-5"
              >
                <ProductCart :product="item.product" :endDate="item.date_end"/>
              </router-link>
            </vue-slick-carousel>
          </div>
        </div>
        <div class="banner-wrapp">
          <div class="container">
            <div class="row">
              <div
                  v-for="product in bottomSlideProducts"
                  :key="product.id"
                  class="col-lg-6 col-md-6 col-sm-12">
                <banner img-class="style4" :backgroundImage="product.avatar">
<!--                  <h4 class="ysera-subtitle">TOP STAFF PICK</h4>-->
                  <h3 class="title custom-title">{{product.title}}</h3>
                  <div class="description">{{product.description}}</div>
                  <router-link
                      :to="{name: 'Product', params: {id: product.id}}"
                      class="button btn-shop-now"
                  >
                    Shop now
                  </router-link>
                </banner>
              </div>
            </div>
          </div>
        </div>
        <div v-if="bottomContainerProducts.length" class="banner-wrapp rows-space-65">
          <div class="container">
            <banner img-class="style17" :backgroundImage="bottomContainerProducts[0].avatar">
              <h3 class="title">{{bottomContainerProducts[0].title}}</h3>
              <div class="description">
                {{bottomContainerProducts[0].description}}
              </div>
              <div class="banner-price">
                Price from:
                <span class="number-price">${{bottomContainerProducts[0].price}}</span>
              </div>
              <router-link
                  :to="{name: 'Product', params: {id: bottomContainerProducts[0].id}}"
                  class="button btn-shop-now"
              >
                Shop now
              </router-link>
              <router-link
                  :to="{name: 'Products'}"
                  class="button btn-view-collection"
              >
                View more
              </router-link>
            </banner>
          </div>
        </div>
        <div class="ysera-tabs  default rows-space-40">
          <div class="container">
            <div class="tab-head">
              <ul class="tab-link">
                <li :class="[activeTabPanel === 'bestseller' ? 'active' : '']">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="activeTabPanel = 'bestseller'">Bestseller</a>
                </li>
                <li :class="activeTabPanel === 'newArrivals' ? 'active' : ''">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="activeTabPanel = 'newArrivals'">New Arrivals</a>
                </li>
                <li :class="activeTabPanel === 'topRated' ? 'active' : ''">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="activeTabPanel = 'topRated'">Top Rated</a>
                </li>
              </ul>
            </div>
            <div class="tab-container">
              <div class="tab-panel active">
                <div class="ysera-product">
                  <ul class="row list-products auto-clear equal-container product-grid">
                    <li class="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1" v-for="(prod, idx) in topPanel[activeTabPanel]" :key="idx">
                      <ProductCart :product="prod.product"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ysera-iconbox-wrapp default">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="ysera-iconbox default">
                  <div class="iconbox-inner">
                    <div class="icon">
                      <span class="flaticon-delivery-truck"></span>
                    </div>
                    <div class="content">
                      <h4 class="title">
                        Free Delivery On order over $90.00
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ysera-blog-wraap default">
          <div class="container">
            <h3 class="custommenu-title-blog">
              Our Latest News
            </h3>
            <div class="ysera-blog default">
              <vue-slick-carousel v-bind="newsSettings">
                <div class="ysera-blog-item equal-element layout1" v-for="i in 4" :key="i">
                  <BlogCart :blog="{id: i}" />
                </div>
              </vue-slick-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="instagram-wrapp">
      <div>
        <h3 class="custommenu-title-blog">
          <i class="flaticon-instagram" aria-hidden="true"></i>
          Instagram Feed
        </h3>
        <div class="ysera-instagram">
          <vue-slick-carousel class="instagram" v-bind="instagramSettings">
            <div class="item-instagram" v-for="i in 5" :key="i">
              <a href="javascript:void(0)">
                <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/item-instagram-${i}.jpg`" alt="img">
              </a>
              <span class="text">
                <i class="icon flaticon-instagram" aria-hidden="true"></i>
              </span>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueSlickCarousel from 'vue-slick-carousel'
import ProductCart from "@/components/products/ProductCart";
import BlogCart from "@/components/blogs/BlogCart";
import Banner from '@/components/Banner'
import data from '@/customdata/products'

export default {
  name: 'Home',
  components: {ProductCart, BlogCart, VueSlickCarousel, Banner },
  data() {
    return {
      activeTabPanel: 'bestseller',
      allProducts: [],
      settings: {
        "autoplay":true,
        "autoplaySpeed":9000,
        "arrows":false,
        "dots":true,
        "dotsClass": "slick-dots",
        "infinite":true,
        "speed":1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        responsive: [
          {breakpoint: 2000, settings: {slidesToShow: 1}}
        ]
      },
      productsSettings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":false,
        "dots":true,
        "dotsClass": "slick-dots",
        "infinite":false,
        "speed":800,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        responsive: [
          {"breakpoint":2000, "settings":{"slidesToShow":4}},
          {"breakpoint":1200, "settings":{"slidesToShow":3}},
          {"breakpoint":992, "settings":{"slidesToShow":2}},
          {"breakpoint":480, "settings":{"slidesToShow":1}}
        ]
      },
      newsSettings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":false,
        "dots":true,
        "dotsClass": "slick-dots",
        "infinite":true,
        "speed":800,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        responsive: [
          {"breakpoint":2000,"settings":{"slidesToShow":3}},
          {"breakpoint":1200,"settings":{"slidesToShow":3}},
          {"breakpoint":992,"settings":{"slidesToShow":2}},
          {"breakpoint":768,"settings":{"slidesToShow":2}},
          {"breakpoint":481,"settings":{"slidesToShow":1}}
        ]
      },
      instagramSettings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":false,
        "dots":false,
        "infinite":true,
        "speed":800,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        responsive: [
          {"breakpoint":2000, "settings":{"slidesToShow":5}},
          {"breakpoint":1200, "settings":{"slidesToShow":4}},
          {"breakpoint":992, "settings":{"slidesToShow":3}},
          {"breakpoint":768, "settings":{"slidesToShow":2}},
          {"breakpoint":481, "settings":{"slidesToShow":2}}
        ]
      },
      // topPanel: {
      //   bestseller: data.products.slice(0, 8),
      //   newArrivals: data.products.slice(0, 6),
      //   topRated: data.products.slice(0, 10)
      // },
      products: data.products.slice(0, 6)
    }
  },
  computed: {
    topSlideProducts() {
      return this.$store.state.topSlideProducts
    },
    mainProducts() {
      return {
        bannerItems: this.topSlideProducts?.slice(0,2),
        slideItems: this.topSlideProducts?.slice(2, this.topSlideProducts.length)
      }
    },
    bottomSlideProducts() {
      return this.$store.state.bottomSlideProducts
    },
    bottomContainerProducts() {
      return this.$store.state.bottomContainerProducts
    },
    dealDayProducts() {
      return this.$store.state.dealDayProducts
    },
    popularProducts() {
      return this.$store.state.popularProducts
    },
    topPanel() {
      return {
        bestseller: this.popularProducts?.filter(item => item.best_seller),
        newArrivals: this.popularProducts?.filter(item => item.new_arrival),
        topRated: this.popularProducts?.filter(item => item.top_rated),
      }
    }
  },
  created() {
    this.$store.dispatch('getTopSlideProducts')
    this.$store.dispatch('getBottomSlideProducts')
    this.$store.dispatch('getBottomContainerProducts')
    this.$store.dispatch('getDealDayProducts')
    this.$store.dispatch('getBestsellers')
  }
}
</script>

<style>
.instagram .slick-slide {
  padding: 0;
}
.custom-title {
  min-height: 82px;
  max-height: 82px;
  padding-top: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
</style>