<template>
  <div class="main-content main-content-details single no-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs />
        </div>
      </div>
      <div class="row">
        <div class="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div class="site-main">
            <div class="details-product">
              <div class="details-thumd">
                <div class="image-preview-container image-thick-box image_preview_container">
                  <inner-image-zoom
                      :src="`http://ledthanhdat.vn/html/ysera/assets/images/details-item-${activeImg}.jpg`"
                      :zoom-src="`http://ledthanhdat.vn/html/ysera/assets/images/details-item-${activeImg}.jpg`"
                      :hide-hint="true"
                      zoom-type="hover"
                  />
                  <a href="#" class="btn-zoom open_qv"><i class="fa fa-search" aria-hidden="true"></i></a>
                </div>
                <div class="product-preview image-small product_preview">
                  <carousel
                    :margin="10" :dots="false" class="thumbnails_carousel"
                    :responsive="{'0':{'items':3},'480':{'items':3},'600':{'items':3},'1000':{'items':3}}"
                    :nav-text="[`<i class='fa fa-angle-left' aria-hidden='true'></i>`, `<i class='fa fa-angle-right' aria-hidden='true'></i>`]"
                  >
                    <a href="javascript:void(0)"
                       :class="{'active': activeImg === i}"
                       v-for="i in 4"
                       :key="i"
                       @click.prevent="setActiveImg(i)"
                    >
                      <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/details-item-${i}.jpg`" alt="img">
                    </a>
                  </carousel>
                </div>
              </div>
              <div class="details-infor">
                <h1 class="product-title">
                  Splendid Diamond
                </h1>
                <div class="stars-rating">
                  <div class="star-rating">
                    <span class="star-5"></span>
                  </div>
                  <div class="count-star">
                    (7)
                  </div>
                </div>
                <div class="availability">
                  availability:
                  <a href="#">in Stock</a>
                </div>
                <div class="price">
                  <span>$45</span>
                </div>
                <div class="product-details-description">
                  <ul>
                    <li>Vestibulum tortor quam</li>
                    <li>Imported</li>
                    <li>Art.No. 06-7680</li>
                  </ul>
                </div>
                <div class="variations">
                  <div class="attribute attribute_color">
                    <div class="color-text text-attribute">
                      Color:
                    </div>
                    <div class="list-color list-item">
                      <a href="#" class="color1"></a>
                      <a href="#" class="color2"></a>
                      <a href="#" class="color3 active"></a>
                      <a href="#" class="color4"></a>
                    </div>
                  </div>
                  <div class="attribute attribute_size">
                    <div class="size-text text-attribute">
                      Size:
                    </div>
                    <div class="list-size list-item">
                      <a href="#" class="">xs</a>
                      <a href="#" class="">s</a>
                      <a href="#" class="active">m</a>
                      <a href="#" class="">l</a>
                      <a href="#" class="">xl</a>
                      <a href="#" class="">xxl</a>
                    </div>
                  </div>
                </div>
                <div class="group-button">
                  <div class="yith-wcwl-add-to-wishlist">
                    <div class="yith-wcwl-add-button">
                      <a href="#">Add to Wishlist</a>
                    </div>
                  </div>
                  <div class="size-chart-wrapp">
                    <div class="btn-size-chart">
                      <a id="size_chart" href="@/assets/images/size-chart.jpg" class="fancybox">View
                        Size Chart</a>
                    </div>
                  </div>
                  <div class="quantity-add-to-cart">
                    <div class="quantity">
                      <div class="control">
                        <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                        <input type="text" data-step="1" data-min="0" value="1" title="Qty"
                               class="input-qty qty" size="4">
                        <a href="#" class="btn-number qtyplus quantity-plus">+</a>
                      </div>
                    </div>
                    <button class="single_add_to_cart_button button">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-details-product">
              <ul class="tab-link">
                <li :class="{active: tabPanel === 'Description'}">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="tabPanel = 'Description'">Descriptions</a>
                </li>
                <li :class="{active: tabPanel === 'Information'}">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="tabPanel = 'Information'">Information</a>
                </li>
                <li :class="{active: tabPanel === 'Reviews'}">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="tabPanel = 'Reviews'">Reviews</a>
                </li>
              </ul>
              <div class="tab-container">
                <component class="active" :is="tabPanel"></component>
              </div>
            </div>
            <div style="clear: left;"></div>
            <div class="related products product-grid">
              <h2 class="product-grid-title">You may also like</h2>
              <vue-slick-carousel class="owl-products nav-center" v-bind="settings">
                <template #prevArrow>
                  <span></span>
                </template>
                <div class="product-item style-1" v-for="(prod, idx) in products" :key="idx">
                  <ProductCart :product="prod" />
                </div>
                <template #nextArrow>
                  <span></span>
                </template>
              </vue-slick-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import carousel from 'vue-owl-carousel'
import InnerImageZoom from 'vue-inner-image-zoom';
import ProductCart from "@/components/products/ProductCart";
import Description from "@/components/products/Description";
import Information from "@/components/products/Information";
import Reviews from "@/components/products/Reviews";
import data from '@/customdata/products'
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: "Product",
  components: {Breadcrumbs, VueSlickCarousel, carousel, InnerImageZoom, ProductCart, Description, Information, Reviews},
  data() {
    return {
      activeImg: 1,
      tabPanel: 'Description',
      products: data.products.slice(0, 5),
      settings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":true,
        "dots":false,
        "infinite":true,
        "speed":800,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        responsive: [
          {"breakpoint":2000,"settings":{"slidesToShow":3}},
          {"breakpoint":1200,"settings":{"slidesToShow":2}},
          {"breakpoint":480,"settings":{"slidesToShow":1}}
        ]
      }
    }
  },
  methods: {
    setActiveImg(id) {
      this.activeImg = id
    }
  }
}
</script>

<style lang="scss">
.details-thumd .image-preview-container {
  margin-bottom: 0;
  border: none;
}
.owl-theme .owl-nav [class*='owl-']:hover {
  color: #c09578!important;
}
</style>