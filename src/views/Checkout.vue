<template>
  <div class="main-content main-content-checkout">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs/>
        </div>
      </div>
      <h3 class="custom_blog_title">
        Պատվերի էջ
      </h3>
      <div class="checkout-wrapp">
        <div v-if="!showSuccess" class="shipping-address-form-wrapp">
          <div class="shipping-address-form  checkout-form">
            <div class="row-col-1 row-col">
              <div class="shipping-address">
                <h3 class="title-form">
                  Առաքման տվյալներ
                </h3>
                <div class="row-wrap">
                  <div class="form-row form-row-first">
                    <label class="text">Անուն</label>
                    <input
                        v-model="form.name"
                        title="first"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.name}"
                    >
                    <p class="error-text" v-if="errors.name">Պարտադիր է</p>
                  </div>
                  <div class="form-row form-row-last">
                    <label class="text">Հեռախոսահամար</label>
                    <input
                        v-model="form.phone"
                        title="phone"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.phone}"
                    >
                    <p class="error-text" v-if="errors.phone">Պարտադիր է</p>
                  </div>
                </div>
                <div class="row-wrap">
                  <div class="form-row form-row-last">
                    <label class="text">Հասցե</label>
                    <input
                        v-model="form.address"
                        title="address"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.address}"
                    >
                    <p class="error-text" v-if="errors.address">Պարտադիր է</p>
                  </div>
                  <div class="form-row form-row-first">
                    <label class="text">Փոստային ինդեքս</label>
                    <input
                        v-model="form.zipCode"
                        title="zip"
                        type="text"
                        class="input-text"
                        :class="{'input-error': errors.zipCode}"
                    >
                    <p class="error-text" v-if="errors.zipCode">Պարտադիր է</p>
                  </div>
                </div>
                <CaptchaComponent :form="form" @verify="verifyHandler" />
                <p class="error-text" v-if="errors.token">Պարտադիր է</p>

                <p v-if="errorFromBack" class="error-text">{{errorFromBack}}</p>
              </div>
            </div>
            <div class="row-col-2 row-col">
              <div class="your-order">
                <h3 class="title-form">
                  Ձեր պատվերը
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
                        {{product.price}} դրամ
                        <span class="count">({{product.count}} հատ)</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="order-total">
									<span class="title">
										Ընդհանուր արժեքը՝
									</span>
                  <span class="total-price">
										{{cartTotalPrice}} դրամ
									</span>
                </div>
              </div>
            </div>
          </div>
          <div class="button button-payment" @click="orderHandler">Հաստատել պատվերը</div>
        </div>
        <div v-if="showSuccess" class="end-checkout-wrapp">
          <div class="end-checkout checkout-form">
            <div class="icon">
              <span class="flaticon-checked"></span>
            </div>
            <h3 class="title-checkend">
              Շնորհավորում ենք Ձեր պատվերը գրանցվել է:
            </h3>
            <div class="sub-title">
              Շատ կարճ ժամանակահատվածում մենք ձեզ հետ կապ կհաստատենք:
            </div>
            <router-link to="/products" class="button btn-return">Վերադառնալ ցանկին</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import { http } from '@/api/http-common';
import CaptchaComponent from "../components/Captcha";

export default {
  name: "Checkout",
  components: {CaptchaComponent, Breadcrumbs},
  data() {
    return {
      errorFromBack: "",
      showSuccess: false,
      form: {
        name: "",
        phone: "",
        address: "",
        zipCode: "",
        token: ""
      },
      errors: {
        name: false,
        phone: false,
        address: false,
        zipCode: false,
        token: false,
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
    'form.token'(val){
      this.errors.token = false
    },
  },
  created() {
    this.$store.dispatch('getShopProducts')
  },
  methods: {
    verifyHandler(token) {
      this.form.token = token;
    },
    orderHandler() {
      for(let key in this.form) {
          this.errors[key] = !this.form[key];
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

  @media(max-width: 480px) {
    flex-direction: column;
  }
}
</style>