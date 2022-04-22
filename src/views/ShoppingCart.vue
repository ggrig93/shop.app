<template>
  <div class="site-content">
    <main class="site-main  main-container no-sidebar">
      <div class="container">
        <Breadcrumbs/>
        <div class="row">
          <div class="main-content-cart main-content col-sm-12">
            <h3 class="custom_blog_title">
              Shopping Cart
            </h3>
            <div class="page-main-content">
              <div class="shoppingcart-content">
                <form action="shoppingcart.html" class="cart-form">
                  <table v-if="cartProducts.length" class="shop_table">
                    <thead>
                    <tr>
                      <th class="product-remove"></th>
                      <th class="product-thumbnail"></th>
                      <th class="product-name"></th>
                      <th class="product-price"></th>
                      <th class="product-quantity"></th>
                      <th class="product-subtotal"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(prod, idx) in cartProducts" :key="idx" class="cart_item">
                      <td class="product-remove">
                        <a href="#" class="remove"></a>
                      </td>
                      <td class="product-thumbnail">
                        <a href="#">
                          <img :src="prod.avatar" alt="img"
                               class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image">
                        </a>
                      </td>
                      <td class="product-name" data-title="Product">
                        <router-link :to="{name: 'Product', params: {id: prod.id}}" class="title">{{prod.title}}</router-link>
                        <span class="attributes-select attributes-color">Black,</span>
                        <span class="attributes-select attributes-size">XXL</span>
                      </td>
                      <td class="product-quantity" data-title="Quantity">
                        <div class="quantity">
                          <div class="control">
                            <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                            <input type="text" data-step="1" data-min="0" value="1" title="Qty"
                                   class="input-qty qty" size="4">
                            <a href="#" class="btn-number qtyplus quantity-plus">+</a>
                          </div>
                        </div>
                      </td>
                      <td class="product-price" data-title="Price">
													<span class="woocommerce-Price-amount amount">
														<span class="woocommerce-Price-currencySymbol">
															$
														</span>
														{{prod.price}}
													</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="actions">
                        <div class="coupon">
                          <label class="coupon_code">Coupon Code:</label>
                          <input type="text" class="input-text" placeholder="Promotion code here">
                          <a href="#" class="button"></a>
                        </div>
                        <div class="order-total">
                          <span class="title">Total Price:</span>
                          <span class="total-price">${{cartTotalPrice}}</span>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </form>
                <div class="control-cart">
                  <button class="button btn-continue-shopping" @click="$router.push({name: 'Products'})">
                    Continue Shopping
                  </button>
                  <button class="button btn-cart-to-checkout" @click="$router.push({name: 'Checkout'})">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import data from '@/customdata/products'
export default {
  name: "ShoppingCart",
  components: {Breadcrumbs},
  data() {
    return {
      products: data.products.slice(0, 3)
    }
  },
  computed: {
    cartProducts() {
      return this.$store.state.cartProducts
    },
    cartTotalPrice() {
      return this.$store.state.cartTotalPrice
    },
  },
  created() {
    this.$store.dispatch('getCartProducts')
  }
}
</script>

<style scoped>

</style>