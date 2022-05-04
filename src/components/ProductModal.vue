<template>
  <div v-if="openModal">
    <div class="mfp-bg mfp-ready"></div>
    <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1">
      <div class="mfp-container mfp-s-ready mfp-inline-holder">
        <div class="mfp-content">
          <div class="kt-popup-quickview">
            <div class="details-thumb">
              <div class="slider-product slider-for slick-initialized slick-slider">
                <div aria-live="polite" class="slick-list draggable">
                  <div class="slick-track" role="listbox">
                    <div class="details-item slick-slide slick-current slick-active">
                      <img :src="img" alt="img">
                    </div>
                  </div>
                </div>
              </div>
              <vue-slick-carousel class="slider-product-button nav-center " v-bind="settings">
                <template #prevArrow>
                  <span></span>
                </template>
                <div href="javascript:void(0)"
                   :class="['details-item',  img === i.image ? 'slick-current' : null]"
                   v-for="i in coloredProduct.images"
                   :key="i.id"
                   @click.prevent="setActiveImg(i.image)"
                >
                  <img :src="i.image" alt="img">
                </div>
<!--                <div :class="" v-for="i in 4" :key="i" @click="currentImg = i">-->
<!--                  <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/details-item-${i}.jpg`" alt="img">-->
<!--                </div>-->
                <template #nextArrow>
                  <span></span>
                </template>
              </vue-slick-carousel>
            </div>
            <div class="details-infor">
              <h1 class="product-title">{{product.title}}</h1>
              <div class="stars-rating">
                <div class="star-rating">
                  <span class="star-5"></span>
                </div>
                <div class="count-star">(7)</div>
              </div>
              <div class="availability">Availability: <a href="#">{{product.available_type}}</a></div>
              <div class="price"><span>€{{product.price}}</span></div>
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
                  <div class="color-text text-attribute">Color:</div>
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
                  <p v-if="showColorError" class="error-message color-error">Select color</p>
                </div>
                <div class="attribute attribute_size">
                  <div class="size-text text-attribute">Pots Size:</div>
                  <div class="list-size list-item">
                    <a v-for="item in coloredProduct.sizes"
                       :key="item.id"
                       :class="{active: size && size.id === item.id}"
                       @click="size = item"
                    >{{item.name}}</a>
                  </div>
                  <p v-if="showSizeError" class="error-message size-error">Select size</p>
                </div>
              </div>
              <div class="group-button">
                <div class="yith-wcwl-add-to-wishlist">
                  <div class="yith-wcwl-add-button">
                    <a>Add to Wishlist</a>
                  </div>
                </div>
                <div class="size-chart-wrapp">
                  <div class="btn-size-chart">
                    <a id="size_chart" href="@/assets/images/size-chart.jpg" class="fancybox" target="_blank">View Size Chart</a>
                  </div>
                </div>
                <div class="quantity-add-to-cart">
                  <div class="quantity">
                    <div class="control">
                      <a class="btn-number qtychange qtyminus quantity-minus" @click="changeCount(-1)">-</a>
                      <input v-model="count" type="text" data-step="1" data-min="0" title="Qty" class="input-qty qty" size="4">
                      <a class="btn-number qtychange qtyplus quantity-plus" @click="changeCount(+1)">+</a>
                    </div>
                  </div>
                  <button class="single_add_to_cart_button button" @click.stop="addToCartHandler(product.id)">Add to cart</button>
                </div>
                <p v-if="count < 1" class="error-message">Select a valid count</p>
              </div>
            </div>
            <button title="Close (Esc)" type="button" class="mfp-close" @click="closeModal">×</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '@/main'
import VueSlickCarousel from "vue-slick-carousel";
import productMixin from "@/mixins/product.mixin";
export default {
  name: "ProductModal",
  components: { VueSlickCarousel },
  mixins: [productMixin],
  data() {
    return {
      openModal: false,
      product: null,
      settings: {
        "arrows":true,
        "dots":false,
        "infinite": false,
        "speed":1000,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        responsive: [
          {breakpoint: 2000, settings: {slidesToShow: 3}}
        ]
      },
      count: 1,
      size: null,
      color: null,
      showSizeError: false,
      showColorError: false,
    }
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
  created() {
    bus.$on('open-modal', this.setData)
    bus.$on('close-modal', this.clearData)
  },
  destroyed() {
    bus.$off('open-modal')
    bus.$off('close-modal')
  },
  methods: {
    setData(data) {
      this.product = data
      this.openModal = true
      window.document.documentElement.style.overflow = 'hidden'
    },
    clearData() {
      this.product = null
      this.openModal = false
      window.document.documentElement.style.overflow = 'unset'
    },
    closeModal() {
      bus.$emit('close-modal')
    },
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
      this.addToCart(product);
      this.closeModal()
    }
  }
}
</script>

<style>
.slick-slide img{
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.slider-product  img {
  height: 350px!important;
  width: 350px!important;
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