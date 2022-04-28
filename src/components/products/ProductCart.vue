<template>
  <div class="product-inner equal-element" v-if="product">
    <template v-if="layout === 'grid'">
      <div class="product-top">
        <div v-if="product.new" class="flash">
          <span class="onnew">
            <span class="text">
              new
            </span>
          </span>
        </div>
      </div>
      <div class="product-thumb">
        <div class="thumb-inner">
          <router-link :to="{name: 'Product', params: {id : 1}}">
            <img :src="product.avatar" alt="img">
          </router-link>
          <div class="thumb-group">
            <div class="yith-wcwl-add-to-wishlist">
              <div class="yith-wcwl-add-button">
                <a href="javascript:void(0)">Add to Wishlist</a>
              </div>
            </div>
            <a href="javascript:void(0)" class="button quick-wiew-button" @click.stop="openModal(product)">Quick View</a>
<!--            <div class="loop-form-add-to-cart">-->
<!--              <button class="single_add_to_cart_button button">-->
<!--                Add to cart-->
<!--              </button>-->
<!--            </div>-->
          </div>
        </div>
      </div>
      <div class="product-info">
        <div v-if="endDate" class="product-count-down">
          <Countdown :end="endDate" />
        </div>
        <h5 class="product-name product_title">
          <a href="javascript:void(0)">{{product.title}}</a>
        </h5>
        <div class="group-info">
          <div class="stars-rating">
            <div class="star-rating">
              <span :class="'star-' + product.countStar"></span>
            </div>
            <div class="count-star">
              ({{product.countStar}})
            </div>
          </div>
          <div class="price">
            <del>
              ${{product.old_price}}
            </del>
            <ins>
              ${{product.price}}
            </ins>
          </div>
        </div>
      </div>
    </template>
<!--    <template v-else>-->
<!--      <div class="product-top">-->
<!--        <div class="flash" v-if="product.new">-->
<!--          <span class="onnew">-->
<!--            <span class="text">-->
<!--              new-->
<!--            </span>-->
<!--          </span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="products-bottom-content">-->
<!--        <div class="product-thumb">-->
<!--          <div class="thumb-inner">-->
<!--            <a href="javascript:void(0)">-->
<!--              <img :src="product.avatar" alt="img">-->
<!--            </a>-->
<!--            <a href="javascript:void(0)" class="button quick-wiew-button" @click.stop="openModal(product)">Quick View</a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="product-info-left">-->
<!--          <div class="yith-wcwl-add-to-wishlist">-->
<!--            <div class="yith-wcwl-add-button">-->
<!--              <a href="javascript:void(0)">Add to Wishlist</a>-->
<!--            </div>-->
<!--          </div>-->
<!--          <h5 class="product-name product_title">-->
<!--            <a href="javascript:void(0)">{{ product.title }}</a>-->
<!--          </h5>-->
<!--          <div class="stars-rating">-->
<!--            <div class="star-rating">-->
<!--              <span :class="'star-' + product.countStar"></span>-->
<!--            </div>-->
<!--            <div class="count-star">-->
<!--              ({{product.countStar}})-->
<!--            </div>-->
<!--          </div>-->
<!--          <ul class="product-attributes">-->
<!--            <li>-->
<!--              Material:-->
<!--            </li>-->
<!--            <li v-for="material in product.material" :key="material">-->
<!--              <a href="javascript:void(0)">{{material}}</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="attributes-display">-->
<!--            <li class="swatch-color">-->
<!--              Color:-->
<!--            </li>-->
<!--            <li class="swatch-color" v-for="color in product.color" :key="color">-->
<!--              <a href="javascript:void(0)">{{ color }}</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="attributes-display">-->
<!--            <li class="swatch-text-label">-->
<!--              Pots Size:-->
<!--            </li>-->
<!--            <li class="swatch-text-label" v-for="size in product.size" :key="size">-->
<!--              <a href="javascript:void(0)">{{ size }}</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        <div class="product-info-right">-->
<!--          <div class="price">-->
<!--            ${{product.price}}-->
<!--          </div>-->
<!--          <div class="product-list-message">-->
<!--            <i class="icon fa fa-truck" aria-hidden="true"></i>-->
<!--            UK Free Delivery-->
<!--          </div>-->
<!--          <form class="cart">-->
<!--            <div class="single_variation_wrap">-->
<!--              <div class="quantity">-->
<!--                <div class="control">-->
<!--                  <a class="btn-number qtyminus quantity-minus" href="#">-</a>-->
<!--                  <input type="text" data-step="1" data-min="0" value="1"-->
<!--                         title="Qty" class="input-qty qty" size="4">-->
<!--                  <a href="javascript:void(0)" class="btn-number qtyplus quantity-plus">+</a>-->
<!--                </div>-->
<!--              </div>-->
<!--              <button class="single_add_to_cart_button button">Add to cart</button>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
  </div>
</template>

<script>
import {bus} from '@/main'
import Countdown from 'vuejs-countdown'
import productMixin from "@/mixins/product.mixin";

export default {
  name: "ProductCart",
  props: {
    layout: {
      type: String,
      default: 'grid'
    },
    product: {
      type: Object,
      default: () => null
    },
    endDate:{
      type: String,
      default: ""
    }
  },
  components: {Countdown},
  mixins: [productMixin],
  methods: {
    openModal(data) {
      bus.$emit('open-modal', {...data})
    }
  }
}
</script>

<style scoped>
.thumb-inner img{
  width: 266px;
  height: 266px;
  object-fit: cover;
}
</style>

<style>
.product-count-down {
  margin-bottom: 7px;
}
.vuejs-countdown {
  text-align: center;
}
.vuejs-countdown li {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px 0 7px;
  min-width: 40px;
  border-radius: 50%;
  font-family: 'Raleway';
  font-weight: 700;
  margin-bottom: 7px;
  position: relative;
  background-color: #c09578;
  color: #fff;
}
.vuejs-countdown li:after {
  display: none;
}
.vuejs-countdown li:last-child {
  margin-right: 0;
}
.vuejs-countdown li p {
  display: block;
  text-align: center;
  line-height: 12px;
}
.vuejs-countdown li .digit {
  font-size: 11px;
  line-height: 11px;
  padding-bottom: 3px;
}
.vuejs-countdown li .text {
  font-size: 9px;
  text-transform: uppercase;
}
</style>
