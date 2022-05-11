<template>
  <div class="main-content main-content-checkout">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs/>
        </div>
      </div>
      <h3 class="custom_blog_title">
        Checkout
      </h3>
      <div class="checkout-wrapp">
        <div v-if="!showSuccess" class="shipping-address-form-wrapp">
          <div class="shipping-address-form  checkout-form">
            <div class="row-col-1 row-col">
              <div class="shipping-address">
                <h3 class="title-form">
                  Shipping Address
                </h3>
                <div class="row-wrap">
                  <div class="form-row form-row-first">
                    <label class="text">Name</label>
                    <input
                        v-model="form.name"
                        title="first"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.name}"
                    >
                    <p class="error-text" v-if="errors.name">Required</p>
                  </div>
                  <div class="form-row form-row-last">
                    <label class="text">Phone</label>
                    <input
                        v-model="form.phone"
                        title="phone"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.phone}"
                    >
                    <p class="error-text" v-if="errors.phone">Required</p>
                  </div>
                </div>
                <div class="row-wrap">
                  <div class="form-row form-row-last">
                    <label class="text">Address</label>
                    <input
                        v-model="form.address"
                        title="address"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.address}"
                    >
                    <p class="error-text" v-if="errors.address">Required</p>
                  </div>
                  <div class="form-row form-row-first">
                    <label class="text">Zip code</label>
                    <input
                        v-model="form.zipCode"
                        title="zip"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.zipCode}"
                    >
                    <p class="error-text" v-if="errors.zipCode">Required</p>
                  </div>
                </div>
                <p v-if="errorFromBack" class="error-text">{{errorFromBack}}</p>
              </div>
            </div>
            <div class="row-col-2 row-col">
              <div class="your-order">
                <h3 class="title-form">
                  Your Order
                </h3>
                <ul class="list-product-order">
                  <li
                      v-for="(product, i) in shopProducts"
                      :key="i"
                      class="product-item-order"
                  >
                    <div class="product-thumb">
                      <router-link :to="{name: 'Product', params: {id: product.id}}">
                        <img :src="product.avatar" alt="img">
                      </router-link>
                    </div>
                    <div class="product-order-inner">
                      <h5 class="product-name">
                        <router-link :to="{name: 'Product', params: {id: product.id}}" class="title">{{product.title}}</router-link>
                      </h5>
                      <span class="attributes-select attributes-color">{{product.color.name}},</span>
                      <span class="attributes-select attributes-size">{{product.size.name}}</span>
                      <div class="price">
                        ${{product.price}}
                        <span class="count">x{{product.count}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="order-total">
									<span class="title">
										Total Price:
									</span>
                  <span class="total-price">
										${{cartTotalPrice}}
									</span>
                </div>
              </div>
            </div>
          </div>
          <div class="button button-payment" @click="orderHandler">Order</div>
        </div>
<!--        <div class="payment-method-wrapp">-->
<!--          <div class="payment-method-form checkout-form">-->
<!--            <div class="row-col-1 row-col">-->
<!--              <div class="payment-method">-->
<!--                <h3 class="title-form">-->
<!--                  Payment Method-->
<!--                </h3>-->
<!--                <div class="group-button-payment">-->
<!--                  <a href="#" class="button btn-credit-card">Credit Card</a>-->
<!--                  <a href="#" class="button btn-paypal">paypal</a>-->
<!--                </div>-->
<!--                <p class="form-row form-row-card-number">-->
<!--                  <label class="text">Card number</label>-->
<!--                  <input type="text" class="input-text" placeholder="xxx - xxx - xxx - xxx">-->
<!--                </p>-->
<!--                <p class="form-row forn-row-col forn-row-col-1">-->
<!--                  <label class="text">Month</label>-->
<!--                  <select title="month" data-placeholder="01" class="chosen-select" tabindex="1">-->
<!--                    <option value="thang01">01</option>-->
<!--                    <option value="thang02">02</option>-->
<!--                    <option value="thang03">03</option>-->
<!--                    <option value="thang04">04</option>-->
<!--                    <option value="thang05">05</option>-->
<!--                    <option value="thang06">06</option>-->
<!--                    <option value="thang07">07</option>-->
<!--                    <option value="thang08">08</option>-->
<!--                    <option value="thang09">09</option>-->
<!--                    <option value="thang10">10</option>-->
<!--                    <option value="thang11">11</option>-->
<!--                    <option value="thang12">12</option>-->
<!--                  </select>-->
<!--                </p>-->
<!--                <p class="form-row forn-row-col forn-row-col-2">-->
<!--                  <label class="text">Year</label>-->
<!--                  <select title="Year" data-placeholder="2017" class="chosen-select" tabindex="1">-->
<!--                    <option value="nam2010">2010</option>-->
<!--                    <option value="nam2011">2011</option>-->
<!--                    <option value="nam2012">2012</option>-->
<!--                    <option value="nam2013">2013</option>-->
<!--                    <option value="nam2014">2014</option>-->
<!--                    <option value="nam2015">2015</option>-->
<!--                    <option value="nam2016">2016</option>-->
<!--                    <option value="nam2017">2017</option>-->
<!--                    <option value="nam2018">2018</option>-->
<!--                    <option value="nam2020">2020</option>-->
<!--                  </select>-->
<!--                </p>-->
<!--                <p class="form-row forn-row-col forn-row-col-3">-->
<!--                  <label class="text">CVV</label>-->
<!--                  <select title="CVV" data-placeholder="238" class="chosen-select" tabindex="1">-->
<!--                    <option value="cvv1">238</option>-->
<!--                    <option value="cvv2">354</option>-->
<!--                    <option value="cvv3">681</option>-->
<!--                    <option value="cvv4">254</option>-->
<!--                    <option value="cvv5">687</option>-->
<!--                    <option value="cvv6">123</option>-->
<!--                    <option value="cvv7">951</option>-->
<!--                    <option value="cvv8">852</option>-->
<!--                    <option value="cvv9">753</option>-->
<!--                    <option value="vcc10">963</option>-->
<!--                  </select>-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row-col-2 row-col">-->
<!--              <div class="your-order">-->
<!--                <h3 class="title-form">-->
<!--                  Your Order-->
<!--                </h3>-->
<!--                <ul class="list-product-order">-->
<!--                  <li class="product-item-order">-->
<!--                    <div class="product-thumb">-->
<!--                      <a href="#">-->
<!--                        <img src="http://ledthanhdat.vn/html/ysera/assets/images/item-order1.jpg" alt="img">-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="product-order-inner">-->
<!--                      <h5 class="product-name">-->
<!--                        <a href="#">3D Dining Chair</a>-->
<!--                      </h5>-->
<!--                      <span class="attributes-select attributes-color">Black,</span>-->
<!--                      <span class="attributes-select attributes-size">XXL</span>-->
<!--                      <div class="price">-->
<!--                        $45-->
<!--                        <span class="count">x1</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                  <li class="product-item-order">-->
<!--                    <div class="product-thumb">-->
<!--                      <a href="#">-->
<!--                        <img src="http://ledthanhdat.vn/html/ysera/assets/images/item-order2.jpg" alt="img">-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="product-order-inner">-->
<!--                      <h5 class="product-name">-->
<!--                        <a href="#">3D Dining Chair</a>-->
<!--                      </h5>-->
<!--                      <span class="attributes-select attributes-color">Black,</span>-->
<!--                      <span class="attributes-select attributes-size">XXL</span>-->
<!--                      <div class="price">-->
<!--                        $45-->
<!--                        <span class="count">x1</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </ul>-->
<!--                <div class="order-total">-->
<!--									<span class="title">-->
<!--										Total Price:-->
<!--									</span>-->
<!--                  <span class="total-price">-->
<!--										$95-->
<!--									</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="button-control">-->
<!--            <a href="#" class="button btn-back-to-shipping">Back to shipping</a>-->
<!--            <a href="#" class="button btn-pay-now">Pay now</a>-->
<!--          </div>-->
<!--        </div>-->
        <div v-if="showSuccess" class="end-checkout-wrapp">
          <div class="end-checkout checkout-form">
            <div class="icon">
            </div>
            <h3 class="title-checkend">
              Congratulation! Your order has been processed.
            </h3>
            <div class="sub-title">
              Aenean dui mi, tempus non volutpat eget, molestie a orci.
              Nullam eget sem et eros laoreet rutrum.
              Quisque sem ante, feugiat quis lorem in.
            </div>
            <router-link to="/products" class="button btn-return">Return to Store</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import { http } from '@/api/http-common';

export default {
  name: "Checkout",
  components: {Breadcrumbs},
  data() {
    return {
      errorFromBack: "",
      showSuccess: false,
      form: {
        name: "",
        phone: "",
        address: "",
        zipCode: "",
      },
      errors: {
        name: false,
        phone: false,
        address: false,
        zipCode: false,
      }
    }
  },
  computed: {
    shopProducts() {
      return this.$store.state.shopProducts
    },
    cartTotalPrice() {
      return this.$store.state.cartTotalPrice
    },
  },
  watch: {
    'form.name'(){
      this.errors.name = false
    },
    'form.phone'(){
      this.errors.phone = false
    },
    'form.address'(){
      this.errors.address = false
    },
    'form.zipCode'(){
      this.errors.zipCode = false
    },
  },
  created() {
    this.$store.dispatch('getShopProducts')
  },
  methods: {
    orderHandler() {
      for(let key in this.form) {
        if(!this.form[key]) {
          this.errors[key] = true;
        }
      }
      if(Object.values(this.errors).includes(true)) return;
      const orders = []
      this.shopProducts.forEach(item => {
        let product = {
          id: item.id,
          count: item.count,
          size: item.size.id,
          color: item.color.id,
        }
        orders.push(product)
      })
      const data = {
        ...this.form,
        orders
      }
      http.post("/order", data)
      .then(() => {
        this.showSuccess = true;
        localStorage.removeItem('shopProducts');
        this.$store.dispatch('getShopProducts');
        this.$store.commit("setShopProducts", JSON.parse(localStorage.getItem("shopProducts")))
        this.errorFromBack = ""
      })
      .catch(err => {
        this.errorFromBack = err.response?.data.message
      })
    }
  }
}
</script>

<style scoped lang="scss">
.error-text {
  color: #e80c0c;
  margin: 0;
}
.input-error {
  border: 1px solid #e80c0c;
}
.row-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>