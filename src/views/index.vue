<template>
  <div class="home">
    <div>
      <div class="fullwidth-template">
        <div class="home-slider-banner">
          <div class="container">
            <div class="row10">
              <div class="col-lg-8 silider-wrapp">
                <div class="home-slider">
                  <vue-slick-carousel class="slider-owl owl-slick" v-bind="settings">
                    <div class="slider-item style7">
                      <div class="slider-inner equal-element">
                        <div class="slider-infor">
                          <h5 class="title-small">
                            Sale up to 40% off!
                          </h5>
                          <h3 class="title-big">
                            Spring Summer <br/>Collection
                          </h3>
                          <div class="price">
                            New Price:
                            <span class="number-price">
														$270.00
													</span>
                          </div>
                          <a href="#" class="button btn-shop-the-look bgroud-style">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="slider-item style8">
                      <div class="slider-inner equal-element">
                        <div class="slider-infor">
                          <h5 class="title-small">
                            Take A jewelry
                          </h5>
                          <h3 class="title-big">
                            Up to 25% Off <br/>order now
                          </h3>
                          <div class="price">
                            Save Price:
                            <span class="number-price">
														$170.00
													</span>
                          </div>
                          <a href="#" class="button btn-shop-product">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="slider-item style9">
                      <div class="slider-inner equal-element">
                        <div class="slider-infor">
                          <h5 class="title-small">
                            Ysera Best Collection
                          </h5>
                          <h3 class="title-big">
                            A range of <br/>jewelry
                          </h3>
                          <div class="price">
                            New Price:
                            <span class="number-price">
														$250.00
													</span>
                          </div>
                          <a href="#" class="button btn-chekout">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </vue-slick-carousel>
                </div>
              </div>
              <div class="col-lg-4 banner-wrapp">
                <banner img-class="style7">
                  <h3 class="title">Happy Ever <br/>After</h3>
                  <div class="description">Adipiscing elit curabitur senectus sem</div>
                  <a href="#" class="button btn-lets-do-it">Shop now</a>
                </banner>
                <banner img-class="style8">
                  <h3 class="title">Wedding <br/>Gift</h3>
                  <div class="description">Cras pulvinar lorem ipsum dolor conse</div>
                  <span class="price">$379.00</span>
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
            <vue-slick-carousel class="owl-products owl-slick" v-bind="productsSettings">
              <router-link :to="{name: 'Product', params: {id: i+1}}" class="product-item style-5" v-for="(product, i) in products" :key="i" >
                <ProductCart :product="product"/>
              </router-link>
            </vue-slick-carousel>
          </div>
        </div>
        <div class="banner-wrapp">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <banner img-class="style4">
                  <h4 class="ysera-subtitle">TOP STAFF PICK</h4>
                  <h3 class="title">Shop Rings</h3>
                  <div class="description">Proin interdum magna primis id consequat dictum</div>
                  <a href="#" class="button btn-shop-now">Shop now</a>
                </banner>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <banner img-class="style5">
                  <h3 class="title">Maybe You’ve <br/>Earned it</h3>
                  <span class="code">
												Use code:
												<span>
													YSERA
												</span>
												Get 25% Off for all Accessories items!
											</span>
                  <a href="#" class="button btn-shop-now">Shop now</a>
                </banner>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-wrapp rows-space-65">
          <div class="container">
            <banner img-class="style17">
              <h3 class="title">Collection Arrived</h3>
              <div class="description">
                You have no jewelry & Are you <br/>ready to wearing? come & shop with us!
              </div>
              <div class="banner-price">
                Price from:
                <span class="number-price">$45.00</span>
              </div>
              <a href="#" class="button btn-shop-now">Shop now</a>
              <a href="#" class="button btn-view-collection">View more</a>
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
                      <ProductCart :product="prod"/>
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
      topPanel: {
        bestseller: data.products.slice(0, 8),
        newArrivals: data.products.slice(0, 6),
        topRated: data.products.slice(0, 10)
      },
      products: data.products.slice(0, 6)
    }
  }
}
</script>

<style lang="scss">
.instagram .slick-slide {
  padding: 0;
}
</style>