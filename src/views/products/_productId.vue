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
          <div class="site-main" v-if="product">
            <div class="details-product">
              <div class="details-thumd">
                <div class="image-preview-container image-thick-box image_preview_container">
                  <inner-image-zoom
                      :src="img"
                      :zoom-src="img"
                      :hide-hint="true"
                      zoom-type="hover"
                  />
                </div>
                <div class="product-preview image-small product_preview">
                  <carousel
                    :margin="10" :dots="false" class="thumbnails_carousel"
                    :responsive="{'0':{'items':3},'480':{'items':3},'600':{'items':3},'1000':{'items':3}}"
                    :nav-text="[`<i class='fa fa-angle-left' aria-hidden='true'></i>`, `<i class='fa fa-angle-right' aria-hidden='true'></i>`]"
                    :key="activeBlock+img"
                  >
                    <a href="javascript:void(0)"
                       :class="{'active': img === i.image}"
                       v-for="i in coloredProduct.images"
                       :key="i.id"
                       @click.prevent="setActiveImg(i.image)"
                    >
                      <img :src="i.image" alt="img">
                    </a>
                  </carousel>
                </div>
              </div>
              <div class="details-infor">
                <h1 class="product-title">
                  {{product.title}}
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
                  <a>{{product.available_type === 'is_available' ? 'Հասանելի է' : 'Հասանելի չէ'}}</a>
                </div>
                <div class="price">
                  <span>{{product.price}} դրամ</span>
                </div>
                <div class="product-details-description">
                  <ul v-if="product.details.additional">
                    <li
                        v-for="(item, i) in product.details.additional"
                        :key="i"
                    >
                      {{item}}
                    </li>
                  </ul>
                </div>
                <div class="variations">
                  <div class="attribute attribute_color">
                    <div class="color-text text-attribute">Գույն</div>
                    <div class="list-color list-item">
                      <a v-for="color in colors"
                         :key="color.id"
                         :style="{backgroundColor: color.code}"
                         :class="{
                           active: activeColor(color),
                           'black-check': color.name === 'White'
                         }"
                         @click.prevent="selectColor(color)"
                      ></a>
                    </div>
                    <p v-if="showColorError" class="error-message color-error">Ընտրեք գույնը</p>
                  </div>
                  <div class="attribute attribute_size">
                    <div class="size-text text-attribute">Չափս</div>
                    <div class="list-size list-item">
                      <a v-for="item in coloredProduct.sizes"
                         :key="item.id"
                         :class="{active: size && size.id === item.id}"
                         @click="size = item"
                      >{{item.name}}</a>
                    <p v-if="showSizeError" class="error-message size-error">Ընտրեք չափսը</p>
                    </div>
                  </div>
                </div>
                <div class="group-button" style="position: relative">
                  <div class="yith-wcwl-add-to-wishlist wishlist-notify-wrap">
                    <div v-if="hasWishListItem" class="success-notify wishlist-success-notify">
                      <div class="bubble">Product already exist</div>
                      <div class="triangle"></div>
                    </div>
                    <div class="yith-wcwl-add-button">
                      <a @click="addToWishList(product)" style="cursor: pointer">Հավանել</a>
                    </div>
                  </div>
                  <div v-if="showSuccessNotify" class="success-notify">
                    <div class="bubble">Ապրանքը զամբյուղում է</div>
                    <div class="triangle"></div>
                  </div>
                  <div class="quantity-add-to-cart">
                    <div class="quantity">
                      <div class="control">
                        <a class="btn-number qtychange qtyminus quantity-minus" @click="changeCount(-1)">-</a>
                        <input
                            v-model="count"
                            type="text"
                            data-step="1"
                            data-min="0"
                            title="Qty"
                            class="input-qty qty"
                            size="4"
                        >
                        <a class="btn-number qtychange qtyplus quantity-plus" @click="changeCount(+1)">+</a>
                      </div>
                    </div>
                    <button class="single_add_to_cart_button button" @click.stop="addToCartHandler">Ավելացնել զամբյուղ</button>
                  </div>
                  <p v-if="count < 1" class="error-message">Ընտրեք քանակը</p>
                </div>
              </div>
            </div>
            <div class="tab-details-product">
              <ul class="tab-link">
                <li :class="{active: tabPanel === 'Description'}">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="tabPanel = 'Description'">Նկարագրություն</a>
                </li>
                <li v-if="product.details.information" :class="{active: tabPanel === 'Information'}">
                  <a data-toggle="tab" aria-expanded="true" href="javascript:void(0)" @click="tabPanel = 'Information'">Բնութագիր</a>
                </li>
              </ul>
              <div class="tab-container">
                <component class="active"
                 :is="tabPanel"
                 :description="product.details.description"
                 :information="product.details.information"
                ></component>
              </div>
            </div>
            <div style="clear: left;"></div>
            <div v-if="product.suggested_products && product.suggested_products.length" class="related products product-grid">
              <h2 class="product-grid-title">Նմանատիպ ապրանքներ</h2>
              <vue-slick-carousel
                  v-bind="settings"
                  class="owl-products nav-center suggested-products"
              >
                <template #prevArrow>
                  <span></span>
                </template>
                <div
                    class="product-item style-1"
                    v-for="(prod, idx) in product.suggested_products"
                    :key="idx"
                >
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
import Breadcrumbs from "@/components/Breadcrumbs";
import productMixin from "@/mixins/product.mixin";
export default {
  name: "Product",
  props: ['id'],
  mixins: [productMixin],
  components: {Breadcrumbs, VueSlickCarousel, carousel, InnerImageZoom, ProductCart, Description, Information},
  data() {
    return {
      tabPanel: 'Description',
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
      },
      count: 1,
      size: null,
      color: null,
      showSizeError: false,
      showColorError: false,
      showSuccessNotify: false,
    }
  },
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  watch: {
    size: {
      deep: true,
      handler(val) {
        if(val) {
          this.showSizeError = false
        }
      }
    },
    color: {
      deep: true,
      handler(val) {
        if(val) {
          this.size= null
        }
      }
    }
  },
  mounted() {
    this.$store.dispatch('getProduct', this.id)
  },
  methods: {
    activeColor(color) {
      if(color.block === this.block) {
        this.color = color
      }
      return color.block === this.block
    },
    changeCount(qty) {
      if(this.count === 1 && qty === -1) return;
      this.count = parseInt(this.count) + parseInt(qty)
    },
    selectColor(color) {
      this.color = color
      this.setActiveColor(color.block)
    },
    addToCartHandler() {
      if(!this.color) this.showColorError = true;
      if(!this.size) this.showSizeError = true;
      if(!this.color || !this.size || this.count < 1) return;
      const product = {
        ...this.product,
        color: this.color,
        size: this.size,
        count: this.count,
      }
      this.addToCart(product)
      this.showSuccessNotify = true
      setTimeout(() => { this.showSuccessNotify = false }, 1500)
    }
  }
}
</script>

<style>
.details-thumd .image-preview-container {
  margin-bottom: 0;
  border: none;
}
.owl-theme .owl-nav [class*='owl-']:hover {
  color: #c09578!important;
}
.product-preview.image-small.product_preview img{
  width: 170px;
  height: 170px;
  object-fit: cover;
}
picture > img.iiz__img {
  height: 533px!important;
  width: 533px!important;
  object-fit: cover;
}
.list-item a {
  cursor: pointer;
}
.qtychange {
  user-select: none;
  cursor: pointer;
}
.error-message {
  color: #ce1313;
}
.color-error {
  margin: -20px 0 0 0;
}
.size-error {
  margin: -15px 0 0 0;
}
</style>