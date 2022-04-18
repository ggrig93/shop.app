<template>
  <div class="category">
    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Breadcrumbs/>
          </div>
        </div>
        <h3 class="custommenu-title-blog">
          Top Categories
        </h3>
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
            <vue-slick-carousel class="owl-products owl-slick" v-bind="productsSettings">
              <router-link :to="{name: 'Product', params: {id: i+1}}" class="product-item style-5" v-for="(product, i) in products" :key="i" >
                <ProductCart :product="product"/>
              </router-link>
            </vue-slick-carousel>
          </div>
        </div>
        <h3 class="custommenu-title-blog">
          Top Sellers
        </h3>
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
            <vue-slick-carousel class="owl-products owl-slick" v-bind="productsSettings">
              <router-link :to="{name: 'Product', params: {id: i+1}}" class="product-item style-5" v-for="(product, i) in products" :key="i" >
                <ProductCart :product="product"/>
              </router-link>
            </vue-slick-carousel>
          </div>
        </div>
        <h3 class="custommenu-title-blog">
          New Arrivales
        </h3>
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
            <vue-slick-carousel class="owl-products owl-slick" v-bind="productsSettings">
              <router-link :to="{name: 'Product', params: {id: i+1}}" class="product-item style-5" v-for="(product, i) in products" :key="i" >
                <ProductCart :product="product"/>
              </router-link>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Banner from "@/components/Banner";
import data from "@/customdata/products";
import VueSlickCarousel from "vue-slick-carousel";
import ProductCart from "@/components/products/ProductCart";
export default {
  name: "Category",
  components: {Breadcrumbs, ProductCart, VueSlickCarousel, Banner},
  data() {
    return {
      products: data.products.slice(0, 6),
      productsSettings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":false,
        "dots":true,
        "dotsClass": "slick-dots",
        "infinite":false,
        "speed":800,
        "slidesToShow": 2,
        "slidesToScroll": 1,
        responsive: [
          // {"breakpoint":1200, "settings":{"slidesToShow":3}},
          {"breakpoint":992, "settings":{"slidesToShow":2}},
          {"breakpoint":480, "settings":{"slidesToShow":1}}
        ]
      }
    }
  }
}
</script>
