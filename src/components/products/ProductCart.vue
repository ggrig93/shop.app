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
          <img :src="product.avatar" alt="img">
          <div class="thumb-group">
            <div class="yith-wcwl-add-to-wishlist">
              <div class="yith-wcwl-add-button">
                <div
                    v-if="$route.name === 'WishList'"
                    class="product-remove"
                >
                  <span @click="showDeletePopup = product.id"  style="cursor: pointer;">
                    <i aria-hidden="true" class="fa fa-trash-o"></i>
                  </span>
                </div>
                <a
                    v-else
                    style="cursor: pointer;"
                    :class="{ 'active-heart': hasInWishlist(product.id) }"
                    @click.stop="addToWishList(product)"
                >Հավանել</a>
              </div>
            </div>
            <a class="button quick-wiew-button" @click.stop="openModal(product)">Quick View</a>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div v-if="endDate" class="product-count-down">
          <Countdown :end="endDate" />
        </div>
        <h5 class="product-name product_title">
          <router-link :to="{name: 'Product', params: {id : product.id}}">{{product.title}}</router-link>
        </h5>
        <div class="group-info">
          <div class="stars-rating">
            <div class="star-rating">
              <span :class="'star-' + product.countStar"></span>
            </div>
            <div class="count-star">
<!--              ({{product.countStar}})-->
              {{product.stars_rate}}
            </div>
          </div>
          <div class="price">
            <del v-if="product.old_price">
              {{product.old_price}} դր․
            </del>
            <ins>
              {{product.price}} դր․
            </ins>
          </div>
        </div>
      </div>
    </template>
    <DeletePopup
        v-if="showDeletePopup"
        @confirm="removeHandler"
        @close="closeModal"
    />
  </div>
</template>

<script>
import DeletePopup from "@/components/DeletePopup.vue";
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
    index: {
      type: Number,
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
  components: {Countdown, DeletePopup},
  mixins: [productMixin],
  data() {
    return {
      showDeletePopup: false
    }
  },
  methods: {
    openModal(data) {
      bus.$emit('open-modal', {...data})
    },
    closeModal() {
      this.showDeletePopup = false
    },
    removeHandler() {
      this.removeWishListItem(this.showDeletePopup)
      this.closeModal()
    },
  }
}
</script>

<style scoped lang="scss">
.thumb-inner img{
  width: 266px;
  height: 266px;
  object-fit: cover;
}
.product-remove {
  display: inline-block;
  color: #555;
  font-size: 22px;

  &:hover {
    color: #c09578;
  }
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
